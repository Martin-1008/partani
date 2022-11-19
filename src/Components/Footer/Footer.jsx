import React from "react";
import classes from "./Footer.module.css";
import PartaniIcon from "../../Assets/Icons/PartaniIcon.svg";
import FacebookIcon from "../../Assets/Icons/FacebookIcon.svg";
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg";
import TwitterIcon from "../../Assets/Icons/TwitterIcon.svg";

const Footer = () => {
  return (
    <div className={classes.section}>
      <div className={classes.footer}>
        <div className={classes.firstSection}>
          <div className={classes.firstSection_title}>PARTANI</div>
          <div className={classes.firstSection_content}>
            <a href="">Tentang Kami</a>
          </div>
        </div>
        <div className={classes.secondSection}>
          <div className={classes.secondSection_title}>Ikuti Kami</div>
          <div className={classes.secondSection_content}>
            <a href="https://www.instagram.com/partani.shop/" target="_blank">
              <img src={InstagramIcon} />
            </a>
            <a href="https://twitter.com/PartaniShop" target="_blank">
              <img src={TwitterIcon} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100087305695131"
              target="_blank"
            >
              <img src={FacebookIcon} />
            </a>
          </div>
        </div>
        <div className={classes.thirdSection}>
          <img src={PartaniIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
