import React, { useState } from "react";
import "./OaEntry.css";
import ProdNavBar from "./ProdNavBar";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
const OaEntry = () => {
  const [customername, setCustomername] = useState("");
  const [projno, setProjno] = useState("");
  const [quantity, setQuantity] = useState("");
  const [oano, setOano] = useState("");

  const [product, setProduct] = useState("");
  const [delivery, setDelivery] = useState("");
  const [value, setValue] = useState("");
  const [importjono, setImportJono] = useState("");
  const [localjo, setLocaljo] = useState("");
  const [hardwarejo, setHardwarejo] = useState("");
  const [otherpartjo, setOtherpartjo] = useState("");
  const [paintjo, setPaintJo] = useState("");
  const [packingjo, setPackingjo] = useState("");
  const [jono, setJono] = useState("");
  const [loader, setLoader] = useState(false);

  const date = new Date(delivery);
  const URL = "http://localhost:3001";

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let deliverydate = `${
    month[date.getMonth()]
  }/${date.getDate()}/${date.getFullYear()}`;
  const orderdata = {
    customername,
    projno,
    quantity,
    oano,
    product,
    deliverydate,
    value,
    importjono,
    localjo,
    hardwarejo,
    otherpartjo,
    paintjo,
    packingjo,
  };

  const oaentry = async (req, res) => {
   

    try {
      if (customername && projno && quantity && oano && product && value) {
        setLoader(true);
        await axios.post(`${URL}/orderentry`, orderdata).then((res) => {
          setLoader(false);
          toast.success("Order Created Successfully ", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
      }
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoader(false);
    }, 10000);
  };

  return (
    <>
      <ProdNavBar />
      <h1 className="heading">Enter Your OA Details</h1>

      <div className="prodback">
        <div className="left">
          <label className="labell">Customer Name</label>
          <label>:</label>
          <input
            value={customername}
            onChange={(e) => {
              setCustomername(e.target.value);
            }}
            className="inputsl"
            type="text"
            placeholder="Please Enter Cust. Name"
          />
          <br></br>
          <label className="labell">Project No </label>
          <label>:</label>
          <input
            value={projno}
            onChange={(e) => {
              setProjno(e.target.value);
            }}
            className="inputsl"
            type="number"
            placeholder="Please Enter Project No"
          />
          <br></br>
          <label className="labell">Quantity </label>
          <label>:</label>
          <input
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            className="inputsl"
            type="number"
            placeholder="Enter Quantity"
          />
          <br></br>
          <label className="labell">OA No </label>
          <label>:</label>{" "}
          <input
            value={oano}
            onChange={(e) => {
              setOano(e.target.value);
            }}
            className="inputsl"
            type="text"
            placeholder="Enter OA No"
          />
          <br></br>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
        >
          <div>
            <label className="labelr"> JO No </label>
            <label> :</label>
            <input
              disabled
              style={{ width: 600, fontSize: 14, backgroundColor: "lightblue" }}
              value={[
                `Import- ${importjono} Local- ${localjo} Hardware- ${hardwarejo} OT Part -${otherpartjo} Paint- ${paintjo} Packing- ${packingjo}`,
              ]}
              onChange={(e) => {
                setJono([
                  `${importjono}-${localjo}-${hardwarejo}-${otherpartjo}-${paintjo}-${packingjo}`,
                ]);
              }}
              className="inputsr"
              type="text"
              placeholder="Please Enter Job Order No"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <label className="labelr">Product </label>
              <label>:</label>
              <input
                value={product}
                onChange={(e) => {
                  setProduct(e.target.value);
                }}
                className="inputsr"
                type="text"
                placeholder="Enter Product Name"
              />
              <br></br>
              <label className="labelr ">Delivery as per OA </label>
              <label>:</label>{" "}
              <input
                value={delivery}
                onChange={(e) => {
                  setDelivery(e.target.value);
                }}
                className="inputsr padd"
                type="date"
                placeholder="Please Select Date"
              />
              <br></br>
              <label className="labelr">Value </label>
              <label>:</label>{" "}
              <input
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                className="inputsr"
                type="number"
                placeholder="Enter Value(in Lakh)"
              />
              <br></br>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div>
                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={importjono}
                  onChange={(e) => {
                    setImportJono(e.target.value);
                  }}
                  className="inputsr"
                  type="number"
                  placeholder="Import JO"
                />
                <br></br>

                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={localjo}
                  onChange={(e) => {
                    setLocaljo(e.target.value);
                  }}
                  className="inputsr"
                  type="number"
                  placeholder="Local JO"
                />
                <br></br>

                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={hardwarejo}
                  onChange={(e) => {
                    setHardwarejo(e.target.value);
                  }}
                  className="inputsr padd"
                  type="number"
                  placeholder="Hardware Jo"
                />
                <br></br>
              </div>
              <div>
                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={otherpartjo}
                  onChange={(e) => {
                    setOtherpartjo(e.target.value);
                  }}
                  className="inputsr padd"
                  type="number"
                  placeholder="Other Jo"
                />
                <br></br>
                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={paintjo}
                  onChange={(e) => {
                    setPaintJo(e.target.value);
                  }}
                  className="inputsr padd"
                  type="number"
                  placeholder="Paint Jo"
                />
                <br></br>
                <input
                  style={{ width: 120, marginBottom: 10 }}
                  value={packingjo}
                  onChange={(e) => {
                    setPackingjo(e.target.value);
                  }}
                  className="inputsr padd"
                  type="number"
                  placeholder="Packing Jo"
                />
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={() => oaentry()} className="btns" type="submit">
        Submit
      </button>
      <ToastContainer />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default OaEntry;
