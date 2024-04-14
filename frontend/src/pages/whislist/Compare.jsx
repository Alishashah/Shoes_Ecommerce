import Table from "react-bootstrap/Table";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Compare.css"
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img19.jpg";
function Compare() {
  return (
    <>
      {/* <div className="container-fluid comet text-center p-5">
        <div className="container text-white p-5">
          <div className="col-12 ">
            <h1>COMPARE</h1>
            <Link to="/">HOME</Link>
            <Link to="/compare">//COMPARE</Link>
          </div>
        </div>
      </div> */}
      <div className="container com my-5  align-item-center">
        <Table bordered responsive>
          <tbody className="text-center">
            <tr >
              <th>Product Info</th>
              <td>
                <div className="mb-3">{<IoMdClose />}Remove</div>
                <div>
                  <img
                    src={img1}
                    alt="..."
                    className="img-fluid rounded"
                    width={"80px"}
                  ></img>
                </div>
                <div className="my-2">Leather men</div>

                  <button className="btnc">Add to Cart</button>
              </td>

              <td>
                <div className="mb-3">{<IoMdClose />}Remove</div>
                <div>
                  <img
                    src={img2}
                    alt="..."
                    className="img-fluid rounded"
                    width={"80px"}
                  ></img>
                </div>
                <div className="my-2">Quikens men Shoes</div>
                <button className="btnc">Add to Cart</button>

              </td>

              <td>
                <div className="mb-3">{<IoMdClose />}Remove</div>
                <div>
                  <img
                    src={img3}
                    alt="..."
                    className="img-fluid rounded"
                    width={"80px"}
                  ></img>
                </div>
                <div className="my-2">  Women Shoes</div>
                <button className="btnc">Add to Cart</button>
              </td>
            </tr>
            <tr>
              <th>Price</th>
              <td className="align-middle p-3 text-center">$69.99</td>
              <td className="align-middle">$69.99</td>
              <td className="align-middle">$69.99</td>
            </tr>
            <tr>
              <th>Sku</th>
              <td>REF. LA-791</td>
              <td>REF. LA-779</td>
              <td>REF. LA-788</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra,…
              </td>
              <td>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra,…
              </td>
              <td>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra,…
              </td>
            </tr>
            <tr>
              <th>Availability</th>
              <td>
                <button className="sto">In Stock</button>
              </td>
              <td>
                <button className="sto">In Stock</button>
              </td>
              <td>
                <button className="sto">In Stock</button>
              </td>
            </tr>
            <tr>
              <th>Weight</th>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
            <tr>
              <th>Dimesnsions</th>
              <td>N/A</td>
              <td>N/A</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </Table>

      </div>
    </>
  );
}

export default Compare;