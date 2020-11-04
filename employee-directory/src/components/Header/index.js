import React from "react";
import "./style.css";

function Header() {
  return (
    <div class="header">
      <div class="header-body">
        <h4 class="header-title">Employee Directory</h4>
        <p class="header-text">
          This application will show current employees and allows you to search
          for employees by name.
        </p>
      </div>
    </div>
  );
}

export default Header;