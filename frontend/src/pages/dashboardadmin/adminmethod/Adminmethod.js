import axios from "axios";

export const Adminmethod = async (route, formData, setFormData) => {
  let res = "";
  if (route == "/loginadmin") {
    res = await axios.post(`http://localhost:3010/loginadmin`, formData);
    console.log(res);
    setFormData(res?.data?.adminData);
    document.cookie = `adminData=${res?.data?.adminData?.email}`;
  }
  if (route == "/auto-login") {
    res = await axios.post(`http://localhost:3010/admin-auto-login`, formData);
    console.log(res);
    setFormData(res?.data?.dataadminget)
    // setFormData(res?.data?.adminData);
    // document.cookie = `adminData=${res?.data?.adminData?.email}`;
  }
};
