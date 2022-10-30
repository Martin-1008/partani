import React from "react"
import classes from "./Footer.module.css"
import PartaniIcon from "../../Assets/Icons/PartaniIcon.svg"
import FacebookIcon from "../../Assets/Icons/FacebookIcon.svg"
import InstagramIcon from "../../Assets/Icons/InstagramIcon.svg"
import TiktokIcon from "../../Assets/Icons/TiktokIcon.svg"
import YoutubeIcon from "../../Assets/Icons/YoutubeIcon.svg"

const Footer = () =>{

    return(
        <div className={classes.section}>
            <div className={classes.footer}>
                <div className={classes.firstSection}>
                    <div className={classes.firstSection_title}>
                        PARTANI
                    </div>
                    <div className={classes.firstSection_content}>
                        <a href="">
                            Tentang Kami
                        </a>
                    </div>
                </div>
                <div className={classes.secondSection}>
                    <div className={classes.secondSection_title}>
                        Ikuti Kami
                    </div>
                    <div className={classes.secondSection_content}>
                        <a href="">
                            <img
                                src={InstagramIcon}
                            />
                        </a>
                        <a href="">
                            <img
                                src={TiktokIcon}
                            />
                        </a>
                        <a href="">
                            <img
                                src={YoutubeIcon}
                            />
                        </a>
                        <a href="">
                            <img
                                src={FacebookIcon}
                            />
                        </a>
                    </div>
                </div>
                <div className={classes.thirdSection}>
                    <img
                        src={PartaniIcon} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer;