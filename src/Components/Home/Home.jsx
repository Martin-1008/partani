import React from "react";
import classes from "./Home.module.css"
import Header from "../Header/Header";
import CategoryList from "../Categories/CategoryList";
import ProductList from "../Products/ProductList";
import Footer from "../Footer/Footer";

const Home = () =>{

    const searchCategoryData= [
        {
            id:"a1",
            value:"Petani",
            source:"Icons/PetaniIcon.svg",
    
        },
        {
            id:"a2",
            value:"Hobi",
            source:"Icons/HobiKebunIcon.svg",
    
        }
    ]

    const categoryItemData =[
        {
            id:"b1",
            source:"CategoryIcons/PeptisidaIcon.svg",
            value:"Peptisida"
        },
        {
            id:"b2",
            source:"CategoryIcons/PupukIcon.svg",
            value:"Pupuk"
        },
        {
            id:"b3",
            source:"CategoryIcons/BibitIcon.svg",
            value:"Bibit"
        },
        {
            id:"b4",
            source:"CategoryIcons/PeralatanIcon.svg",
            value:"Peralatan"
        }
    ]

    const populerProductData =[
        {
            id:"c1",
            source:"PopulerProduct/PupukNonSubsidi.png",
            value:"Pupuk Non-Subsidi",
            price:+200000,
            unit:"Sak",
            rate:+4.5,
            sold:+40
        },
        {
            id:"c2",
            source:"PopulerProduct/CengkehKering.png",
            value:"Cengkeh Kering",
            price:+140000,
            unit:"Kg",
            rate:+4.0,
            sold:+20
        },
        {
            id:"c3",
            source:"PopulerProduct/JagungPipil.png",
            value:"Jagung Pipil",
            price:+6000,
            unit:"Kg",
            rate:+4.2,
            sold:+40
        },
        {
            id:"c4",
            source:"PopulerProduct/KedelaiNonGMO.png",
            value:"Kedelai Non GMO",
            price:+10000,
            unit:"Kg",
            rate:+4.8,
            sold:+80
        },
        {
            id:"c5",
            source:"PopulerProduct/PupukNonSubsidi.png",
            value:"Pupuk Non-Subsidi",
            price:+200000,
            unit:"Sak",
            rate:+4.5,
            sold:+40
        },
    ]

    const terbaruProductData =[
        {
            id:"d1",
            source:"TerbaruProduct/Lemon.png",
            value:"Lemon",
            price:+20000,
            unit:"Kg",
            rate:+4.3,
            sold:+100
        },
        {
            id:"d2",
            source:"TerbaruProduct/BibitPinang.png",
            value:"Bibit Pinang",
            price:+3500,
            unit:"Item",
            rate:+3.5,
            sold:+1000
        },
        {
            id:"d3",
            source:"TerbaruProduct/Mengkudu.png",
            value:"Mengkudu",
            price:+6400,
            unit:"Kg",
            rate:+4.1,
            sold:+71
        },
        {
            id:"d4",
            source:"TerbaruProduct/Kunyit.png",
            value:"Kunyit",
            price:+35000,
            unit:"Kg",
            rate:+3.9,
            sold:+23
        },
        {
            id:"d5",
            source:"TerbaruProduct/Lemon.png",
            value:"Lemon",
            price:+20000,
            unit:"Kg",
            rate:+4.3,
            sold:+100
        },
    ]

    return(
        <div className={classes.home}>
            <div className={classes.header}>
                <Header items={searchCategoryData}/>
            </div>

            <div className={classes.headerFill}>

            </div>
            <div className={classes.content}>
                <div className={classes.category}>
                    <div className={classes.category_title}>
                        <span>
                            Kategori
                        </span>
                    </div>
                    <div className={classes.category_list}>
                        <CategoryList items={categoryItemData}/>
                    </div>
                </div>

                <div className={classes.populer}>
                    <div className={classes.populer_title}>
                        Populer
                    </div>
                    <div className={classes.populer_list}>
                        <ProductList items={populerProductData}/>
                    </div>
                </div>

                <div className={classes.terbaru}>
                    <div className={classes.terbaru_title}>
                        Terbaru
                    </div>
                    <div className={classes.terbaru_list}>
                        <ProductList items={terbaruProductData}/>
                    </div>
                </div>

                <div className={classes.footer}>
                    <Footer/>
                </div>
            </div>
        </div>

    )
}

export default Home;