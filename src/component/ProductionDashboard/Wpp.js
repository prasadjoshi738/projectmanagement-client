import React, { useEffect } from "react";
import ProductionHome from "./ProductionHome";
import "./Wpp.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import nodata from "../../images/nodata.png";

const URL = "http://localhost:3001";

const Wpp = () => {
  const [oadata, setOadata] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [shortdesc, setShortdesc] = useState("");
  const [proddate, setProddate] = useState("");
  const [shortdescid, setShortdescid] = useState("");
  const [proddateid, setProddateid] = useState("");
  const [btnid, setBtnid] = useState("");
  const [qty, setQty] = useState(0);
  const [selectedid, setSelectedid] = useState("");
  const [createddate, setCreateddate] = useState(0);
  const [loader, setLoader] = useState(false);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...oadata].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setOadata(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...oadata].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setOadata(sorted);
      setOrder("ASC");
    }
  };

  const getoadata = async (req, res) => {
    await axios
      .get(`${URL}/getoadata`)
      .then((res) => {
        setOadata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getoadata();
  });

  const getwarrantycarddata = async (req, res) => {



    var projdate = Date.now();
    setCreateddate(parseInt(projdate));
    await axios
      .get(`${URL}/getlastserialdata`)
      .then(async (res) => {
        let serial = res.data.data[0].serialNo;

        if (serial.length > 0) {
          var serialno = parseInt(serial[serial.length - 1].Serialno);
          var srno = serialno + 1;
        } else {
          setLoader(false);
          var serialn = prompt("please enter starting serial");
          serialno = parseInt(serialn);
          srno = serialno;
          setLoader(true);
        }

        var projdesc = shortdesc;
        var ProjCompDate = proddate;
        var quantity = qty;
        var obj = [];

        for (let i = 0; i < quantity; i++) {
          var main = {};
          main.Serialno = srno + i;
          main.ProjDesc = projdesc;
          main.ProjCompDate = ProjCompDate;

          obj.push(main);
        }

       

        const serialdata = {
          _id: selectedid,
          serialNo: obj,
          createddate: createddate,
        };

        if (shortdesc && proddate && qty && selectedid && createddate) {
          await axios
            .post(`${URL}/serialnogenerate`, serialdata)
            .then((res) => {
              console.log(res.data)
              setShortdesc("");
              setProddate("");
              setQty("");
              setSelectedid("");
              setLoader(false);
              toast.success(`Warranty Card Successfully Generated` , {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            })
            .catch((error) => {
              console.log(error);
              setLoader(false);
            });
        }
        if (!proddate) {
          toast.warn("Plz Choose Production Copletion Date ", {
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
        if (!shortdesc) {
          toast.warn("Plz Select Project Description ", {
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
      })
      .catch((error) => {
        console.log(error);
      });

      setTimeout(()=>{
        
          
          setLoader(false);
       
        
   
    
    },10000)




  };

  return (
    <>
      <ProductionHome />
      <h3 style={{justifyItems:"center"}} >PROJECT ORDER</h3 >
      {oadata && oadata.length > 0 ? (
        <table
          id="myTable "
          className="tablefont"
          style={{
            color: "blue",
            width: "100%",
            marginLeft: 10,
            fontSize: 12,
            backgroundColor: "white",
            border: "1px solid white",
          }}
        >
          <tr>
            <th>Serial No</th>
            <th onClick={() => sorting("projno")}>Project</th>
            <th>Job Order </th>

            <th onClick={() => sorting("projno")}>Product </th>
            <th onClick={() => sorting("quantity")}>Quantity </th>
            <th onClick={() => sorting("deliverydate")}>Delivery as per OA </th>
            <th onClick={() => sorting("oano")}>OA No </th>
            <th onClick={() => sorting("value")}>Value(in Lac.) </th>
            <th>Action</th>
            <th>Project Status</th>
            <th>QR & Warranty Card </th>
          </tr>

          {oadata.map((item, index) => {
            return (
              <>
                <tr>
                  <td>{item.serialNo.length>0 ? item.serialNo[0].Serialno:"Not generated"}-{item.serialNo.length>0 ? item.serialNo[item.serialNo.length-1].Serialno:""}   </td>
                  <td>
                    {item.projno}-{item.customername}
                  </td>
                  <td>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Import Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.importjono}
                      </button>
                    </tr>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Local Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.localjo}
                      </button>
                    </tr>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Hardware Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.hardwarejo}
                      </button>
                    </tr>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Other Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.otherpartjo}
                      </button>
                    </tr>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Paint Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.paintjo}
                      </button>
                    </tr>
                    <tr>
                      <div style={{ width: 100, display: "inline-block" }}>
                        Packing Jo-
                      </div>
                      <button
                        style={{
                          width: 80,
                          height: 25,
                          margin: 5,
                          borderRadius: 50,
                        }}
                      >
                        {item.packingjo}
                      </button>
                    </tr>
                  </td>

                  <td>{item.product}</td>
                  <td>{item.quantity}</td>
                  <td>{item.deliverydate}</td>
                  <td>{item.oano}</td>
                  <td>{item.value}</td>

                  <td>
                    <button
                      onClick={() => {
                        alert(item.projno);
                      }}
                    >
                      Edit
                    </button>
                    <br></br>

                    {item.serialNo.length > 0 ?<button title="you can not delete,once warranty card generated" disabled>Delete</button>:<button
                      onClick={() => {
                        alert(item.product);
                      }}
                    >
                      Delete
                    </button>}
                    
                    <br></br>
                  </td>

                  <td>
                    {item.serialNo.length > 0 ? (
                      <>
                        <button
                          style={{
                            backgroundColor: "yellowgreen",
                            color: "white",
                          }}
                        >
                          view WarrantyCard
                        </button>
                        <br></br>
                        <label className="lab">DataSheet</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                        <label className="lab">Manual</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                        <label className="lab">Software FIT</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                        <label className="lab">Hardware FIT</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                        <label className="lab">Photo</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                        <label className="lab">Other</label><input  type="file"/> <button className="labbtn">Submit</button>
                        <br></br>
                      </>
                    ) : (
                      <>
                        <input
                          placeholder="Enter Project Short Description"
                          onChange={(e) => {
                            setShortdescid(index);
                            setShortdesc(e.target.value);
                            setQty(item.quantity);
                            setSelectedid(item._id);
                          }}
                          type="text"
                        />
                        <br></br>
                        <br></br>
                        <label>Choose Completion Date</label> <br></br>
                        <input
                          onChange={(e) => {
                            setProddateid(index);
                            setProddate(e.target.value);
                            setQty(item.quantity);
                            setSelectedid(item._id);
                          }}
                          type="Date"
                        />
                        <br></br>
                        <br></br>
                        <button
                          onClick={async (req, res) => {
                            setBtnid(index);
                            setQty(item.quantity);
                            setSelectedid(item._id);

                            if (btnid === proddateid && btnid === shortdescid) {
                              setLoader(true);
                              await getwarrantycarddata();
                            }
                          }}
                        >
                          Generate Warranty card
                        </button>{" "}
                      </>
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </table>
      ) : (
        <img
          alt="no data found"
          style={{ width: "30%", marginLeft: 350, padding: 100 }}
          src={nodata}
        />
      )}

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

export default Wpp;
