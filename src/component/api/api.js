import axios from "axios";

const URL = "http://localhost:3001";
export const signupuser = async (userdata) => {
  try {
    return await axios.post(`${URL}/signup`, userdata);
  } catch (error) {
    console.log("error while calling signup api");
  }
};









