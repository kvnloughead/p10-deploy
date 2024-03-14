import { useState } from "react";

import "./Header.css";
import logo from "../../assets/Logo.svg";
import avatar from "../../assets/avatar.svg";
import defaultAvatar from "../../assets/default-avatar.svg";

function Header({ onAddButton, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="" className="className header__logo" />
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <button onClick={onAddButton} className="header__add-clothes-button">
        + Add Clothes
      </button>
      <div className="header__user-container ">
        <p className="header__username">Terrence Tegegne</p>
        {avatar ? (
          <img src={avatar} alt="Terrence Tegegne" className="header__avatar" />
        ) : (
          <img
            src={defaultAvatar}
            alt="Default Avatar"
            className="header__avatar"
          />
        )}
      </div>
    </header>
  );
}

export default Header;
