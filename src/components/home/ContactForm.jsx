import Image from "next/image";
import styles from './ContactForm.module.css';

export default function ContactForm() {
return (
<section className={styles.contactForm}>
    <div className="container">
        <div className={styles.sec_top}>
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <h2 className={styles.title}><span className="primarytxt">Connect</span> With Us</h2>
                </div>
                <div className="col-sm-12 col-md-6">
                    <p className={`${styles.para} text-end`}>
                        Big ideas start with a simple conversation. <br />
                        We’re excited to explore yours and curate something truly extraordinary.
                    </p>
                </div>
            </div>
        </div>
        <div className={styles.sec_content}>
            <form action="mail">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <div className={styles.form_group}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" name="name" placeholder="Please share your first and last Name ..." required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className={styles.form_group}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" name="email" placeholder="yourid@domain.com" required />
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12">
                                <div className={styles.form_group}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" placeholder="000 000 0000" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={`${styles.form_group} ${styles.message}`}>
                            <label htmlFor="msg">Your Message</label>
                            <textarea name="msg" placeholder="Type your query"></textarea>
                        </div>
                        <div className="combo_btn">
                            <button type="submit" className="mybtn btn_1">
                                <div className="text">
                                    <span>Send Message</span>
                                    <span>Send Message</span>
                                </div>
                                <div className="icon">
                                    <Image 
                                    src="/images/send.png" 
                                    alt="Arrow Icon" 
                                    width={20} 
                                    height={20} 
                                    style={{ objectFit: "contain" }} 
                                    />
                                    <Image 
                                    src="/images/send.png" 
                                    alt="Arrow Icon" 
                                    width={20} 
                                    height={20} 
                                    style={{ objectFit: "contain" }} 
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
)
}