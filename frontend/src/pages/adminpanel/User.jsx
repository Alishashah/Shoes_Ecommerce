import axios from "axios";
import React, { useEffect, useState } from 'react'
import "./admin.css"
import { TextField, Typography } from "@mui/material";
import AdminModal from "./AdminModal";

const User = () => {
  const [user, setUser] = useState([]);
  const [editdata, setEditData] = useState({});
  const [editview, setEditView] = useState(false);

  const getuserdata = async () => {
    try {
      const response = await axios.get("http://localhost:3010/alluserdata");
      setUser(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getuserdata();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:3010/deleteuser/${id}`, { id });
      const updatedData = user.filter((u) => u._id !== id);
      setUser(updatedData);
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3010/updateuser/${editdata._id}`, editdata);
      const updatedData = user.map((u) => (u._id === editdata._id ? editdata : u));
      setUser(updatedData);
      setEditView(false);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  const editForm = (
    <form onSubmit={handleSubmit}>
      <Typography>Edit Form</Typography>
      <TextField
        label="Username"
        type="text"
        name="username"
        value={editdata.username || ""}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        value={editdata.email || ""}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Password"
        type="text"
        name="password"
        value={editdata.phone || ""}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <button type="submit">Save</button>
    </form>
  );

  return (
    <div>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>sno</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">phone no</th>
            <th scope="col">image</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>{e.username}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
              <td><img src={e.image} alt="" className="img-admin"/></td>
              <td>
                <button className="btn btn-success" onClick={() => {
                  setEditData(e);
                  setEditView(true);
                }}>Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(e._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editview && (
        <AdminModal
          show={() => setEditView(true)}
          close={() => setEditView(false)}
          formdata={editForm}
          save={handleSubmit}
        />
      )}
    </div>
  );
};

export default User;
