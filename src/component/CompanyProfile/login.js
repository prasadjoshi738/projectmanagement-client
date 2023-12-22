import React from "react";

import "./Company.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Anyquary from "./Anyquary";
const URL = "http://localhost:3001";

const Login = () => {
  const [loginusername, setloginUsername] = useState("");

  const [loginPassword, setloginPassword] = useState("");

  const logindata = { username: loginusername, Password: loginPassword };
  const navigate = useNavigate();

  const loginuser = () => {
    axios
      .post(`${URL}/login`, logindata)
      .then((res) => {
        if (res.data.message === "login successful") {
          localStorage.setItem('firstname',res.data.data.firstname);
          toast.success(
            `Hey , ${res.data.data.firstname},you are redirecting to ${res.data.data.Role} Dashboard `,
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
          );
          setTimeout(function () {
            if (res.data.data.Role === "Production") {
              navigate("/Productionhome");
            }                             
            if (res.data.data.Role === "Head") {
              navigate("/headhome");
            }
            if (res.data.data.Role === "Fabrication") {
              navigate("/fabdash");
            }
            if (res.data.data.Role === "Design") {
              navigate("/designerhome");
            }
            if (res.data.data.Role === "Store & RIT") {
              navigate("/storerit");
            }
            if (res.data.data.Role === "Supplier") {
              navigate("/supplierdashboard");
            }
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 400,
          position: "absolute",
          right: 0,
        }}
      >
        <h4 style={{ color: "#63dk58" }}>
          Hey User, Please Login to Access Your Dashboard
        </h4>
        <input
          className="reginput"
          style={{ margin: 15, borderRadius: 50, padding: 10 }}
          type="text"
          placeholder="Enter your Username"
          value={loginusername}
          onChange={(e) => {
            setloginUsername(e.target.value);
          }}
        />

        <input
          value={loginPassword}
          onChange={(e) => {
            setloginPassword(e.target.value);
          }}
          className="reginput"
          style={{ margin: 15, borderRadius: 50, padding: 10, marginTop: 0 }}
          type="text"
          placeholder="Enter Password"
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <button
            className="newreg"
            style={{ width: 150, borderRadius: 50, marginLeft: 40 }}
          >
            <Link
              className="newregs"
              style={{
                width: 100,
                borderRadius: 50,
                textDecoration: "none",
                color: "black",
              }}
              to={"/companyprofilehome/register"}
            >
              New Registration
            </Link>
          </button>
          <button
            onClick={() => loginuser()}
            style={{ width: 100, borderRadius: 50, marginLeft: 80 }}
          >
            Login
          </button>
        </div>
        <Anyquary/>
      </div>
     
      <ToastContainer />
    </>
  );
};
export default Login;
