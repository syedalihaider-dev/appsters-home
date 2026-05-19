"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from "./LogoSlider.module.css"
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import leftImg1 from 'media/newmobileapp/sqlite-logo/leftImg1.png'

const LogoSlider = (props) => {
    const tabLeft = [
        { image: "/newmobileapp/sqlite-logo/rightImg8.png", index: 0 },
        { image: "/newmobileapp/sqlite-logo/leftImg2.png", index: 1 },
        { image: "/newmobileapp/sqlite-logo/leftImg3.png", index: 2 },
        { image: "/newmobileapp/sqlite-logo/leftImg4.png", index: 3 },
        { image: "/newmobileapp/sqlite-logo/leftImg5.png", index: 4 },
        { image: "/newmobileapp/sqlite-logo/leftImg6.png", index: 5 },
        { image: "/newmobileapp/sqlite-logo/leftImg7.png", index: 6 },
        { image: "/newmobileapp/sqlite-logo/leftImg8.png", index: 7 },
        { image: "/newmobileapp/sqlite-logo/leftImg9.png", index: 8 },
        { image: "/newmobileapp/sqlite-logo/leftImg10.png", index: 9 },
        { image: "/newmobileapp/sqlite-logo/leftImg11.png", index: 10 },
    ];
    const tabRight = [
        { image: "/newmobileapp/sqlite-logo/rightImg1.png", index: 0 },
        { image: "/newmobileapp/sqlite-logo/rightImg2.png", index: 1 },
        { image: "/newmobileapp/sqlite-logo/rightImg3.png", index: 2 },
        { image: "/newmobileapp/sqlite-logo/rightImg4.png", index: 3 },
        { image: "/newmobileapp/sqlite-logo/rightImg5.png", index: 4 },
        { image: "/newmobileapp/sqlite-logo/rightImg6.png", index: 5 },
        { image: "/newmobileapp/sqlite-logo/rightImg7.png", index: 6 },
        { image: "/newmobileapp/sqlite-logo/rightImg8.png", index: 7 },
        { image: "/newmobileapp/sqlite-logo/rightImg9.png", index: 8 },
        { image: "/newmobileapp/sqlite-logo/rightImg10.png", index: 9 },
        { image: "/newmobileapp/sqlite-logo/rightImg11.png", index: 10 },
    ];

    var leftSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    var rightSlider = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 10000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        rtl: true,
        responsive: [
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
                }
            },
        ]
    };
    return (
        <>
            <section className={`d-none d-md-block ${styles.sliderSec}`}>
                <Row className={`m-0 py-lg-5 px-0 justify-content-center`} >
                    <Col md={12} className=' text-center d-flex flex-column align-items-center '>
                        <h2>
                            Your <span>  Tech Stack </span> is Our Burden
                        </h2>
                        <p>
                            Our
                            <span> teams </span> hold expertise in a multitude of
                            programming aspects
                        </p>
                        <br />
                        <Col md={11}>
                            <Slider {...leftSlider} className='mb-3'>
                                {tabLeft.map((item, index) => (
                                    <div className={`${styles.sliderImage} d-flex justify-content-center `}>
                                        <Image alt="Appsters" width={200} height={200} src={item.image} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col md={11}>
                            <Slider {...rightSlider} className='mt-5'>
                                {tabRight.map((item, index) => (
                                    <div className={`${styles.sliderImage} d-flex justify-content-center `}>
                                        <Image alt="Appsters" width={200} height={200} src={item.image} className="img-fluid" />
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                        <Col lg={12}>
                            <div className={styles.btn}>
                                <Link href="#form" className='d-flex align-items-center gap-3 pink'>
                                    Free Consultation
                                    <Image src="/newmobileapp/right-arrow.png" alt='Appsters' width={24} height={12} />
                                </Link>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default LogoSlider
