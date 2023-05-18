import React from 'react';
import '../BrewingType/BrewingType.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import chevron from '../../assets/logos/images/chevron-left.svg';

function BrewingType({ brewingData }) {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const { brewId } = useParams();

    console.log(brewingData);
    const filteredBrew = brewingData.find(brew => brew.id == brewId);
    console.log('filteredBrew', filteredBrew);

    if (!filteredBrew) {
        return <div>Loading...</div>;
    }

    const { specs } = filteredBrew;
    const steps = specs[0].steps

    const url = process.env.REACT_APP_BASE;
    return (
        <>
            <Header />
            <section className="brewing">
                <a className="brewing__return--logo">
                    <img className="brewing__return--logo" src={chevron} onClick={goBack} />
                </a>
                <div className="brewing__type">
                    <p class className="brewing__type--name">
                        {filteredBrew.brewing_technique}
                    </p>
                    <div class className="brewing__type--hero">
                        <img src={url + filteredBrew.image}></img>
                    </div>
                </div>
                {specs.map(spec => (
                    <div className="specs" key={spec.id}>
                        <div className="specs__ground-size">
                            <p className="specs__ground-size name">
                                GRIND SIZE:
                            </p>
                            <p className="specs__ground-size value">
                                {spec.ground_size}
                            </p>
                        </div>
                        <div className="specs__amount">
                            <p className="specs__amount name">
                                COFFEE AMOUNT:
                            </p>
                            <p className="specs__amount value">
                                {spec.coffee_amount}
                            </p>
                        </div>
                        <div className="specs__steps">
                            <p className="specs__steps name">
                                INSTRUCTIONS:
                            </p>
                            <p className="specs__steps--val"> {steps.map((step, index) => (
                                <div className="specs__steps--val-li value2">
                                    <div className="specs__steps--val-li--num">{1 + index}.</div>
                                    <p className="specs__steps--val-li--stp">{step} </p>
                                </div>
                            ))}
                            </p>
                        </div>
                    </div>
                ))}
                <p></p>
            </section>
            <Footer />
        </>
    );
}

export default BrewingType;
