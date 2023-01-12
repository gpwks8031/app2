import Footer from "../../../webReact/src/components/Footer";
import Nav from "../../../webReact/src/components/Nav";
import styles from "../assets/styles/main.module.css";

function Main({ children }) {
  return (
    <div className="wrapper">
      {/* nav */}
      <Nav />
      <div className={`${styles.wrapper}`}>{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Main;
