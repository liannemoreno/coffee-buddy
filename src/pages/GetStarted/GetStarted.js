import './GetStarted.scss';
import coffee_buddy from '../../assets/logos/home-page/coffee_buddy.svg';
import brewing_pot from '../../assets/logos/home-page/coffee-brewing-pot.svg';
import coffee_mug from '../../assets/logos/home-page/coffee-mug.svg';
import coffee_togo from '../../assets/logos/home-page/coffee-togo-cup.svg';
import left_beans from '../../assets/logos/home-page/left-coffee-beans.svg';
import right_beans from '../../assets/logos/home-page/right-coffee-beans.svg';
import { Link } from "react-router-dom";


function GetStarted() {
    return (
        <div className="start">
            <div className="start__top-row">
                <img className="mug" src={coffee_mug} alt="coffee mug"/>
            </div>
            <div className="start__middle-row">
                <img className="togo-mug" src={coffee_togo} alt="coffee tumbler"/>
                <img className="buddy-logo" src={coffee_buddy} alt="coffee buddy logo"/>
                <img className="right-beans" src={right_beans} alt="coffee bean logos"/>
            </div>
            <div className="start__message">
                <div className="start__message-welcome">
                    <h1>WELCOME!</h1>
                </div>
                <div className="start__message-intro">
                    <p>I am your best buddy in the coffee journey you are about to embark on.</p>
                </div>
                <div className="start__message-button">
                    <Link className="start__message-button--link" to="/collections">
                        <button>
                            <p>GET STARTED</p>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="start__bottom-row">
                <img className="left-beans" src={left_beans} alt="coffee bean logos"/>
                <img className="brewing-pot" src={brewing_pot} alt="brewing pot logo"/>
            </div>
        </div>
    );
}

export default GetStarted;