import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from "./components/Topnav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navs from "./components/Navs";
import Shome from "./pages/shome/Shome";
import Login from "./pages/auth/Login";
import About from "./pages/about/About";
import Pages from "./pages/page/Pages";
import Whislist from "./pages/whislist/Whislist";
import Addtocart from "./pages/addtocart/Addtocart";
import Blogssection from "./pages/blog/Blogssection";
import Newtabs from "./components/Newtabs";
import Cartdata from "./pages/addtocart/Cartdata";
import Sign from "./pages/auth/Sign";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import Singleblog from "./pages/blog/Singleblog";
import Checkout from "./pages/addtocart/Checkout";
import Singlepro from "./pages/singleproduct/Singlepro";
import Account from "./pages/account/Account";
import Order from "./pages/order_success/Order";
import Accountdetails from "./pages/account/Accountdetails";
import Compare from "./pages/whislist/Compare";
import Download from "./pages/account/Download";
import Payment from "./pages/account/Payment";
import Logout from "./pages/account/Logout";
import Order2 from "./pages/account/Order2";
import Address from "./pages/account/Address";
import Dashboard from "./pages/account/Dashboard";
import Footernew from "./components/Footernew";
import Sideproduct from "./pages/Product/Sideproduct";
import ProductGrid from "./pages/Product/ProductGrid";
import Productlist from "./pages/Product/Productlist";
import Product from "./pages/Product/Product";
import { Apidatacontext } from "./pages/context/Apicontext.jsx";
import { Cartcontextprovider } from "./pages/context/Cartcontext.jsx";
import Forgot from "./pages/auth/Forgot.jsx";
import { ApiDataContext } from "./pages/context/Loginapi.jsx";
import { Toaster } from "react-hot-toast";
import Adminpanel from "./pages/adminpanel/Adminpanel.jsx";
import User from "./pages/adminpanel/User.jsx";
import Category from "./pages/adminpanel/Category.jsx";
import Productdata from "./pages/adminpanel/Productdata.jsx";
import BlogAdmin from "./pages/adminpanel/BlogAdmin.jsx";
import Adminlogin from "./pages/adminpanel/adminlogin.jsx";
import { AdminDataContext } from "./pages/context/Admincontext.jsx";
import SearchProduct from "./components/SearchProduct.jsx";
import { SearchProvider } from "./pages/context/SearchContext.jsx";
import { CategoryData } from "./pages/context/CategoryContext.jsx";

function App() {
  const path = window.location.pathname.includes("admin");
  // console.log(path);

  return (
    <>
      {!path ? (

          <Apidatacontext>

              <CategoryData>
 <SearchProvider>
          <ApiDataContext>
            <Cartcontextprovider>

                <Router>

                    <Topnav />
                    <Toaster />
                    <Navs />
                    <Newtabs />
                    <Routes>
                      <Route>
                        <Route path="/" element={<Shome />} />
                        <Route
                          path="/singleproduct/:id"
                          element={<Singlepro />}
                        />
                        <Route path="/login" element={<Login />} />
                        <Route path="/singlepro" element={<Singlepro />} />
                        <Route path="/about" element={<About />} />
                        <Route path="searchproduct" element={<SearchProduct/>}/>
                        <Route path="/page" element={<Pages />} />
                        <Route path="/compare" element={<Compare />} />
                        <Route path="/address" element={<Checkout />} />
                        <Route path="/forgot" element={<Forgot />} />
                        <Route path="/wishlist" element={<Whislist />} />
                        <Route path="/cartnew" element={<Addtocart />} />
                        <Route path="/blog" element={<Blogssection />} />
                        <Route path="/cartitem" element={<Cartdata />} />
                        <Route path="/order_success" element={<Order />} />
                        <Route path="/signup" element={<Sign />} />
                        <Route path="*" element={<Error />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/productlist" element={<Sideproduct />}>
                          <Route path="" element={<ProductGrid />}></Route>
                          <Route path="grid" element={<ProductGrid />}></Route>
                          <Route path="list" element={<Productlist />}></Route>
                        </Route>
                        <Route path="/productgrid" element={<Product />}>
                          <Route path="" element={<ProductGrid />}></Route>
                          <Route path="grid" element={<ProductGrid />}></Route>
                          <Route path="list" element={<Productlist />}></Route>
                        </Route>
                        <Route path="/singleblog" element={<Singleblog />} />
                        <Route path="/account" element={<Account />}>
                          <Route
                            path="accountdetails"
                            element={<Accountdetails />}
                          />
                          <Route path="successfull" element={<Order2 />} />
                          <Route path="downloads" element={<Download />} />
                          <Route path="payment" element={<Payment />} />
                          <Route path="logout" element={<Logout />} />
                          <Route path="addresspayment" element={<Address />} />
                          <Route path="" element={<Dashboard />} />
                        </Route>
                        <Route path="/account" element={<Account />}>
                          <Route
                            path="accountdetails"
                            element={<Accountdetails />}
                          />
                          <Route path="successfull" element={<Order2 />} />
                          <Route path="downloads" element={<Download />} />
                          <Route path="payment" element={<Payment />} />
                          <Route path="logout" element={<Logout />} />
                          <Route path="addresspayment" element={<Address />} />
                          <Route path="" element={<Dashboard />} />
                        </Route>
                      </Route>
                    </Routes>
                    <Footernew />

                </Router>

            </Cartcontextprovider>
          </ApiDataContext>
          </SearchProvider>
          </CategoryData>

          </Apidatacontext>

      ) : (
        <>
          <AdminDataContext>
            <ApiDataContext>

                <Apidatacontext>
                  <Router>
                    <Routes>
                      <Route path="/loginadmin" element={<Adminlogin />} />
                      <Route path="/adminpanel" element={<Adminpanel />}>
                        <Route path="" element={<User />} />
                        <Route path="category" element={<Category />} />
                        <Route path="product" element={<Productdata />} />
                        <Route path="blogadmin" element={<BlogAdmin />} />
                      </Route>
                    </Routes>
                  </Router>
                </Apidatacontext>

            </ApiDataContext>
          </AdminDataContext>
        </>
      )}
    </>
  );
}
export default App;
