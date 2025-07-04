import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  const menu_list = [
    "여성",
    "남성",
    "Divided",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속 가능성",
  ];

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div>

      <div className="nav-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"
          alt="#"
        />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menu_list.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="search-area">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
