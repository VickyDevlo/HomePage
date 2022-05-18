import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Slider from "./Components/Silder/Slider";
import DropDownList from "./Components/Products/DropDownList";
import Section from "./Components/MiddleSection/Section";
import Products from "./Components/ExploreProduct/Products";
import Papper from "./Components/ExploreProduct/Img/Papper.png";
import Toner from "./Components/ExploreProduct/Img/Toner.png";
import Laptop from "./Components/ExploreProduct/Img/Laptop.png";
import Chair from "./Components/ExploreProduct/Img/Chair.png";
import Cleaning from "./Components/ExploreProduct/Img/Cleaning.png";
import Ship from "./Components/ExploreProduct/Img/Ship.png";
import Breakroom from "./Components/ExploreProduct/Img/Breakroom.png";
import Bus from "./Components/ExploreProduct/Img/Business.png";
import Banner from "./Components/Banner/Banner";
import Brand from "./Components/Brand/Brand";
import TruRed from "./Components/Brand/Img/EWAY_TRU_RED.png";
import Nxt from "./Components/Brand/Img/EWAY_NXT_TECHNOLOGIES.webp";
import Union from "./Components/Brand/Img/EWAY_UNION_AND_SCALE.webp";
import Gry from "./Components/Brand/Img/EWAY_GRYMATTR.webp";
import Perk from "./Components/Brand/Img/EWAY_PERK.webp";
import Costwise from "./Components/Brand/Img/EWAY_COASTWIDE.webp";
import LowerSection from "./Components/LowerSection/LowerSection";
import Footer from "./Components/Footer/Footer";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import Copyright from "./Components/Copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <DropDownList />
        <Slider />
        <Section />
        <Products image={Papper} name="Paper" link="/paper" />
        <Products image={Toner} name="Ink & Toner" link="/inktoner" />
        <Products image={Laptop} name="Technology" link="/technology" />
        <Products image={Chair} name="Furniture" link="/furniture" />
        <Products
          image={Cleaning}
          name="Cleaning & Janitorial"
          link="/cleaning"
        />
        <Products image={Ship} name="Pak & Ship" link="/pak-an-ship" />
        <Products image={Breakroom} name="Breakroom" link="/breakroom" />
        <Products
          image={Bus}
          name="Business Essentials"
          link="/businessessential"
        />
        <Banner />
        <Brand image={TruRed} link="trured" />
        <Brand image={Nxt} link="nxt" />
        <Brand image={Union} link="union" />
        <Brand image={Gry} link="grymattr" />
        <Brand image={Perk} link="perk" />
        <Brand image={Costwise} link="costwise" />
        <LowerSection />
        <Footer
          heading="Customer Service"
          link1="Help Center"
          link2="Contact Us"
          link3="Recall Information"
          link4="Safety Data Sheets"
          navlink1="/helpcenter"
          navlink2="/contactus"
          navlink3="/recall"
          navlink4="/safety"
        />

        <Footer
          heading="Corporate Info"
          link1="Staples Professional Overview"
          link2="Industries Served"
          link3="Blog"
          link4="Our Brands"
          navlink1="/overview"
          navlink2="/industires"
          navlink3="/blog"
          navlink4="/ourbrands"
        />
        <Footer
          heading="Staples Corporate Solutions"
          link1="Office Products"
          link2="Technology Products"
          link3="Furniture"
          link4="Facilities Sheets"
          link5="Promotional Products"
          navlink1="/officeproducts"
          navlink2="/techonologyproducts"
          navlink3="/furniture"
          navlink4="/facilities"
          navlink5="/promotionalproducts"
        />
        <Footer
          heading="New Customer"
          link1="Become a Customer"
          link2="Govt. Customers"
          link3="Membership"
          navlink1="/customer"
          navlink2="/govtcustomers"
          navlink3="/membership"
        />
        <SocialMedia />
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
