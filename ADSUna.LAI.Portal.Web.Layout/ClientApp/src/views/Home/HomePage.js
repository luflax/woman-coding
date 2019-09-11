import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

// sections for this page
import CustomMenu from "components/Menu/CustomMenu.js";


import styles from "assets/jss/material-kit-react/views/components.js";
import color from "@material-ui/core/colors/yellow";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Bichos Gerais"
                rightLinks={<CustomMenu />}
                fixed
                color="black"
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax image={require("assets/img/bg_new.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 style={{ color: "#333333" }} className={classes.title}>Associação Bichos Gerais</h1>
                                <h3 style={{ color: "#333333" }} className={classes.subtitle}>Cuidado e respeito aos animais</h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>

            <div className={classNames(classes.main, classes.mainRaised)}>
                <h1>Testee2</h1>
                <h2> final h2 </h2>
            </div>
            <Footer />
        </div>
    );
}