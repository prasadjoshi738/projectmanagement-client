/*mport React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const URL = "http://localhost:3001";



const getserialdata = async (req, res) => {
  await axios
    .get(`${URL}/getserial`)
    .then(async (res) => {
      setSerialdata(res.data.data.srno);

      let largest = serialdata[0];

      for (var i = 0; i < serialdata.length; i++) {
        if (serialdata[i] === serialdata.length) {
          largest = serialdata[i];

          for (var j = largest; j < largest + qnty; j++) {
            try {
              await axios.put("/serialno", { srno: [j+1] });
            } catch (error) {
              console.log(error);
            }
          }
        }
        

        
      }
    })
    .catch((error) => {
      console.log(error);
    });
};







const Srno = () => {
      const [serialdata, setSerialdata] = useState([]);
    
      const getserialdata = async (req, res) => {
        await axios
          .get(`${URL}/getserial`)
          .then((res) => {
            console.log(res.data.srno);
            setSerialdata(res.data.srno);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      useEffect(() => {
        getserialdata();
      }, []);










  let qty = parseInt(prompt());

  // var arr = [3, 6, 2, 56, 32, 5, 89, 32];
  let largest = serialdata[0];

  for (var i = 0; i < serialdata.length; i++) {
    if (serialdata[i] > largest) {
      largest = serialdata[i];
    }
  }

  for (var j = largest + 1; j <= largest + qty; j++) {
  setSerialdata([...serialdata],serialdata.push(j))
    
  }

  return (
    <>
      <h1>{serialdata}</h1>
      <button onClick={Srno}>click me</button>
    </>
  );
};

export default Srno;
*/