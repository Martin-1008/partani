import React from "react";
import classes from "./Home.module.css"
import Header from "../Header/Header";
import CategoryList from "../Categories/CategoryList";
import ProductCard from "../Products/ProductCard";
import PopulerProductList from "../Products/PopulerProductList";

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
    ]

    return(
        <div>
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
                    <div>
                        Populer
                    </div>
                    <div>
                        <ProductCard
                            source="PopulerProduct/PupukNonSubsidi.png"
                            value="Pupuk Non-Subsidi"
                            price="90000"
                            unit="Ton"
                            rate="4.5"
                            sold="40"
                        />

                        <PopulerProductList items={populerProductData}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home;