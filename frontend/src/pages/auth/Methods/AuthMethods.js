import axios from "axios";

export const AuthMethod = async (route,formData,setFormData) => {
  let res = "";
  if (route == "/login") {
    res = await axios.post(`http://localhost:3010/login`, formData);
    console.log(res);
    setFormData(res?.data?.userData)
  }
}
