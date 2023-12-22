import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./userapproval.css";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiUserCheck} from "react-icons/bi";
import { BiUserX} from "react-icons/bi";
import {LiaUserSlashSolid}from "react-icons/lia";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = "http://localhost:3001";

const UserApproval = () => {
  const [userdata, setUserdata] = useState([]);
  const [verifiedrole, setVerifiedrole] = useState("");
  const [roleindex, setRoleindex] = useState("");
  const [verifyindex, setVerifyindex] = useState("");
  const [id, setid] = useState("");
  const [verified, setVerified] = useState([]);
  const [suspended, setSuspended] = useState([]);
  const [unverified, setUnverified] = useState([]);
  const [deleteid, setDeleteid] = useState("");

  const verifieddata = { _id: id, verifiedrole };
  const userid = { _id: deleteid };

  const getverifieddata = async (req, res) => {

    if (verifiedrole) {
      await axios
      .post(`${URL}/verifyrole`, verifieddata)
      .then((res) => {getuserdata();
        
        if (res.data.code === 200) {
          if (res.data.data.Role === "Suspend User") {
            toast.info("User Suspended Successfully ", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
            setVerified("");
            
          } else {
            toast.success(
              "Thanks for verifying user Role,now user can access its dashboard",
              {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              }
            );setVerified(""); 
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
    if (!verifiedrole) {toast.warn(
      "Plz Choose User Role ",
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    )
      
    }
   



  };

  const getuserdata = async (req, res) => {
    await axios
      .get(`${URL}/getuserdata`)
      .then((res) => {
        setUserdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getuserdata();
  }, [userdata]);

  useEffect(() => {

    
    var suspend = [];
    for (let j = 0; j < userdata.length; j++) {
      if (userdata[j].Role === "Suspend User") {
        suspend.push(j);
        
        
    }
    setSuspended("");
    setSuspended(suspend.length);
  
  
  }
    var unapprove = [];
    for (let k = 0; k < userdata.length; k++) {
      if (userdata[k].Role !== userdata[k].verifiedrole) {
        unapprove.push(k);
        
      }setUnverified("");
      setUnverified(unapprove.length);
    }

    var approv = [];
    for (let l = 0; l < userdata.length; l++) {
      if (
        userdata[l].Role === userdata[l].verifiedrole &&
        userdata[l].Role !== "Suspend User"
      ) {
        approv.push(l);
        
      }setVerified(approv.length);
    }
  },[userdata] );

  const deleteitem = async (req, res) => {

if (deleteid) {
  await axios
  .post(`${URL}/deleteuser`, userid)
  .then((res) => {
    getuserdata();
    if (res.data.code === 200) {
      toast.info("User Deleted ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setDeleteid("");
    }
  })
  .catch((error) => {
    console.log(error);
  });
  
}

   



  };

  return (
    <><h2>User Approval Dashboard</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="stat"
          style={{
           
            backgroundColor:"violet" ,
            margin: 15,
            padding: 20,
            paddingLeft: 50,
          }}
        >
          Total User <br />
         <span style={{ fontSize: 18, paddingLeft: 25 }}>
         {<HiOutlineUserGroup size={20} />} {userdata.length}
          </span>{" "}
        </div>
        <div className="stat"
          style={{
            
            backgroundColor: "yellowgreen",
            margin: 15,
            padding: 20,
            paddingLeft: 40,
          }}
        >
          Verified User <br />
          <span style={{ fontSize: 18, paddingLeft: 30 }}>
            {<BiUserCheck size={20}/>} {verified.length === 0 ? "0" : verified}
          </span>{" "}
        </div>
        <div className="stat"
          style={{
            
            backgroundColor:"yellow" ,
            margin: 15,
            padding: 20,
            paddingLeft: 40,
          }}
        >
          {" "}
          Un<span style={{color:"red"}}>Verified</span> User <br />
          <span style={{ fontSize: 18, paddingLeft: 40 }}>
            {<BiUserX size={20}/>} {unverified.length === 0 ? "0" : unverified}
          </span>{" "}
        </div>
        <div className="stat"
          style={{
            
            backgroundColor: "red",
            margin: 15,
            padding: 20,
            paddingLeft: 40,
          }}
        >
          Suspended User <br />
          <span style={{ fontSize: 18, paddingLeft: 40 }}>
           {<LiaUserSlashSolid size={20}/>} {suspended.length === 0 ? "0" : suspended}
          </span>{" "}
        </div>
        <div 
          style={{
            width:550,
            height:100,
          display:"flex",flexDirection:"column",
            
            margin: 2,
            padding:2,
            paddingLeft: 10
          }}
        >
          <h6 style={{display:"flex",flexDirection:"row"}}><div style={{height:20,width:20,backgroundColor:"yellowgreen",borderRadius:50,display:"inline-block",}}></div>&nbsp; Approved users can access their dashboard</h6>
          <h6 style={{display:"flex",flexDirection:"row"}}><div style={{height:40,width:20,backgroundColor:"yellow",borderRadius:50,display:"inline-block"}}></div>&nbsp; Unapproved users can not access their dashboard<br></br>&nbsp;&nbsp;( you can not unapprove user once Approve )</h6>
          <h6 style={{display:"flex",flexDirection:"row"}}><div style={{height:20,width:20,backgroundColor:"red",borderRadius:50,display:"inline-block"}}></div>&nbsp;  Unauthorized access can be avoided by suspending user</h6>
        </div>




      </div>

      
      <table style={{ border: "2px solid orange", marginLeft: 10 }}>
        <tr style={{ border: "2px solid orange" }}>
          <th style={{ width: 60, paddingLeft: 10 }}>Sr No</th>

          <th style={{ width: 180, paddingLeft: 60 }}>Full Name</th>
          <th style={{ width: 180, paddingLeft: 50 }}>Username</th>
          <th style={{ width: 150, paddingLeft: 50 }}>ID</th>
          <th style={{ width: 150, paddingLeft: 50 }}>Role</th>
          <th style={{ width: 450, paddingLeft: 70 }}>Verify Role & Action</th>
         
        </tr>

        {userdata.map((item, index) => {
          return (
            <tr className="user" style={{ border: "2px solid orange" }}>
              <td className="user users" style={{ width: 50, paddingLeft: 25 }}>
                {index + 1}
              </td>

              <td className="user users " style={{ width: 180 }}>
                {item.firstname} {item.lastname}
              </td>
              <td className="user users" style={{ width: 180 }}>
                {item.username}
              </td>
              <td
                className="user users"
                style={{ width: 150, paddingLeft: 30 }}
              >
                {item.id}
              </td>
              <td className="user users" style={{ width: 150 }}>
                {item.Role}
              </td>
              <div style={{ display: "inline-block" }}>
                <td className="user users" style={{ width: 450 }}>
                  <select
                    title="Select User Role"
                    id="verifiedrole"
                    defaultValue={item.verifiedrole}
                    onChange={(e) => {
                      setRoleindex(index);
                      setVerifiedrole(e.target.value);
                      setRoleindex(index);
                      setVerifiedrole(e.target.value);
                    }}
                    className="reginput"
                    style={{ margin: 10, borderRadius: 50, padding: 10 }}
                  >
                    <option style={{ display: "none" }}>
                      --Confirm User Role--
                    </option>

                    <option>Head</option>
                    <option>Production</option>
                    <option>Fabrication</option>
                    <option>Design</option>

                    <option>Store & RIT</option>
                    <option>Supplier</option>
                    <option style={{ color: "white", backgroundColor: "red" }}>
                      Suspend User
                    </option>
                    
                  </select>
                  <button
                    title="Approve User"
                    onClick={async (req, res) => {
                      setid(item._id);
                      setVerifyindex(index);
                      setid(item._id);
                      if (verifyindex === roleindex) {
                        getverifieddata();

                        setVerifyindex("");
                      }
                    }}
                    className="btn1"
                    style={{
                      height: 30,
                      marginTop: 5,
                      marginBottom: 5,
                      borderRadius: 50,
                      width: 80,
                    }}
                  >
                    <MdOutlineDoneOutline className="btn1" size={20} />
                  </button>{" "}
                  <MdOutlineDelete
                    onClick={ () => {
                       setDeleteid(item._id);
                      deleteitem();
                    }}
                    title="Delete User"
                    className="deletebtn"
                    style={{ color: "red", marginLeft: 10 }}
                    size={25}
                  />
                </td>
                <td className="user users" style={{ width: 100 }}>
              {item.Role==="Suspend User"?<LiaUserSlashSolid title="Suspended User" className="icon1" style={{marginLeft:15,backgroundColor:"red",borderRadius:'50px'}} size={50}/>: ""}
              {item.Role===item.verifiedrole && item.Role !== "Suspend User" ?<BiUserCheck title="Verified User" className="icon1" style={{marginLeft:15,backgroundColor:"yellowgreen",borderRadius:'50px'}} size={50}/>: ""}
              {item.Role !== item.verifiedrole?<BiUserX title="Unverified User" className="icon1" style={{marginLeft:15,backgroundColor:"yellow",borderRadius:'50px'}} size={50}/>: ""}
              </td>
              </div>
            </tr>
          );
        })}
      </table>
      <ToastContainer />
    </>
  );
};

export default UserApproval;
