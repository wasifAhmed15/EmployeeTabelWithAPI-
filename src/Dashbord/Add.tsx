import { TextField,Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Add (){

    let Navigat = useNavigate()
    let [model,setmodel]=useState<any>({})
    const Fillmodel = (key:string,val:any)=>{
        model[key]=val
        setmodel({...model})


    }

    const AddData = ()=>{
        console.log(model)
        axios.post("http://localhost:5000/Employes",model).then((res)=>{
            console.log(res)
            Navigat('/Admin/Employe')
        }).catch((err)=>{
            console.log(err)
        })
    }
    return <>
    <div className="  d-flex justify-content-center align-items-center" style={{height:"500px"}}>

    <div className=" bg-[rgba(255,255,255,.2)] p-10 rounded-lg text-center border">
        <div>
            <h1>Add</h1>

        </div>

        <div className="row py-2">
            <div className="col-lg-6">
                <TextField variant="outlined" label="Name" onChange={(e:any)=>Fillmodel("name",e.target.value)} value={model.name}/>
                

            </div>

            <div className="col-lg-6">
            <TextField variant="outlined" label="Email" onChange={(e:any)=>Fillmodel("Email",e.target.value)} value={model.Email}/>
                </div>
        </div>



        <div className="row py-2">
            <div className="col-lg-6">
                <TextField variant="outlined" label="Adress" onChange={(e:any)=>Fillmodel("Adress",e.target.value)} value={model.Address}/>
                

            </div>

            <div className="col-lg-6">
            <TextField variant="outlined" label="Department" onChange={(e:any)=>Fillmodel("Department",e.target.value)} value={model.Department}/>
                </div>
        </div>

        <div className="text-center py-3">
            <Button variant="contained" color="info" onClick={()=>AddData()}>Add Data</Button>

        </div>
        
    </div>
    </div>
    
    </>
}