import { Link } from "react-router-dom";
import "./companystyle.css";

function AboutCompany() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="container3">
      <section className="box_01">
        <p className="txt01">
          최고의 IT서비스 기업임을 자부하고 있는 저희 회사는 지난 1999년 설립된
          이후, 고객과 사회의 이익을 위해 끊임없이 연구하고 노력 발전해왔습니다.
        </p>
        <Link to="/">회사소개</Link>
        <Link to="/">연혁</Link>
        <Link to="/">조직도</Link>
      </section>
      <section className="box_02">
        <img src={path + "/images/pic1.jpg"} alt="건물" />
      </section>
      <section className="box_03">
        <img src={path + "/images/pic2.jpg"} alt="손들이 모여있음" />
      </section>
      <section className="box_04">
        <p class="txt01">
          고객에게 지속적인 양질의 서비스를 제공하는 것을 최고의 목표로 하는
          저희 회사는, 인터넷을 기반으로 하는 온라인의 가상세계를 풍요롭고
          쾌적한 환경으로 발전시키고자 합니다.
        </p>
        <Link to="/" className="btn">
          사업소개
        </Link>
        <Link to="/" className="btn">
          사업분야
        </Link>
      </section>
    </div>
  );
}

export default AboutCompany;
