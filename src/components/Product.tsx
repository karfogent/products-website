import React, {useState} from "react";
import {IProduct} from "../models";

interface ProductProps{
    product: IProduct
}

export function Product({product}: ProductProps){
    const[details, setDetails] = useState(false)

    const btnBgClassName = details ? "bg-yellow-400" : "bg-blue-400"
    const btnClasses = ['py-2 px-4 border font-bold text-white', btnBgClassName]
    const clrOfRate = product?.rating?.rate > 3.5 ? "text-green-600" : "text-red-600"
    const clrOfRates = ['font-bold', clrOfRate]
    // Первым аргументов константа принимает свойства всех классов, а вторым особенное у каждого
    return(
        <div
            className="border py-1 px-4 flex flex-col items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title}/>
            <p>{product.title}</p>
            <span
                className="font-bold">{product.price}$
            </span>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                { details ? "Hide Details" : "Show Details" }
            </button>

            { details && <div>
                <p>{product.description}</p>
                <p className="font-bold text-gray-800">Rate: <span className={clrOfRates.join(' ')}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}