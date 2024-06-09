import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    //we want to call an api
    //we want that hook jab b call ho, tab api fetch ho
    //jab b ek component mount ho, tab hum hook call krna chahte hein.. (useEffect hook)

    //https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-05-27/v1/currencies/inr.json
    const [data,setData]=useState({})

     useEffect(()=>{
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        
     },[currency])

     console.log(data)

    return data
 }

export default useCurrencyInfo;