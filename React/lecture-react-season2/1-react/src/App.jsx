import Page from "./components/Page";
import Navbar from "./components/Navbar";
import ProductItem from "./components/ProductItem";
import Title from "./components/Title";

const fakeProduct = {
  id: "CACDA421",
  name: "해물 계란 라면",
  price: 6000,
  thumbnail: "./images/menu-해물계란라면.jpg",
};

const App = () => (
  <div className="ProductPage">
    <Page header={<Title>메뉴 목록</Title>} footer={<Navbar />}>
      {/* main에 들어가는 children */}
      <ul>
        <li>
          <ProductItem product={fakeProduct} />
        </li>
      </ul>
    </Page>
  </div>
);

export default App;
