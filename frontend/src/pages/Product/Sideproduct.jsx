import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Productnav from "./Productnav";
import './Product.css'
import { CategoryContext } from "../context/CategoryContext";
import Form from 'react-bootstrap/Form';
import { Apicontext} from "../context/Apicontext";

const Sideproduct = () => {
  const{data,checked,setchecked,pricedataa,setpricedata}=useContext(Apicontext)
  const{categorydata}=useContext(CategoryContext)
  const pricedata=[
    {
      _id:0,
      name:"$0 to 99",
      array:[0,99]
    },
    {
      _id:1,
      name:"$100 to 199",
      array:[100,199]
    },
    {
      _id:2,
      name:"$200 to 299",
      array:[200,299]
    },
    {
      _id:3,
      name:"$300 to 399",
      array:[300,399]
    },
    {
      _id:4,
      name:"$400 to 499",
      array:[400,499]
    },
    {
      _id:5,
      name:"$500 to 599",
      array:[500,599]
    },
    {
      _id:6,
      name:"$600 to 699",
      array:[600,699]
    },
    {
      _id:7,
      name:"$700 to 799",
      array:[700,799]
    },
  ]

  const handlefilter=(value,id)=>{
    let all=[...checked]

    if(value){
    all.push(id)
    }else{
    all= all.filter((c)=> c!==id)
    // console.log(all)
    }
    setchecked(all)
  }



  return (
    <div className="container">
      <div className="row flex-row-reverse justify-content-between">
        <div className="col-xl-9">
          <Productnav />
          <Outlet />
        </div>
        <div className="col-xl-3 side mt-5">
          <div className="topcat">
            {/* {JSON.stringify(pricedataa,null,4)} */}
            <h6 className="toph"> Top Categories</h6>
            {categorydata.map((ele)=>{
              return(
                <Form.Check // prettier-ignore
        type="checkbox"
        id="custom-switch"
        label={ele.categoryname}
        onChange={(e)=>handlefilter(e.target.checked,ele._id)}
      />
              )
            })}
          </div>

          <div className="topcat my-3">
            <div>
              <h6 className="toph">Filter by Price</h6>
              {pricedata.map((ele) => {
  return (
    <Form.Check
      type="radio"
      id={`custom-radio-${ele._id}`}
      label={ele.name}
      checked={JSON.stringify(pricedataa) === JSON.stringify(ele.array)} // Check if the stringified array matches
      onChange={() => setpricedata(ele.array)} // Set the array value directly
      value={`[${ele.array.join(', ')}]`} // Convert the array to a string with square brackets and comma
    />
  );
})}
            </div>

          </div>
          <div className="topcat my-3">
            <div className="mt-3">
              <h6 className="toph">Brand</h6>
            </div>
            <div className="mt-3">
            {data?.map((ele)=>{
              return(
                <Form.Check
        type="checkbox"
        id="custom-switch"
        label={ele.brand}
        // onChange={(e)=>handlefilter(e.target.checked,ele._id)}

      />
              )
            })}
            </div>


          </div>
          <button className="btn btn-danger mb-5" onClick={()=>window.location.reload()}>Reset filter</button>
        </div>
      </div>
    </div>
  );
};

export default Sideproduct;
