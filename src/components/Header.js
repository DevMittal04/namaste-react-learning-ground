import { LOGO_URL } from "../utils/constants";

const Title = (
  <a href="/">
    <img
      className="logo"
      src={LOGO_URL}
      alt="Food Villa Logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {Title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header