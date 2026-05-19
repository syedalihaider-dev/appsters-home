import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"
//
import { BsX } from "react-icons/bs";


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

        const currentdate = new Date().toLocaleString();
        const data = {
            page_url: pagenewurl,
            user_ip: `${ip.ip}`,
            lead_data: {
                name: e.target.name.value,
                email: e.target.email.value,
                phone: e.target.phone.value,
                message: e.target.comment.value
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
                                <a href="tel:8557991171">855 799 1171</a>
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

