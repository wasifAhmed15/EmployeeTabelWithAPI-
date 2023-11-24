import { TextField,Button } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"

export default function EditData (){
    let param = useParams()
    let [model,setmodel]=useState<any>({})
    const Fillmodel =(key:string,val:any)=>{
        model[key]=val
        setmodel({...model})
    }
    const Edit =()=>{
        console.log(model)
        axios.put(`http://localhost:5000/Employes/${param.id}`,model).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    return <>
 
 <div className="  d-flex justify-content-center align-items-center" style={{height:"500px"}}>
        <div className=" bg-[rgba(255,255,255,.2)] p-10 rounded-lg text-center border">
            <h1>Edit </h1>
            <div className="row">
                <div className="col-lg-6 ">
    <TextField variant="outlined" type="text" label="Name"  onChange={(e:any)=>Fillmodel("Name",e.target.value)} value={model.Name}/>

                </div>
                <div className="col-lg-6 ">
    <TextField variant="outlined" type="text" label="Email" onChange={(e:any)=>Fillmodel("Email",e.target.value)} value={model.Email}/>

                </div>

            </div>


            <div className="row py-3">
                <div className="col-lg-6 ">
    <TextField variant="outlined" type="text" label="Department" onChange={(e:any)=>Fillmodel("Department",e.target.value)} value={model.Department} />

                </div>
                <div className="col-lg-6 ">
    <TextField variant="outlined" type="text" label="Adress" onChange={(e:any)=>Fillmodel("Adress",e.target.value)} value={model.Adress}/>

                </div>

                {/* <div className="col-lg-6 ">
    <TextField variant="outlined" type="text" label="id" onChange={(e:any)=>Fillmodel("id",e.target.value)} value={model.id}/>

                </div> */}

            </div>

            <div className="text-center">
               <Button variant="contained" color="info" onClick={()=>Edit()}>Edit</Button> 

            </div>
            

           

            



            </div>
            </div>
    
    </>
}