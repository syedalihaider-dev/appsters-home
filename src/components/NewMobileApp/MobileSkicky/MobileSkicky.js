import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"
//
import { BsX } from "react-icons/bs";
import { PHONE_NUMBER, PHONE_NUMBER_TEL } from '@/config/phone';


const MobileSkicky = ({ isHovered, showSticky, loc }) => {
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [score, setScore] = useState('Submit');

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
            msg: `Message: ${e.target.comment.value || ''}`,
            pageTitle: 'Mobile App Development Services - Popup Form',
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
                setScore('Submit');
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to send message. Please check your connection.');
            setScore('Submit');
        } finally {
            setIsDisabled(false);
        }
    }

    return (
        <>
            {showSticky && (
                <div className="newtownfy">
                    <div className="chat">
                        <span className="icon">
                            <Image width="30" height="30" alt="Appsters" className="img-fluid" src="/newmobileapp/tel.webp" loading="lazy" />
                            <div className="txtBody">
                                <a href='javascript:window.replaceChat();'>Chat Now</a>
                            </div>
                        </span>
                    </div>
                    <div className="call">
                        <span className="icon">
                            <Image width="30" height="30" alt="Appsters" className="img-fluid" src="/newmobileapp/call.webp" loading="lazy" />
                            <div className="txtBody">
                                <a href={PHONE_NUMBER_TEL}>{PHONE_NUMBER}</a>
                            </div>
                        </span>
                    </div>
                </div>
            )}

            {showSticky && (
                <div className={isHovered ? 'openForm active' : 'openForm'}>
                    <div className="wrapper">
                        <span onClick={loc}>
                            {isHovered ?
                                <BsX className='close' />
                                :
                                <span className="ppcOpen">
                                    Get In Touch
                                </span>
                            }

                        </span>
                        <form id="leadPopupForm" onSubmit={handleSubmit} className="popup-form" data-hs-cf-bound="true">
                            <div className="inputGroup">
                                <h3 className="f-20 center fw800">Get A Free Quote Now!</h3>
                            </div>
                            <div className="inputGroup">
                                <input name="name" minLength="4" type="text" placeholder="Full Name*" required />
                            </div>
                            <div className="inputGroup">
                                <input name="email" type="email" placeholder="Email Address*" required />
                            </div>
                            <div className="inputGroup">
                                <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" required name="phone" placeholder="Phone No*" />
                            </div>
                            <div className="inputGroup">
                                <textarea name='comment' required placeholder="Let Us know Time And Date To Call You."></textarea>
                            </div>
                            <button id="btntrack" value={score} type="submit" className='bitsForm' disabled={isDisabled}>{score}</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default MobileSkicky

