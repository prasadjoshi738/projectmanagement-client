import React, { useState } from "react";
import CompanyNavBar from "./CompanyNavBar";
import "./Company.css";
import { signupuser } from "../api/api.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Banner from "./Banner";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [Role, setRole] = useState("");
  const [Password, setPassword] = useState("");
  const [id, setId] = useState("");
  const [verifiedrole, setVerifiedrole] = useState("");

  const userdata = { firstname, lastname, username, Role,verifiedrole, id, Password };
  

  const navigate = useNavigate();

  const registeruser = async () => {
    let usersignupdata = await signupuser(userdata);
    if (!usersignupdata) return;
    if (usersignupdata) {
      toast.success("🦄 Great!User Registered Successfully,plz login ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setTimeout(function () {
      navigate("/");
    }, 4000);
  };

  return (
    <>
      <CompanyNavBar />
      <div style={{display:"flex",flexDirection:"row"}}>
      <Banner/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          position: "absolute",
          right: 0,
        }}
      ><h3>Register Here</h3>
        <input
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10 }}
          type="text"
          placeholder="Enter Your First Name"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <input
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10 }}
          type="text"
          placeholder="Enter Your Last Name"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />

        <input
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10 }}
          type="text"
          placeholder="Enter  desirable Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <select
          value={Role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10 }}
        >
          <option defaultChecked style={{ paddingRight: 20, width: 300,display:"none" }}>
            Please Select Your Role
          </option>
          <option>Head</option>
          <option>Production</option>
          <option>Fabrication</option>
          <option>Design</option>

          <option>Store & RIT</option>
          <option>Supplier</option>
        </select>

        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10 }}
          type="text"
          placeholder="Enter Your Employee/Supplier ID"
        />

        <pre style={{ marginLeft: 60, color: "blue", marginBottom: 4 }}>
          Note:Supplier ID Mentioned on PO
        </pre>
        <input 
          value={Password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="reginput"
          style={{ margin: 8, borderRadius: 50, padding: 10, marginTop: 0 }}
          type="text"
          placeholder="Enter Password"
        />

        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <button
            className="newreg"
            style={{ width: 150, borderRadius: 50, marginRight: 40 }}
          >
            <Link
              className="newreg"
              style={{
                width: 150,
                borderRadius: 50,
                textDecoration: "none",
                color: "black",
              }}
              to={"/"}
            >
              Already Register ?
            </Link>
          </button>
          <button
            onClick={() => registeruser()}
            style={{ width: 100, borderRadius: 50, marginRight: 80 }}
          >
            Submit
          </button>
        </div>
      </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Register;
