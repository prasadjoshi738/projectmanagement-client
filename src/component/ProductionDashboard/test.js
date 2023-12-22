/*

axios post

axios.










import React, { useState } from 'react'

const Test = () => {
    
const [serialdata,setSerialdata]=useState([{}])

var srno=1100;
var projdesc='vms'
var ProjCompDate='27/9/97'
var qty=5;
var obj=[]


for (let i = 0; i < qty; i++) {
    var main={};
    main.Serialno=srno+i;
    main.ProjDesc=projdesc;
    main.ProjCompDate=ProjCompDate
   
   obj.push(main)
}



console.log(obj)






  return (

    <>
    <div>test</div>
    </>
  )
}
*/