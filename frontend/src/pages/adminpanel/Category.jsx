import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import AdminModal from './AdminModal';

const Category = () => {
  const [category, setCategory] = useState([]);
  const [categoryname, setCategoryName] = useState("");
  const [editdata, setEditData] = useState({});
  const [viewdata, setViewData] = useState(false);

  const addCategoryData = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await axios.post("http://localhost:3010/category", { categoryname });
      setCategoryName(""); // Reset the input field after successful submission
      toast.success("Category created successfully");
      getallcategory(); // Fetch the updated list of categories
    } catch (error) {
      console.log(error);
      toast.error("Failed to create category");
    }
  };

  const getallcategory = async () => {
    const response = await axios.get("http://localhost:3010/getcategory");
    // console.log(response)
    setCategory(response?.data?.alldata || []);
  };

  useEffect(() => {
    getallcategory();
  }, []);

  const deletecategory = async (categoryId) => {
    try {
      await axios.post(`http://localhost:3010/deletecategory/${categoryId}`);
      const updatedData = category.filter((c) => c._id !== categoryId);
      setCategory(updatedData);
      toast.success("Deleted successfully");
    } catch (error) {
      toast.error("Delete unsuccessful");
    }
  };

  const updatedcategory = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:3010/updatecategory/${editdata._id}`, editdata);
      const updatedCategory = response.data.category;

      const updatedData = category.map((c) => (c._id === editdata._id ? updatedCategory : c));
      setCategory(updatedData);

      setEditData({}); // Reset the editdata state
      setViewData(false);
      toast.success("Category updated successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update category");
    }
  };

  const editform = (
    <Form onSubmit={updatedcategory}>
      <Form.Group>
        <Form.Label>Edit category</Form.Label>
        <Form.Control type='text' value={editdata.categoryname || ''} name='categoryname' onChange={(e) => setEditData({ ...editdata, categoryname: e.target.value })} />
      </Form.Group>
      <button type="submit">Save Changes</button>
    </Form>
  );

  return (
    <div>
      <Form onSubmit={addCategoryData}>
        <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
          <Form.Label>Add Category</Form.Label>
          <Form.Control
            type="text"
            name="categoryname"
            value={categoryname}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </Form.Group>
        <button type="submit">Add</button>
      </Form>

      <table className="table table-responsive">
        <thead>
          <tr>
            <th>sno</th>
            <th>Category name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {category.map((e, i) => (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>{e.categoryname}</td>
              <td>
                <button className="btn btn-success" onClick={() => { setEditData(e); setViewData(true); }}>Edit</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deletecategory(e._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {viewdata && (
        <AdminModal
          formdata={editform}
          save={updatedcategory}
          show={() => setViewData(true)}
          close={() => setViewData(false)}
        />
      )}
    </div>
  );
};

export default Category;
