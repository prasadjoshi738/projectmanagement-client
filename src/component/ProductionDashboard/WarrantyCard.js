import React, { useRef, useState ,useEffect} from "react";
import "./Warrantycard.css";
import logo from "../../images/logo.jpg";
import Sign from "../../images/sign.png";
import {useReactToPrint} from 'react-to-print'
import axios from "axios";
  



const WarrantyCard = () => {

  const[projname,setProjname]=useState('')
  const[srstart,setSrstart]=useState('')
 



  const componentRef = useRef();



  const handleprint =useReactToPrint({
content:()=>componentRef.current,
documentTitle:`Warranty Card ${projname}-${srstart}`,
onafterprint:()=>alert('print Success')


  })
  const serialno=[{
    startsrno:1100,
    lastsrno:1115,
    proddesc:'VMS'
  },{
    startsrno:1,
    lastsrno:5,
    proddesc:'VMS'
  },{
    startsrno:1,
    lastsrno:5,
    proddesc:'VMS'
  }]

  const getwarrantydata = async (req, res) => {
    await axios
      .get(`${URL}/getwarrantydata`)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getwarrantydata();
  });





  return (
    <><button onClick={handleprint}>Print This Page</button>
    <div ref={componentRef} style={{width: '100%',height:window.innerHeight }}>

  {serialno.map((item,index)=>(

  
  <div onLoad={(()=>{
    setProjname(item.proddesc);setSrstart(item.startsrno)
    
        })}
  style={{
    width: 750,
    height: 1080,
    backgroundColor: "white",
    border: "3px solid black",
    padding: 30,
    margin: "20px",
  }}
  >
  <div style={{ borderBottom: "2px solid black" }}>
    <h1
      style={{
        fontStyle: "italic",
        color: "red",
        fontWeight: 600,
        textAlign: "center",
      }}
    >
      WARRANTY CARD
    </h1>
    <div 
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
      <h5 style={{ fontSize: 12 }}>
        <b>
          Model/Rating:<div style={{display:"inline-block",width:300}} >{item.proddesc}</div> 
        </b>
      </h5>
      <h5 style={{ fontSize: 12, fontWeight: 600, marginLeft: 60 }}>
        <b>Serial Number: {item.startsrno}-{item.lastsrno}-06-03-2023</b>
      </h5>
    </div>
  </div>
  
  <div style={{marginTop:10}}>
    <h6 style={{ fontSize: 15 }}>
      This equipment is under warranty against proven defects arising
      solely from faulty workmanship of materials for a period of 18
      months from the date of supply or 12 months from the date of
      commissioning, whichever is earlier as per the terms of APL order
      acceptance and is limited to repairs of the equipment, provided
      always the following conditions are observed:
    </h6>
  
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 40,
        borderBottom: "3px solid black",
      }}
    >
      <div style={{ width: 120, height: 610 }}>
        <img
          style={{ marginTop: 190, padding: 4,marginInlineStart:-15 }}
          width="110"
          src={logo}
          alt="logo"
        />
      </div>
      <div style={{ width: 600, height: 610 }}>
        <h6 className="term" style={{ marginBottom: 2 }}>
          1. That the equipment is operated in accordance with the
          company’s published instructions, INCLUDING Instructions,
          Inspection & maintenance manuals, Technical Drawings, Documents
          etc...
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          2. That equipment has not been subject to misuse or tampered
          with in any way.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          3. That the full purchase price has been paid for the equipment.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          4. That this warranty does not cover damage in transit.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          5. That company shall in no event be liable for damages for the
          delay caused by defects and no allowance will be made for
          repairs and alterations unless made with its written consent.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          6. That company will not be liable for any special or
          consequential damages.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          7. Warranty for good reproduction will not hold good if
          materials other than APL make are used with the equipment.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          8. The company will not be responsible for work done apparatus
          furnished of repairs made by others.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          9. That in case of any parts / equipment sent to the
          manufacturing unit for replacement, the to and for charges will
          be borne by the customer.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          10. No warranties except above are operative.
        </h6>
        <h6 className="term" style={{ marginBottom: 20 }}>
          This warranty does not cover the consumables being supplied with
          the equipment.
        </h6>
      </div>
    </div>
  </div>
  <div style={{ display: "flex", flexDirection: "row" }}>
    {" "}
    <h4 style={{ fontSize: 12, marginTop: 5 }}>INSP-403/REV 1</h4>
    <h4 style={{ fontSize: 12, marginTop: 5, marginLeft: 250 }}>
      RAMNAGAR COMPLEX,MIDC,CHINCHWAD,PUNE-411019
    </h4>
  </div>
  <div>
    <img
      style={{ width: 250, marginLeft: 270, marginTop: 15 }}
      src={Sign}
      alt="signature"
    />
  </div>
  </div>



  ))}
     
     


      
      </div>
     
    </>
  );
};

export default WarrantyCard
