import "./DropDownList.css";
import React, { useState,useRef } from "react";
import { KeyboardArrowDown} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
 
const DropDownList = () => {

  const Flip = useRef(null);
  const [Products, SetProducts] = useState(Flip)
  const [Services, SetServices] = useState(Flip)
  const [Brands, SetBrands] = useState(Flip)
  const [Deals, SetDeals] = useState(Flip)
  const [Public, SetPublic] = useState(Flip)

  const ProductHadler = () => SetProducts(!Products); 
  const ServiceHandler = () => SetServices(!Services); 
  const BrandHandler = () => SetBrands(!Brands); 
  const DealHandler = () => SetDeals(!Deals); 
  const PublicHandler = () => SetPublic(!Public); 
  
  return (
    <div className="Container" >
      <div className="Drop-Down">
        <ul className="List">
          <li className="Product">
            <button className="Product-btn" onClick={ProductHadler}>   
              PRODUCTS <KeyboardArrowDown className={`rotate ${Products ? "inactive" : "active"}`}  />
            </button>
            <div className="menu-container">
              <div className="ProductMenu-List">
              <ul className={`productmenu ${Products ? "inactive" : "active"}`}>
                <NavLink to='/computeraccessories'>
                <li>Computer Accessories & Components
                  
                </li>
                </NavLink>
                <NavLink to='/computers'>
                <li>Computers</li>
                </NavLink>
                <NavLink to='/electronics'>
                <li>Electronics</li>
                </NavLink>
                <NavLink to='/food&cleaning'>
                <li>Food & Cleaning</li>
                </NavLink>
                <NavLink to='/furniture&home'>
                <li>Furniture & Home</li>
                </NavLink>
                <NavLink to='/ink&officemachines'>
                <li>Ink & Office Machines</li>
                </NavLink>
                <NavLink to='/officesupplies'>
                <li>Office Supplies</li>
                </NavLink>
                <NavLink to='/warehouse&facilities'>
                <li>Warehouse & Facilities</li>
                </NavLink>
                <NavLink to='/customproducts'>
                <li>Custom Products</li>
                </NavLink>
                <NavLink to='/health&safety'>
                <li>Health & Safety</li>
                </NavLink>
                <NavLink to='/print&promo'>
                <li>Print & Promo</li>
                </NavLink>
              </ul>
              </div>
            </div>
          </li>
          <li className="Services">
            <button className="Service-btn" onClick={ServiceHandler}>          
              SERVICES & SOLUTIONS <KeyboardArrowDown className={`rotate ${Services ? "inactive" : "active"}`} />
            </button>
            <div className="ServicesMenu">
              <ul className={`servicemenu ${Services ? "inactive" : "active"}`}>
              <NavLink to='/flowerdeliveryservcies'>
                <li>Flower Delivery Services</li>
              </NavLink>
              <NavLink to='/applebusiness'>
                <li>Apple Business and at work</li>
              </NavLink>
              <NavLink to='/businessperks'> 
                <li>Business Perks</li>
              </NavLink>
              <NavLink to='/cleansafewell'>
                <li>Clean, Safe + Well</li>
              </NavLink>
              <NavLink to='/ergonomicsolutions'>
                <li>Ergonomic Solutions</li>
              </NavLink>
              <NavLink to='/lovethewayyouwork'>
                <li>Love The Way You Work</li>
              </NavLink>
              <NavLink to='/onlinelearningcenter'>
              <li>Online Learning Ceter</li>
              </NavLink>
              <NavLink to='/packandship'>
              <li>Pack and Ship</li>
              </NavLink>
              <NavLink to='/promotional products'>
              <li>Promotional Products</li>
              </NavLink>
              <NavLink to='/safetyandppe'>
              <li>Safety and PPE</li>
              </NavLink>
              <NavLink to='/springreadiness'>
              <li>Spring Readiness</li>
              </NavLink>
              <NavLink to='/sustrainabilitysolutions'>
              <li>Sustrainability Solutions</li>
              </NavLink>
              <NavLink to='/taxsolutions'>
              <li>Tax Solutions</li>
              </NavLink>
              <NavLink to='/videoconferencing'>
              <li>Video Conferencing</li>
              </NavLink>
              <NavLink to='/workfromanywhere'>
              <li>Work From Anywhere</li>
              </NavLink>
              <NavLink to='/workplacefurnituretrendreport'>
              <li>Workplace Furniture Trend Report</li>
              </NavLink>    
              </ul>
            </div>
          </li>
          <li className="Brand" onClick={BrandHandler}>
            <button className="Brand-btn">
              BRANDS <KeyboardArrowDown className={`rotate ${Brands ? "inactive" : "active"}`} />
            </button>
            <div className="BrandMenu">
              <ul className={`brandmenu ${Brands ? "inactive" : "active"}`}>
              <NavLink to='/coastwideprofessional'>
              <li>Coastwide Professional</li>
              </NavLink>
              <NavLink to='/grymattr'>
              <li>Gry Mattr</li>
              </NavLink>
              <NavLink to='/nxttechnologies'>
              <li>NXT Technologies</li>
              </NavLink>
              <NavLink to='/perk'>
              <li>Perk</li>
              </NavLink>
              <NavLink to='/trured'>
              <li>Tru Red</li>
              </NavLink>
              <NavLink to='/union&scale'>
              <li>Union & Scale</li>
              </NavLink>
              <NavLink to='/shopallbrnads'>
              <li>Shop All Brands</li>
              </NavLink>
              </ul>
            </div>
          </li>
          <li className="Deal">
            <button className="Deal-btn" onClick={DealHandler}>
              DEALS <KeyboardArrowDown className={`rotate ${Deals ? "inactive" : "active"}`} />
            </button>
            <div className="DealMenu">
              <ul className={`dealmenu ${Deals ? "inactive" : "active"}`}>
              <NavLink to='/staplesnewproductsslyer'>
              <li>Staples New Products Flyer</li>
              </NavLink>
              <NavLink to='/rebates&offers'>
              <li>Rebates & Offers</li>
              </NavLink>
              <NavLink to='/clearance'>
              <li>Clearance</li>
              </NavLink>
              </ul>
            </div>
          </li>
          <li className="Publications">
            <button className="Pub-btn" onClick={PublicHandler}>
              PUBLICATIONS <KeyboardArrowDown className={`rotate ${Public ? "inactive" : "active"}`} />
            </button>
            <div className="PublicationsMenu">
              <ul className={`publicmenu ${Public ? "inactive" : "active"}`}>
              <NavLink to='/2021facilitymanagersguide'>
              <li>2021 Facility Managers Guide</li>
              </NavLink>
              <NavLink to='/2021sourcebook'>
              <li>2021 Sourcebook</li>
              </NavLink>
              <NavLink to='/2022readytoshipfurnitureguide'>
              <li>2022 Ready to Ship Furniture Guide</li>
              </NavLink>
              <NavLink to='/go2ideasbook'>
              <li>Go 2 Ideas Book</li>
              </NavLink>
              <NavLink to='/pack&shipguide'>
              <li>Pack & Ship Guide</li>
              </NavLink>
              <NavLink to='/returntoofficeguide'>
              <li>Retun To Office Guide</li>
              </NavLink>
              <NavLink to='/safewellguide'>
              <li>Safe + Well Guide</li>
              </NavLink>
              <NavLink to='/theloopissue2'>
              <li>The Loop Issue 2</li>
              </NavLink>
              <NavLink to='/videoconferencingguide'>
              <li>Video Conferencing Guide</li>
              </NavLink>
              <NavLink to='/workfromanywhereguide'>
              <li>Work From Anywhere Guide</li>
              </NavLink>
              <NavLink to='/workspacesguide'>
              <li>Workspaces Guide</li>
              </NavLink>
              </ul>
            </div>
          </li>
          <li className="User">
            <NavLink to="/become-a-customer">
              <span className="Cus-btn">BECOME A CUSTOMER </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropDownList;
