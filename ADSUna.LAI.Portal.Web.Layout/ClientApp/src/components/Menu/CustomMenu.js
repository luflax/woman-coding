/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function CustomMenu(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            
            <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Home
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Castração
                    </Button>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Atualidades
                    </Button>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Quem Somos"
                      //dropdownHeader="header do dropdown"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Linha do Tempo",
                        "Gestão Estratégica"
                      ]}
                    />
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Programas"
                      //dropdownHeader="header do dropdown"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Animais da Comunidade",
                        "Projeto ELO",
                        "Animais em espaços públicos"
                      ]}
                    />
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      buttonText="Sustentabilidade"
                      //dropdownHeader="header do dropdown"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Educação Ambiental",
                        "Responsabilidade Social"
                      ]}
                    />
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Fotos e Vídeos
                    </Button>
                  </ListItem>

            <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Contato"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Contato
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              Parceiros
            </a>
          ]}
        />
      </ListItem>

    
        </List>
    );
}


