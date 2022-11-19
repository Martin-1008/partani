import React from "react";
import classes from "./Home.module.css";
import Header from "../../Components/Header/Header";
import CategoryList from "../../Components/Categories/CategoryList";
import ProductList from "../../Components/Products/ProductList";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { didUserLogin } from "../../Utils/RoleUtils";
import { useRef } from "react";

const Home = () => {
  const categoryItemData = [
    {
      id: "b1",
      source: "CategoryIcons/PeptisidaIcon.svg",
      value: "Peptisida",
    },
    {
      id: "b2",
      source: "CategoryIcons/PupukIcon.svg",
      value: "Pupuk",
    },
    {
      id: "b3",
      source: "CategoryIcons/BibitIcon.svg",
      value: "Bibit",
    },
    {
      id: "b4",
      source: "CategoryIcons/PeralatanIcon.svg",
      value: "Peralatan",
    },
    {
      id: "b5",
      source: "CategoryIcons/BuahIcon.svg",
      value: "Buah",
    },
  ];

  const populerProductData = [
    {
      id: "a5",
      source: "PopulerProduct/PupukNonSubsidi.png",
      value: "Pupuk Non-Subsidi",
      price: +200000,
      unit: "Sak",
      rate: +4.5,
      sold: +40,
    },
    {
      id: "a6",
      source: "PopulerProduct/CengkehKering.png",
      value: "Cengkeh Kering",
      price: +140000,
      unit: "Kg",
      rate: +4.0,
      sold: +20,
    },
    {
      id: "a7",
      source: "PopulerProduct/JagungPipil.png",
      value: "Jagung Pipil",
      price: +6000,
      unit: "Kg",
      rate: +4.2,
      sold: +40,
    },
    {
      id: "a8",
      source: "PopulerProduct/KedelaiNonGMO.png",
      value: "Kedelai Non GMO",
      price: +10000,
      unit: "Kg",
      rate: +4.8,
      sold: +80,
    },
  ];

  const terbaruProductData = [
    {
      id: "a1",
      source: "TerbaruProduct/Lemon.png",
      value: "Lemon",
      price: +20000,
      unit: "Kg",
      rate: +4.3,
      sold: +100,
    },
    {
      id: "a2",
      source: "TerbaruProduct/BibitPinang.png",
      value: "Bibit Pinang",
      price: +3500,
      unit: "Item",
      rate: +3.5,
      sold: +1000,
    },
    {
      id: "a3",
      source: "TerbaruProduct/Mengkudu.png",
      value: "Mengkudu",
      price: +6400,
      unit: "Kg",
      rate: +4.1,
      sold: +71,
    },
    {
      id: "a4",
      source: "TerbaruProduct/Kunyit.png",
      value: "Kunyit",
      price: +35000,
      unit: "Kg",
      rate: +3.9,
      sold: +23,
    },
  ];
  const categoryRef = useRef();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    !didUserLogin(user) && navigate("/login");
  }, []);

  const filterCategory = (filter) => {
    console.log(filter);
    categoryRef.current = filter;
    console.log(categoryRef.current);
    navigate(`/product/category/${categoryRef.current.toLowerCase()}`);
  };

  return (
    <div className={classes.home}>
      <div className={classes.header}>
        <Header />
      </div>

      <div className={classes.headerFill}></div>
      <div className={classes.content}>
        <div className={classes.category}>
          <div className={classes.category_title}>
            <span>Kategori</span>
          </div>
          <div className={classes.category_list}>
            <CategoryList
              items={categoryItemData}
              getCategory={filterCategory}
            />
          </div>
        </div>

        <div className={classes.populer}>
          <div className={classes.populer_title}>Populer</div>
          <div className={classes.populer_list}>
            <ProductList items={populerProductData} />
          </div>
        </div>

        <div className={classes.terbaru}>
          <div className={classes.terbaru_title}>Terbaru</div>
          <div className={classes.terbaru_list}>
            <ProductList items={terbaruProductData} />
          </div>
        </div>

        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
