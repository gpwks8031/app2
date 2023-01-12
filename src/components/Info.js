import { Link } from "react-router-dom";
import "./infoStyle.css";

function Info() {
  return (
    <div className="container7">
      <ul>
        <li className="ico1">
          <Link to="/">
            <span className="title">회사소개</span>
            <span className="txt">
              고객만족 극대화를 목표로<br></br>
              최고의 기업이 되겠습니다.
            </span>
          </Link>
        </li>
        <li className="ico2">
          <Link to="/">
            <span className="title">오시는 길</span>
            <span className="txt">
              지속적인 연구개발을 통한<br></br>
              품질 향상에 노력하고 있습니다.
            </span>
          </Link>
        </li>
        <li className="ico3">
          <Link to="/">
            <span className="title">자주하는 질문</span>
            <span className="txt">
              고객 감동을 위해<br></br>
              최선을 다하는 기업
            </span>
          </Link>
        </li>
        <li className="ico4">
          <Link to="/">
            <span className="title">문의전화</span>
            <span className="txt">010-3217-3646</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Info;
