import React from 'react'
import addWishlist from '../../assets/search/heart.svg'
import addedWishlist from '../../assets/search/heartFilled.svg'
import { useState, useEffect } from "react";
import { db, geminiModel } from '../../services/firebase';
import { useAuth } from '../../hooks/authContext';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

const Result = ({processImage, retry, firebaseImage, firebaseSearch}) => {

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

  const [filledWishlistIconHandler, setFilledWishlistIconHandler] = useState(false)
  const [filledWishlistIcon, setFilledWishlistIcon] = useState(addWishlist)
  const [showShop, setShowShop] = useState(false)

  useEffect(() => {
    if (filledWishlistIconHandler) {    
        setFilledWishlistIcon(addedWishlist)
    }
  }, [filledWishlistIconHandler])

  async function addHistory(user, data, file) {
    if (!user) {
        console.log("not logged in");
        return
    }
    try {
        const userDocRef = doc(db, "users", user)
        const historyRef = collection(userDocRef, "history")

        const storage = getStorage()
        let photoURL = ""
        
        if (file && file.file) {
            const imageRef = ref(storage, `history_images/${user}/${Date.now()}`)
            await uploadBytes(imageRef, file.file)

            photoURL = await getDownloadURL(imageRef)
        }

        const dataWithTimeStamp = {
            ...data,
            createdAt: serverTimestamp(),
            photoURL: photoURL,
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
        setFilledWishlistIconHandler(true)
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
        let productName
        if (firebaseSearch) {
            productName = firebaseSearch
        } else {
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
        
            const productNameDetected = result.response.text().trim()
            productName = productNameDetected
        }
        const search = await searchProduct(productName)

        const summary = await geminiModel.generateContent([
            `the product name is ${productName}, and here are real links to this product:`, JSON.stringify(search),
            `based only on those links, give me the name of the product, detail of the product (30 words),
            the average price, the lowest price, the highest price (from the snippets given) and make sure all
            prices are in the same currency (change as needed),
            and include two of the real links to the product from the search result given,
            for the store name, use the name of the e-commerce site (e.g. Amazon)
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
        setShowShop(true)

        await addHistory(user.uid, jsonResponse, firebaseImage)

    } catch (error) {
      alert("didn't get the result, please try again");
      console.log(error);
    }
  }

  useEffect(()=>{
    if(!processImage && ! firebaseSearch) return;
    getSummary();
  },[processImage, retry, firebaseSearch]);

  return (
    <>
        <div className={`
            grid
            grid-cols-2
            grid-rows-4
            rounded-2xl
            h-110   
            items-center
            gap-x-4
            gap-y-10
            bg-container
            p-5
            border-black
            border-2
        `}>
            <div className={`
                col-span-2
                row-start-1
                row-end-2
                flex
                flex-row
                items-center
                w-full
                bg-white
                rounded-4xl
            `}>
                <h3 className={`
                    w-full
                    text-center
                    p-2
                `}>
                    {result.product_name}
                </h3>
                <img className='p-4' src={filledWishlistIcon} alt='add to wishlist' onClick={() => addWishlistHandler(user, result)}/>
            </div>
            <div className={`
                    row-start-2
                    row-end-6
                    flex
                    flex-col
                    rounded-2xl
                    bg-white
                    h-full
                    p-7
            `}>
                <h4 className={`
                    font-poppins
                    font-medium
                    text-xl
                    text-black
                    text-center
                `}>
                    Price
                </h4>

                <div className={`
                    flex
                    flex-col
                    gap-2
                    row-start-3
                    row-end-6
                    h-full
                    justify-center
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
            </div>
            
            <div className={`
                row-start-2
                row-end-6
                flex
                flex-col
                justify-between
                rounded-2xl
                gap-2
                bg-white
                h-full
                p-7
            `}>
                <h4 className={`
                    font-poppins
                    font-medium
                    text-xl
                    text-black
                    text-center
                `}>
                    Product Description
                </h4>

                <div className={`
                    row-start-3
                    row-end-6
                    flex
                    flex-col
                    gap-3
                    justify-evenly
                    h-full
                    p-5
                    
                `}>
                    <p>{result.detail}</p>
                    <div className='flex flex-row justify-evenly'>
                        <a href={result.link_one} target='_blank' rel='noopener noreferer' className={`${showShop ? 'bg-shop-btn' : 'hidden'} p-3 rounded-3xl`}>
                            {result.link_one_shop_name}
                        </a>
                        <a href={result.link_two} target='_blank' rel='noopener noreferer' className={`${showShop ? 'bg-shop-btn' : 'hidden'} p-3 rounded-3xl`}>
                            {result.link_two_shop_name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Result