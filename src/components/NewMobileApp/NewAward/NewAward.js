
import React from 'react'
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick'
import styles from "./NewAwards.module.css"

const NewAward = ({ content, contentTwo, onAnchorClick }) => {
    const { title, desc } = content;
    var awardSlider = {
        arrows: false,
        slidesToShow: 3.1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 14000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    speed: 20000,
                }
            },
        ]
    };
    return (
        <>
            <section className={styles.awardSec}>
                <Container className={styles.content}>
                    <Row className='align-items-center'>
                        <Col md={5}>
                            <div>
                                <div className={styles.txt}>
                                    <h2 className={styles.awardsHeading}>
                                        {title}
                                    </h2>
                                    <p className='fontsfregular'>
                                        {desc}
                                    </p>
                                    <div className={`${styles.btn} mt-5 mt-md-0`}>
                                        <a href="#href" className='blackPulse' onClick={onAnchorClick}>
                                            Free Consultation
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={7}>
                            <div className='mt-4 mt-md-0'>
                                <Slider {...awardSlider} className={styles.awardSlider}>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award2.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Dot Comm</h6>
                                                <p className='mb-0 fontsfregular'>Excellence in Web Creativity &  Digital Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award3.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>INC. 5000</h6>
                                                <p className='mb-0 fontsfregular'>America's Fastest Growing Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award1.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award5.png" alt="Appsters" width={120} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Silver Awards Winner
                                                    <br className="d-lg-block d-none" /> 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award6.png" alt="Appsters" width={123} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Clutch</h6>
                                                <p className='mb-0 fontsfregular'>Top 1000 <br className="d-lg-block d-none" />
                                                    Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award7.png" alt="Appsters" width={90} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Right firms</h6>
                                                <p className='mb-0 fontsfregular'>Top Mobile App Development Company 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award12.svg" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>The Manifest</h6>
                                                <p className='mb-0 fontsfregular'>Most Reviewed App Development Company</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award13.svg" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>The Manifest</h6>
                                                <p className='mb-0 fontsfregular'>Most Reviewed App Development Company</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award8.png" alt="Appsters" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Developers</h6>
                                                <p className='mb-0 fontsfregular '>Top Entertainment App
                                                    Developers  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award9.png" alt="Appsters" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Expertise</h6>
                                                <p className='mb-0 fontsfregular'>Best Mobile App <br className="d-lg-block d-none" />
                                                    Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award10.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Rated</h6>
                                                <p className='mb-0 fontsfregular'>Top App Development <br className="d-lg-block d-none" /> Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award1.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Gold Award Winner <br className="d-lg-block d-none" /> 2020</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award2.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Dot Comm</h6>
                                                <p className='mb-0 fontsfregular'>Excellence in Web Creativity &  Digital Communication</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award3.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>INC. 5000</h6>
                                                <p className='mb-0 fontsfregular'>America's Fastest Growing Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award5.png" alt="Appsters" width={120} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Horizon Award</h6>
                                                <p className='mb-0 fontsfregular '>Silver Awards Winner
                                                    <br className="d-lg-block d-none" /> 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award6.png" alt="Appsters" width={123} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Clutch</h6>
                                                <p className='mb-0 fontsfregular'>Top 1000 <br className="d-lg-block d-none" />
                                                    Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award7.png" alt="Appsters" width={90} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Right firms</h6>
                                                <p className='mb-0 fontsfregular'>Top Mobile App Development Company 2023</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award8.png" alt="Appsters" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Developers</h6>
                                                <p className='mb-0 fontsfregular '>Top Entertainment App
                                                    Developers  </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award9.png" alt="Appsters" width={102} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Expertise</h6>
                                                <p className='mb-0 fontsfregular'>Best Mobile App <br className="d-lg-block d-none" />
                                                    Developer</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-2 px-lg-1'>
                                        <div className={styles.sliderCards}>
                                            <div className={styles.imageDiv}>
                                                <Image src="/newmobileapp/award10.png" alt="Appsters" width={100} height={100} className='mx-auto' />
                                            </div>
                                            <div className={styles.sliderTxt}>
                                                <h6>Top Rated</h6>
                                                <p className='mb-0 fontsfregular'>Top App Development Companies</p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </section >
        </>
    )
}

export default NewAward
