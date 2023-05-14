import './Footer.scss';
import collections from '../../assets/logos/nav-bar/collections.svg';
import home from '../../assets/logos/nav-bar/home.svg';
import mug from '../../assets/logos/nav-bar/mug-nav.svg';
import prep from '../../assets/logos/nav-bar/prep.svg';



function Footer() {
    return (
        <section className="footer">
            <div className="footer__nav">
                <img className="footer__nav--home" src={home}/>
                <img className="footer__nav--mug" src={mug}/>
                <img className="footer__nav--collect" src={collections}/>
                <img className="footer__nav--prep" src={prep}/>
            </div>
        </section>
    );
}

export default Footer;