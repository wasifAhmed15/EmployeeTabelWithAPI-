import { TextField } from "@mui/material"
import { useState } from "react"
import { Button } from "@mui/material"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Login (){
    let [model,usemodel]=useState<any>({})
    const Navigate = useNavigate()
    const Fellmodel = (key:string,val:any)=>{
        model[key]=val
        usemodel({...model})

    }

    const LoginData = ()=>{

        console.log(model)
        axios.post("http://localhost:5000/Auth/login",model).then((res)=>{
            
        Navigate("/Admin");
            
            
            

        }).catch((err)=>{
            console.log(err)
        })
        

    }
    return <>

<div className="  d-flex justify-content-center align-items-center" style={{height:"500px"}}>
        <div className=" bg-[rgba(255,255,255,.2)] p-10 rounded-lg text-center">
            <h1>Login</h1>
            <div className="py-3">
    <TextField variant="outlined" type="text" label="User Name"  onChange={(e:any)=>Fellmodel("Email",e.target.value)} value={model.Email}/>

            </div>

            <div className="py-3">
    <TextField variant="outlined" type="Password" label="Password" onChange={(e:any)=>Fellmodel("Password",e.target.value)} value={model.Password}/>

            </div>


    <div className="text-center py-4">
        <Button variant="contained" color="info" onClick={()=>LoginData()}>LOGIN</Button>
    </div>







    
</div>

    </div>
    

    
    </>

}