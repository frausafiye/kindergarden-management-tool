import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import styles from "./styles/footer.module.scss";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/logo.svg";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className={styles.container}>
      <div className={styles.wrap}>
        <section className={styles.socialMedia}>
          <div className={styles.socialMediaWrap}>
            <Link to="/" onClick={toggleHome} className={styles.socialLogo}>
              <img className={styles.img} src={logo} alt="lg" />
              KitaCare
            </Link>
            <div className={styles.socialIcons}>
              <a
                className={styles.socialIconLink}
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopenernoreferrer"
              >
                <FaFacebook />
              </a>

              <a
                className={styles.socialIconLink}
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopenernoreferrer"
              >
                <FaInstagram />
              </a>

              <a
                className={styles.socialIconLink}
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopenernoreferrer"
              >
                <FaYoutube />
              </a>

              <a
                className={styles.socialIconLink}
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopenernoreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
