import Searchbar from "../../components/searchbar/Searchbar";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            pariatur error tempora quaerat? Quaerat repellendus quibusdam
            architecto enim voluptate sequi, facilis quia reprehenderit
          </p>
          <Searchbar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Exprience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/public/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default Homepage;
