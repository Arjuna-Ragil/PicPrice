import React from 'react'
import addWishlist from '../../assets/search/addWishlistIcon.svg'
import { useState, useEffect } from "react";
import { db, geminiModel } from '../../services/firebase';
import { useAuth } from '../../hooks/authContext';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';

const Result = ({processImage, retry}) => {

    const { user } = useAuth();

  const [result,setResult] = useState({
    product_name: "",
    detail: "",
    average_price: "",
    lowest_price: "",
    highest_price: "",
    link_one_shop_name: "",
    link_one: "",
    link_two_shop_name: "",
    link_two: ""
  });

  async function addHistory(user, data) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const userDocRef = doc(db, "users", user)
        const historyRef = collection(userDocRef, "history")
        const dataWithTimeStamp = {
            ...data,
            createdAt: serverTimestamp(),
        }
        await addDoc(historyRef, dataWithTimeStamp)
    } catch (error) {
        console.log(error)
    }
  }

  async function addWishlistHandler(user, data) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const userDocRef = doc(db, "users", user.uid)
        const wishlistRef = collection(userDocRef, "wishlist")
        await addDoc(wishlistRef, data)
    } catch (error) {
        console.log(error)
    }
  }

  async function searchProduct(productName) {
    const apiKey = "AIzaSyAxmryC-1v1vW7udIv3UpuNyNxdxD3BIAY"
    const searchEngineId = "533bce3e3f5b848be"
    const query = encodeURIComponent(productName)
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}`

    try {
        const response = await fetch(url)
        const data = await response.json()

        const items = data.items || []
        const links = items.slice(0,20).map(item => ({
            shop_name: item.title,
            link: item.link,
            source: new URL(item.link).hostname,
            snippet: item.snippet
        }))

        return links
    } catch (error) {
        console.log("error when searching product: ", error)
    }
  }
  
  async function getSummary(){
    try {
      const result = await geminiModel.generateContent([
        {
            inlineData: {
                data: processImage.file,
                mimeType: processImage.type,
            }
        },
        `
            What is the name of the product in the image? identify the exact product as specifically as possible,
            if it's a character or variant, include it and avoid using "figure" or "toy" alone,
            use all visible packaging, label, and unique traits to identify the product,
            Return only the name of the product as a string 
            and include price at the end of the product name, no other text
        `,
    ]);

    const productName = result.response.text().trim()
    const search = await searchProduct(productName)

    const summary = await geminiModel.generateContent([
        `the product name is ${productName}, and here are real links to this product:`, JSON.stringify(search),
        `based only on those links, give me the name of the product, detail of the product (30 words),
        the average price, the lowest price, the highest price (from the snippets given) and make sure all
        prices are in the same currency (change as needed),
        and include two of the real links to the product from the search result given.
        in a json format
            {
            "product_name": "string",
            "detail": "string",
            "average_price": "number",
            "lowest_price": "number",
            "highest_price": "number",
            "link_one_shop_name: "string",
            "link_one": "string",
            "link_two_shop_name": "string",
            "link_two": "string"
            }
        only return the json, no other text, explanation, code, or comment, 
        just the json format that i gave you
        every field must be filled`
    ])
      const raw = summary.response.text();
      const clean = raw.replace(/```json|```/g, "").trim();
      const jsonResponse = JSON.parse(clean);
      console.log(jsonResponse)
      setResult(jsonResponse);

      await addHistory(user.uid, jsonResponse)

    } catch (error) {
      alert("didn't get the result, please try again");
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!processImage) return;
    getSummary();
  },[processImage, retry]);

  return (
    <>
        <div className={`
            grid
            grid-cols-2
            grid-rows-5
            h-full
            items-center
            gap-x-4
            bg-tertiary
            shadow-[5px_10px_5px_rgba(0,0,0,0.3)]
            p-5
        `}>
            <div className={`
                col-span-2
                row-start-1
                row-end-2
                flex
                flex-row
                items-center
                w-full
            `}>
                <h3 className={`
                    bg-neutral
                    w-full
                    p-2
                    rounded-xl
                    border-3
                    border-primary
                    text-center
                `}>
                    {result.product_name}
                </h3>
                <img className='p-4' src={addWishlist} alt='add to wishlist' onClick={() => addWishlistHandler(user, result)}/>
            </div>

            <h4 className={`
                font-VictorMono
                text-2xl
                text-white
                text-center
            `}>
                Price
            </h4>

            <h4 className={`
                font-VictorMono
                text-2xl
                text-white
                text-center
            `}>
                Product Detail
            </h4>

            <div className={`
                flex
                flex-col
                gap-2
                row-start-3
                row-end-6
            `}>
                <p className={`
                    bg-average
                    p-3
                    rounded-2xl
                `}>
                    Average: $ {result.average_price}
                </p>
                <p className={`
                    bg-lowest
                    p-3
                    rounded-2xl
                `}>
                    Lowest: $ {result.lowest_price}
                </p>
                <p className={`
                    bg-highest
                    p-3
                    rounded-2xl
                `}>
                    Highest: $ {result.highest_price}
                </p>
            </div>

            <div className={`
                row-start-3
                row-end-6
                flex
                flex-col
                justify-evenly
                h-full
                bg-neutral
                border-2
                border-primary
                rounded-2xl
                p-5
                
            `}>
                <p>{result.detail}</p>
                <a href={result.link_one} target='_blank' rel='noopener noreferer'>
                    {result.link_one_shop_name}
                </a>
                <a href={result.link_two} target='_blank' rel='noopener noreferer'>
                    {result.link_two_shop_name}
                </a>
            </div>
        </div>
    </>
  )
}

export default Result