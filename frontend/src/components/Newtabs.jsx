import React from 'react'
import './tab.css'
import { Link } from 'react-router-dom'


const Newtabs = () => {
  return (
         <header className="header">
      <div className="container-1 container">
        <div className="row bg-change">
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <div className="header-item ">
            <div className="menu-overlay"></div>
            <nav className="menu">
              <div className="mobile-menu-head">
                <div className="go-back"><i className="fa fa-angle-left"></i></div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close">&times;</div>
              </div>
              <ul className="menu-main">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/about">About</Link>
                  {/* <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item text-center">
                      <Link to="/">
                        <img
                          src="https://th.bing.com/th/id/R.ce8de1adaa3fcc169f0d97c436b8274b?rik=6W1qX6Qp03lNWg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504633273314-6a929fcd7090%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3de8e0ff2cce3792a276fa84086113a17c&ehk=chx16tzqSRzpfA6BYM4FNaZZ%2fMJwEtxaqHPW1FZb9FI%3d&risl=&pid=ImgRaw&r=0"
                          alt="Fashion"
                        />
                        <h4 className="title">Fashion</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="/">
                        <img
                          src="https://img.freepik.com/free-photo/male-technician-repairing-computer-motherboard-wooden-desk_23-2147923493.jpg?w=740&t=st=1671765056~exp=1671765656~hmac=4c8dffc9558819b4c21b126aaa394150f48adc3be9c8004c0b65d0420709ec00"
                          alt="Electronics"
                        />
                        <h4 className="title">Electronics</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="/">
                        <img
                          src="https://images.unsplash.com/photo-1571380401583-72ca84994796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                          alt="Mobiles"
                        />
                        <h4 className="title">Mobiles</h4>
                      </Link>
                    </div>
                    <div className="list-item text-center">
                      <Link to="/">
                        <img
                          src="https://images.unsplash.com/photo-1578643463396-0997cb5328c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                          alt="Appliances"
                        />
                        <h4 className="/blog">Blog</h4>
                      </Link>
                    </div>
                  </div> */}
                </li>
                <li className="menu-item-has-children">
                  <Link to="/">Shop
                  <i className="fa fa-angle-down"></i>
                  </Link>
                  <div className="sub-menu mega-menu mega-menu-column">
                    <div className="list-item">
                      <h4 className="title">Men's Fashion</h4>
                      <ul>
                        <li><Link to="/">Men's Fashion</Link></li>
                        <li><Link to="/">Woman's Fashion</Link></li>
                        <li><Link to="/">kid's Fashion</Link></li>
                      </ul>
                      {/* <h4 className="title">Beauty</h4> */}
                      {/* <ul>
                        <li><Link to="/">Moisturizer</Link></li>
                        <li><Link to="/">Face powder</Link></li>
                        <li><Link to="/">Lipstick</Link></li>
                      </ul> */}
                    </div>
                    {/* <div className="list-item">
                      <h4 className="title">Women's Fashion</h4>
                      <ul>
                        <li><Link to="/">Sarees</Link></li>
                        <li><Link to="/">Sandals</Link></li>
                        <li><Link to="/">Watchs</Link></li>
                        <li><Link to="/">Shoes</Link></li>
                      </ul> */}
                      {/* <h4 className="title">Furniture</h4>
                      <ul>
                        <li><Link to="/">Chairs</Link></li>
                        <li><Link to="/">Tables</Link></li>
                        <li><Link to="/">Doors</Link></li>
                        <li><Link to="/">Bed</Link></li>
                      </ul>
                    </div> */}
                    {/* <div className="list-item">
                      <h4 className="title">Home, Kitchen</h4>
                      <ul>
                        <li><Link to="/">Kettle</Link></li>
                        <li><Link to="/">Toaster</Link></li>
                        <li><Link to="/">Dishwasher</Link></li>
                        <li><Link to="/">Microwave oven</Link></li>
                        <li><Link to="/">Pitcher</Link></li>
                        <li><Link to="/">Blender</Link></li>
                        <li><Link to="/">Colander</Link></li>
                        <li><Link to="/">Tureen</Link></li>
                        <li><Link to="/">Cookware</Link></li>
                      </ul>
                    </div> */}
                    {/* <div className="list-item">
                      <img
                        src="https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                        alt="Chair"
                      />
                    </div> */}
                  /* </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to="/blog">Blog <i className="fas fa-angle-down"></i></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      <li><Link to="/singleblog">single Post Layout</Link></li>
                      <li><Link to="/blog">Grid Layout</Link></li>
                    </ul>
                  </div>
                </li>
                <li className="menu-item-has-children">
                  <Link to>Pages <i className="fas fa-angle-down"></i></Link>
                  <div className="sub-menu single-column-menu">
                    <ul>
                      {/* <li><Link to="/login">Login</Link></li> */}
                      {/* <li><Link to="/sign">Register</Link></li> */}
                      {/* <li><Link to="/page">Product</Link></li> */}
                      <li><Link to='/compare'>Compare</Link></li>
                      {/* <li><Link to="*">404 Page</Link></li> */}
                      {/* <li><Link to='/account'>Account</Link></li> */}
                      <li><Link to='/productlist'>Productgrid</Link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          </div>
          </div>
      </div>
    </header>

  )
}

export default Newtabs