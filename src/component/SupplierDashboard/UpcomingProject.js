import React, { useState } from 'react'

const UpcomingProject = () => {

  const [upcomingProject,setUpcomingProject] =useState([{
		"ProjectName": "Dubai Trailer",
		"ProjectNo": 30000,
    "src":"https://vmstrailersigns.com/img/HOME/vms_5_colour_vms_trailer.png"
	},
	{
		"ProjectName": "Australia Trailer",
		"ProjectNo": 30001,
    "src":"https://images.squarespace-cdn.com/content/v1/58eb446220099ea6eb2effe8/1571367689419-1V52TBF87C83SLHILF14/_60A1643%281%29.JPG"
	},
	{
		"ProjectName": "PMC",
		"ProjectNo": 30002,
    "src":"https://static.toiimg.com/thumb/msid-94315176,width-400,resizemode-4/94315176.jpg"
	},
	{
		"ProjectName": "MSRDC",
		"ProjectNo": 30003,
    "src":"https://mumbaimirror.indiatimes.com/thumb/65663645.cms?resizemode=4&width=400"
	},
	{
		"ProjectName": "TMA TMV",
		"ProjectNo": 30004,
    "src":"https://static.businessworld.in/article/article_extra_large_image/1611752667_DjFV0L_Damiler_India.jpg"
	},
	{
		"ProjectName": "MSRDC",
		"ProjectNo": 30005,
    "src":"https://mumbaimirror.indiatimes.com/thumb/65663645.cms?resizemode=4&width=400"
	},
	{
		"ProjectName": "KPWD",
		"ProjectNo": 30006,
    "src":"https://media.9curry.com/uploads/organization/image/3319/pwd-karnataka-logo.png"
	}])
   return (
    <>
    <h1>UpcomingProject</h1>
    {upcomingProject.map((item,index)=>{
      
      return(<div style={{display:'inline-block',width:180,height:250,fontWeight:600, margin:'2px solid black'}}>

        {item.ProjectNo} 
        {<img src={item.src} width={150} height={150}/>}
        {item.ProjectName}
       
        
        </div>)
      
    })}
    

    </>
  )
}

export default UpcomingProject