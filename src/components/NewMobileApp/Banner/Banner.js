import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PHONE_NUMBER_TEL } from '@/config/phone'
import styles from './Banner.module.css';

const Typewriter = ({ text, speed, eraseDelay, typingDelay, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(typingDelay);

    useEffect(() => {
        let timer;
        const handleType = () => {
            const fullText = text;

            setDisplayedText(isDeleting
                ? fullText.substring(0, displayedText.length - 1)
                : fullText.substring(0, displayedText.length + 1)
            );

            setTypingSpeed(isDeleting ? speed / 2 : speed);

            if (!isDeleting && displayedText === fullText) {
                timer = setTimeout(() => setIsDeleting(true), eraseDelay);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                timer = setTimeout(() => { }, typingDelay);
            } else {
                timer = setTimeout(handleType, typingSpeed);
            }
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, speed, eraseDelay, typingDelay, text, typingSpeed, loopNum]);

    return <span className={className}>{displayedText}<span style={{ borderRight: '2px solid black', paddingRight: '2px', animation: 'blink 1s step-end infinite' }}></span></span>;
};

const Banner = ({ content }) => {
    const { title, desc } = content;
    const [checkboxes, setCheckboxes] = useState([]);
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Sign Me Up');
    const [isDisabled, setIsDisabled] = useState(false);

    // Creating function to load IP address from the API

    const getIPData = async () => {
        try {
            const response = await fetch('https://ipinfo.io/?token=229b1c3fa2e54c');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            setIP(data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const handleOptionChange3 = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckboxes([...checkboxes, value]);
        } else {
            setCheckboxes(checkboxes.filter((checkbox) => checkbox !== value));
        }
    };

    const router = usePathname();
    const currentRoute = router;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true);
        setScore('Sending Data...');

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            msg: `Message: ${e.target.comment.value || ''}\nNDA Checkbox: ${checkboxes.join()}`,
            pageTitle: 'Mobile App Development Services - Banner Form',
            pageUrl: pagenewurl,
            country: ip?.country || '',
            state: ip?.region || '',
            city: ip?.city || '',
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                window.location.href = '/lp/mobile-app-development-services/thank-you';
            } else {
                setScore('Sign Me Up');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
            setScore('Sign Me Up');
        } finally {
            setIsDisabled(false);
        }
    }

    return (
        <>
            <section className={`${styles.bannerSec} pt-140`} >
                <Container>
                    <Row className={`g-5 ${styles.applost} align-items-center`}>
                        <Col lg={7} xl={6} className='p-0 my-0'>
                            <div>
                                <Typewriter
                                    className={styles.quickly}
                                    text='Timely – Trusted – Trailblazing'
                                    speed={100}
                                    eraseDelay={200}
                                    typingDelay={100}
                                />
                            </div>
                            <div className={styles.oppp}>
                                <h1 className='text-black fw600 mb-3'>
                                    {title}
                                </h1>
                                <p className='font16 text-black fw300 mt-3 mb-lg-4 fontsfregular'>
                                    {desc}
                                </p>
                                <div className="combo_btn">
                                    <a href='#contact' className={`${styles.deliver} blackPulse`}>
                                        Get a Free Project Estimate
                                    </a>
                                    <a href={PHONE_NUMBER_TEL} className={`${styles.deliver} blackPulse`}>
                                        Call Us Now
                                    </a>
                                </div>
                            </div>
                            <div className={styles.badge}>
                                <div className={`d-flex align-items-center ${styles.clientRviews}`}>
                                    <div className={styles.clients}>
                                        <Image src="/newmobileapp/badgesClient.png" alt='Appsters' width={183} height={80} />
                                    </div>
                                    <div>
                                        <div className={styles.reviews}>
                                            <Image src="/newmobileapp/star.png" alt='Appsters' width={25} height={22} />
                                            <Image src="/newmobileapp/star.png" alt='Appsters' width={25} height={22} />
                                            <Image src="/newmobileapp/star.png" alt='Appsters' width={25} height={22} />
                                            <Image src="/newmobileapp/star.png" alt='Appsters' width={25} height={22} />
                                            <Image src="/newmobileapp/star.png" alt='Appsters' width={25} height={22} />
                                        </div>
                                        <p className='mb-0'>
                                            <strong>4.8 out of 5</strong> (review rating) <br />
                                            Over 1,200+ reviews
                                        </p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between gap-4 gap-xxl-5'>
                                    <div className={styles.partnersImage}>
                                        <Image src="/newmobileapp/clutch-black.png" alt='Appsters' width={128} height={61} />
                                    </div>
                                    <div className={styles.partnersImage}>
                                        <Image src="/newmobileapp/partner.png" alt='Appsters' width={128} height={57} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5} xl={6} className='p-0'>
                            <form id='BannerForm' className={styles.your} onSubmit={handleSubmit}>
                                <h3>Let’s Discuss <br /> Your App Idea In Detail</h3>
                                <p className='text-white text-center'>Our experts help you in the best way possible. Get customized plans!</p>
                                <input type='text' minLength="4" name='name' required className='form-control' placeholder="Full Name"></input>
                                <input type="number" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <div className='d-sm-flex align-items-center mt-4'>
                                    <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                    <label className='form-check-label' htmlFor='flexCheckDefault'>Sign Non-Disclosure Agreement </label>
                                    <button className={`pink ${styles.value} mt-4 mt-sm-0 blackPulse bitsForm`} type='submit' disabled={isDisabled}>
                                        <Image src="/newmobileapp/formImg.png" className='img-fluid' alt='Appsters' width={18} height={18} />
                                        {score}
                                    </button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner
