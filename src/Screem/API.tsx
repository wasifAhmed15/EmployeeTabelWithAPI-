import axios from "axios"
import { useState,useEffect } from "react"

export default function CardData (){
    let [text, setText] = useState<any>([]);
    const Card = ()=>{
        axios
        .get("http://localhost:5000/Product").then((res)=>{
           
            console.log(res.data)
            
            setText([...res.data.data])
        }).catch((err)=>{
            console.log(err,"data is not Arry")
        })

    }

    useEffect(()=>{
        Card()

    },[])
    
    return <>
 {
    text.map((x:any,i:any)=>{
        return <div>
            <h1>{x.productname}</h1>
            <img src={x.productimage}  style={{width:"100px"}} />
        </div>
    })
 }
    
    
    </>
}