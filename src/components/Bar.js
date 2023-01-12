import React from "react";
import { Link } from "react-router-dom";
import "./barStyle.css";

function Bar(props) {
  return (
    <div className="container8">
      <div class="link">
        <ul>
          <li>
            <Link to="/">개인정보처리방침</Link>
          </li>
          <li>
            <Link to="/">이메일무단수집거부</Link>
          </li>
          <li>
            <Link to="/">찾아오시는 길</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bar;
