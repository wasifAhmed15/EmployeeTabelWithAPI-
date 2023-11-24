import axios from "axios"
import { useState,useEffect } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

export default function Employelist (){
    let [data,setdata]=useState<any>([])
    let navigate = useNavigate()
    let Param = useParams()
    let getApi = ()=>{
        axios
        .get("http://localhost:5000/Employes").then((res)=>{
            setdata([...res.data.data])
            console.log(res.data.data)


        }).catch((err)=>{
            console.log(err)
        })
    }


    let Deletedata = (id:any)=>{
      axios .delete(`http://localhost:5000/Employes/${id}`).then((res)=>{
        console.log(res)
      
      }).catch((err)=>{
        console.log(err)
      })
    }


    useEffect(()=>{
      getApi()
    },[])
    return <>
  <div className="m-auto text-center">
    <h1>Employye</h1>

  </div>

  <div className="ms-auto text-end py-2">
    <Button variant="contained" startIcon={<AddIcon/>} onClick={()=>navigate("/Admin/Add")}>Add</Button>
  </div>

  <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
           
            <TableCell align="center">name</TableCell>
            <TableCell align="center">Email&nbsp;</TableCell>
            <TableCell align="center">Department&nbsp;</TableCell>
            <TableCell align="center">Address&nbsp;</TableCell>
            <TableCell align="center">Delete&nbsp;</TableCell>
            <TableCell align="center">Edit&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {data.map((x:any,i:any) => (
            <TableRow
              key={x.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" align="center">
                {x.name}
              </TableCell>
              <TableCell align="center">{x.Email}</TableCell>
              <TableCell align="center">{x.Department}</TableCell>
              <TableCell align="center">{x.Adress}</TableCell>
             
              <TableCell align="center">
              <Button variant="contained" color="error" startIcon={<DeleteIcon/>} onClick={()=>Deletedata(x._id)}>
  Delete
</Button>
    
              </TableCell>



<TableCell align="center">
  <Button variant="contained" color="info" startIcon={<EditIcon/>} onClick={()=>navigate(`/Admin/Edit/${x._id}`)}>Edit</Button>
</TableCell>




           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
}