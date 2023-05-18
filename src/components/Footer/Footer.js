import './Footer.scss';
import collections from '../../assets/logos/nav-bar/collections.svg';
import home from '../../assets/logos/nav-bar/home.svg';
import mug from '../../assets/logos/nav-bar/mug-nav.svg';
import prep from '../../assets/logos/nav-bar/prep.svg';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <section className="footer">
            <div className="footer__nav">
                <Link className="link" to="/*">
                    <img className="footer__nav--home" src={home} />
                </Link >
                <Link className="link" to="/collections">
                    <img className="footer__nav--collect" src={collections} />
                </Link>
                <Link className="link" to="/prepare">
                    <img className="footer__nav--prep" src={prep} />
                </Link>
                <Link className="link" to="/collections">
                    <img className="footer__nav--mug" src={mug} />
                </Link>
            </div>
        </section>
    );
}

export default Footer;