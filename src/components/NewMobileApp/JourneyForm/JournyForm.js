import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
//
import styles from "./JournyForm.module.css"
import { usePathname } from 'next/navigation';

const JournyForm = () => {
    const [checkboxes, setCheckboxes] = useState([]);
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [score, setScore] = useState('Let’s Do This');
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
            msg: `Message: ${e.target.comment.value}\nNDA Checkbox: ${checkboxes.join()}`,
            pageTitle: 'Mobile App Development Services',
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
                setScore('Let’s Do This');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
            setScore('Let’s Do This');
        } finally {
            setIsDisabled(false);
        }
    }

    return (
        <>
            <section className={styles.JournyForm} id="contact">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className={styles.content}>
                                <h2>
                                    <span>Triumph</span> with the Best App  <span>Making</span> Services</h2>
                                <div className={styles.experts}>
                                    <h5>30 Minute Breakdown</h5>
                                    <h4>Free half-hour strategy session worth $300 With Our Experienced App Experts</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <form id='form' onSubmit={handleSubmit}>
                                <div className='mb-4'>
                                    <h4>Have an Idea to Execute?</h4>
                                    <h3 className='grdiant'>We’re Listening</h3>
                                </div>
                                <input type='text' minLength="4" name='name' required className='form-control' placeholder="Full Name"></input>
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name='phone' required className='form-control mt-3' placeholder="Phone Number"></input>
                                <input type='email' name='email' required className='form-control mt-3' placeholder="Email Address"></input>
                                <textarea placeholder='Comment' name='comment' className='form-control mt-3'></textarea>
                                <div className={`d-flex justify-content-between mt-3 mt-md-5 ${styles.formBottom}`}>
                                    <div className='d-flex align-items-center gap-1'>
                                        <input className={`mb-0 ${styles.vehicle1}`} type='checkbox' name='vehicle1' checked={checkboxes.includes('Share Non Disclosure Agreement')} onChange={handleOptionChange3} value='Share Non Disclosure Agreement' />
                                        <label className='form-check-label' htmlFor='flexCheckDefault'> Share Non Disclosure Agreement</label>
                                    </div>
                                    <button className={`${styles.value} pink bitsForm`} type='submit' disabled={isDisabled}>
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

export default JournyForm
