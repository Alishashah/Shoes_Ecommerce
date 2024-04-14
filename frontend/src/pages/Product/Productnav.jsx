import React from 'react'
import { FaList } from "react-icons/fa";
import { IoMdGrid } from "react-icons/io";
import { Link } from 'react-router-dom';
const Productnav = () => {
  return (
    <div className="container">
        <div className="row">
          <div className="col-12  mt-5 prop">
            <div className="d-flex justify-content-between flex-wrap align-items-center">
              <div>
                <h6>12product found out of 23</h6>
              </div>

              <div>
                <center>
                  <span>
                    <Link to="" className="prodg">
                      <IoMdGrid />
                    </Link>
                  </span>
                  <span>
                    <Link to="list" className="prodg">
                      <FaList />
                    </Link>
                  </span>
                </center>
              </div>

              <div>
                <span>Sort By:</span>
                <select className="pri">
                  <option  value="">Price Low to high</option>
                    <option value="default">Default</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Average">Average rating</option>
                    <option value="News ness">News ness</option>
                    <option value="price low to high">price low to high</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}

export default Productnav
