

import AdminHome from './component/AdminDashboard/AdminHome';
import CompanyProfileHome from './component/CompanyProfile/CompanyProfileHome';
import Register from './component/CompanyProfile/Register';
import DesignerHome from './component/DesignerDashboard/DesignerHome';
import HeadHome from './component/HeadDashboard/HeadHome';
import OaEntry from './component/ProductionDashboard/OaEntry';


import ProductionHome from './component/ProductionDashboard/ProductionHome';
import WarrantyCard from './component/ProductionDashboard/WarrantyCard';
import Wpp from './component/ProductionDashboard/Wpp';
import StoreRIT from './component/StoreAndRIT/StoreRIT';
import SupplierHome from './component/SupplierDashboard/SupplierHome';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './component/CompanyProfile/login.js';
import Srno from './component/ProductionDashboard/Srno';
import Fabdash from './component/Fabdashboard/fabdash';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Ador from "../src/images/Ador.gif"
import React, { useEffect } from "react";
import Serialnoplate from './component/ProductionDashboard/Serialnoplate';
function App() {
  const[loader,setLoader]=useState(true)



  useEffect(()=>{

    var available=sessionStorage.getItem("loader")

    if (available) {setLoader(false)
      
    }

    setTimeout(()=>{
      setLoader(false);
     
      sessionStorage.setItem("loader","true")
      
      },6000)


},[])



  return (
    <div  >
      
      <BrowserRouter>
      <Routes>
<Route  path='/companyprofilehome' element={<CompanyProfileHome/>}/>
<Route  path='/' element={<CompanyProfileHome/>}/>
<Route path='/supplierdashboard' element={<SupplierHome/>}/>
<Route path='/productionhome' element={<ProductionHome/>}/>
<Route path='/adminhome' element={<AdminHome/>}/>
<Route path='/designerhome' element={<DesignerHome/>}/>
<Route path='/headhome' element={<HeadHome/>}/>
<Route path='/storerit' element={<StoreRIT/>}/>
<Route path='/productionhome/oaentry' element={<OaEntry/>}/>
<Route path='/productionhome/wppplan' element={<Wpp/>}/>
<Route path='/companyprofilehome/register' element={<Register/>}/>
<Route path='/companyprofilehome/login' element={<Login/>}/>
<Route path='/productionhome/warrantycard' element={<WarrantyCard/>}/>
<Route path='/productionhome/srno' element={<Srno/>}/>
<Route path='/fabdash' element={<Fabdash/>}/>
<Route path='/productionhome/serialnoplate' element={<Serialnoplate/>}/>





      </Routes>
      
      </BrowserRouter>

      <Backdrop
        sx={{backgroundColor:"white" ,color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader} 
        
      >
        <img alt=<CircularProgress color="inherit" /> style={{width:"100"}} src={Ador}/>
      
    
      </Backdrop>
     
   
    </div>
  );
}

export default App;
