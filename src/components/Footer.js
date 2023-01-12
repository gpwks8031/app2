import { Link } from "react-router-dom";
import "./footerStyle.css";

const data = [
  { id: 1, Url: "/images/instagram.png", name: "인스타그램" },
  { id: 2, Url: "/images/youtube.png", name: "유튜브" },
  { id: 3, Url: "/images/blog.png", name: "네이버 블로그" },
  { id: 4, Url: "/images/kakaotalk.png", name: "카카오톡" },
  { id: 5, Url: "/images/facebook.png", name: "페이스북" },
  { id: 6, Url: "/images/navertv.png", name: "네이버TV" },
  { id: 7, Url: "/images/kakaotv.png", name: "카카오TV" },
];

function Footer() {
  return (
    <footer>
      <div className="sns">
        {data.map((item) => (
          <Link to="/" key={item.id}>
            <img src={item.Url} alt={item.name}></img>
          </Link>
        ))}
      </div>
      <div class="info">
        <p>
          주소 : 서울시 중구 태평로 1가 우리빌딩주식회사 / 대표 : 홍길동 / 전화
          : 02-123-4567 / 팩스 : 02-123-4567 / 이메일 : phlink@nate.com
        </p>
        <p>
          Copyright © 미광디자인. All rights reserved.
          <Link to="/">Desig by MG</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
