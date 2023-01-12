import "./proInfostyle.css";

function ProductInfo() {
  const data = [
    { id: 1, imgUrl: "/images/img1.jpg", title: "신제품2" },
    { id: 2, imgUrl: "/images/img2.jpg", title: "신제품" },
    { id: 3, imgUrl: "/images/img3.jpg", title: "제품6" },
    { id: 4, imgUrl: "/images/img4.jpg", title: "제품5" },
    { id: 5, imgUrl: "/images/img5.jpg", title: "제품4" },
    { id: 6, imgUrl: "/images/img6.jpg", title: "제품소개1" },
  ];
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <div className="container5">
        <h2>PRODUCT</h2>
      </div>

      <ul className="container6">
        {data.map((img) => (
          <li key={img.id}>
            <img src={path + img.imgUrl} alt={img.title}></img>
            <span>{img.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductInfo;
