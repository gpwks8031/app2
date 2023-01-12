import MainSlide from "../components/MainSlide";
import AboutCompany from "../components/AboutCompany";
import Counsel from "../components/Counsel";
import ProductInfo from "../components/ProductInfo";
import Info from "../components/Info";
import Bar from "../components/Bar";

function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <MainSlide />
      {/* 회사소개 */}
      <AboutCompany />
      {/* 상담하기 */}
      <Counsel />
      {/* 제품소개 */}
      <ProductInfo />
      {/* 인포 */}
      <Info />
      {/* bar */}
      <Bar />
    </>
  );
}

export default Home;
