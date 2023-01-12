import { Link, NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <header>
      <h1>
        <Link to="/">logo</Link>
      </h1>
      <ul id="gnb">
        <li>
          <NavLink to="/">회사소개</NavLink>
          <ul className="sub_menu">
            <li>
              <Link to="/">인사말</Link>
            </li>
            <li>
              <Link to="/">연혁</Link>
            </li>
            <li>
              <Link to="/">조직도</Link>
            </li>
            <li>
              <Link to="/">찾아오시는 길</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">사업소개</NavLink>
          <ul className="sub_menu">
            <li>
              <Link to="/">사업분야</Link>
            </li>
            <li>
              <Link to="/">사업안내</Link>
            </li>
            <li>
              <Link to="/">소개/설명01</Link>
            </li>
            <li>
              <Link to="/">소개/설명02</Link>
            </li>
            <li>
              <Link to="/">갤러리01</Link>
            </li>
            <li>
              <Link to="/">갤러리02</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">제품소개</NavLink>
          <ul className="sub_menu">
            <li>
              <Link to="/">제품소개1</Link>
            </li>
            <li>
              <Link to="/">제품소개2</Link>
            </li>
            <li>
              <Link to="/">제품소개3</Link>
            </li>
            <li>
              <Link to="/">제품소개4</Link>
            </li>
            <li>
              <Link to="/">제품소개5</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">온라인문의</NavLink>
          <ul className="sub_menu">
            <li>
              <Link to="/">Q&A</Link>
            </li>
            <li>
              <Link to="/">1:1문의</Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">고객센터</NavLink>
          <ul className="sub_menu">
            <li>
              <Link to="/">공지사항</Link>
            </li>
            <li>
              <Link to="/">자주하는 질문</Link>
            </li>
            <li>
              <Link to="/">갤러리</Link>
            </li>
            <li>
              <Link to="/">자유게시판</Link>
            </li>
            <li>
              <Link to="/">대리점안내</Link>
            </li>
          </ul>
        </li>
      </ul>
      <Link to="/" id="toggle_btn">
        toggle
      </Link>
    </header>
  );
}

export default Nav;
