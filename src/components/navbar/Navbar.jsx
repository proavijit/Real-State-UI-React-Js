import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <>
      <nav>
        <div className="left">
          <a href="/" className="logo">
            <img src="/public/logo.png" alt="" />
            <span>LamaEstate</span>
          </a>
          <Link to="/">Home</Link>
          <Link to="/list">List Page</Link>
          <Link to="/1">SingleList</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <span>John Doe</span>
              <Link className="profile" to="/profile">
                <span>Profile</span>
                <div className="notification">3</div>
              </Link>
            </div>
          ) : (
            <>
              <a href="/">Sign In</a>
              <a href="/" className="register">
                Sign up
              </a>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/public/menu.png"
              alt=""
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={`menu ${open ? "active" : ""}`}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
