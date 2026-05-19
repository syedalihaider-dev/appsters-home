import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
                timer = setTimeout(() => {}, typingDelay);
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

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.comment.value,
                checkboxesdata: checkboxes.join(),
            }
        }
        const JSONdata = JSON.stringify(data);
        setScore('Sending Data');

        // First API call to your server
        await fetch('https://brandsapi.pulse-force.com/api/v1/leads', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }).then((res) => {
            console.log(`Response received ${res}`);
            if (res.status === 200) {
                console.log(`Response Successed ${res}`);
            }
        });

        // Second API call to SheetDB
        let headersList = {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
            "Content-Type": "application/json"
        };
        let bodyContent = JSON.stringify({
            "IP": `${ip.ip} - ${ip.city} - ${ip.country}`,
            "Brand": "Appsters",
            "Page": `${currentRoute}`,
            "Date": currentdate,
            "Time": currentdate,
            "JSON": JSONdata,
        });
        await fetch("https://sheetdb.io/api/v1/71sd48ae8vab6", {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });

        // Third API call to another endpoint
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "fields": [
                {
                    "objectTypeId": "0-1",
                    "name": "email",
                    "value": e.target.email.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "name",
                    "value": e.target.name.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "phone",
                    "value": e.target.phone.value
                },
                {
                    "objectTypeId": "0-1",
                    "name": "message",
                    "value": e.target.comment.value
                }
            ],
            "context": {
                "ipAddress": ip.IPv4,
                "pageUri": pagenewurl,
                "pageName": pagenewurl
            },
            "legalConsentOptions": {
                "consent": {
                    "consentToProcess": true,
                    "text": "I agree to allow Example Company to store and process my personal data.",
                    "communications": [
                        {
                            "value": true,
                            "subscriptionTypeId": 999,
                            "text": "I agree to receive marketing communications from Example Company."
                        }
                    ]
                }
            }
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
        await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46084502/ea92327e-cdf7-4b04-9538-8d0c0e92cd9e", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

        const { pathname } = router;
        if (pathname == pathname) {
            window.location.href = '/thank-you';
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
                                <a href='javascript:window.replaceChat();' className={`${styles.deliver} blackPulse`}>
                                    Let’s Discuss Your Project
                                </a>
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
                                            <strong>4.8 out of 5</strong> (review rating)
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
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Description' name='comment' className='form-control mt-3'></textarea>
                                <div className='d-sm-flex align-items-center mt-4'>
                                    <input className={styles.vehicle1} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                    <label className='form-check-label' htmlFor='flexCheckDefault'>Sign Non-Disclosure Agreement </label>
                                    <button className={`pink ${styles.value} mt-4 mt-sm-0 blackPulse bitsForm`} type='submit' disabled={isDisabled}>
                                        <Image src="/newmobileapp/formImg.png" className='img-fluid' alt='Appsters' width={18} height={18}/>
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
