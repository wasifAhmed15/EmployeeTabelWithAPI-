import { BrowserRouter,Routes,Route } from "react-router-dom";
import CardData from "../Screem/API";
import Dashbord from "../Dashbord/Dashbord";
import Login from "../Screem/Login";


export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<Login/>}/>
        <Route path="Admin/*" element={<Dashbord/>}/>
    </Routes>
    
    
    </BrowserRouter>
    
    </>
}