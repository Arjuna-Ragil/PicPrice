import React from 'react'
import addWishlist from '../../assets/search/addWishlistIcon.svg'
import { useState, useEffect } from "react";
import { db, geminiModel } from '../../services/firebase';
import { useAuth } from '../../hooks/authContext';
import { addDoc, collection, doc } from 'firebase/firestore';

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
        await addDoc(historyRef, data)
    } catch (error) {
        console.log(error)
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
            give me the name of the product, detail of the product (30 words),
            the average price, the lowest price, the highest price in rupiah
            and two links to the product in e-commerce sites around the world (give search product url if you can't find the product)
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
            only return the json, no other text, explanation, code, or comment, just the json format that i gave you
            every field must be filled
            links must be e-commerce links, no article
        `,
    ]);
      const raw = result.response.text();
      const clean = raw.replace(/```json|```/g, "").trim();
      const jsonResponse = JSON.parse(clean);
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
                <img className='p-4' src={addWishlist} alt='add to wishlist'/>
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