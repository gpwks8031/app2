import "./Counselstyle.css";
import { Link } from "react-router-dom";

function Counsel() {
  return (
    <div className="container4">
      <p className="text">
        미광디자인이 당신의 미래를 응원합니다.
        <Link to="/">상담하기</Link>
      </p>
    </div>
  );
}

export default Counsel;
