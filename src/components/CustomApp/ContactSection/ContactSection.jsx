"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    customAmount: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Reset dependents when service changes
    if (name === 'service') {
      setFormData(prev => ({ ...prev, [name]: value, budget: '', customAmount: '' }));
      setErrors(prev => ({ ...prev, customAmount: '' }));
      return;
    }

    // Reset dependents when budget changes
    if (name === 'budget') {
      setFormData(prev => ({ ...prev, [name]: value, customAmount: '' }));
      setErrors(prev => ({ ...prev, customAmount: '' }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    // Validation for custom amount
    if (name === 'customAmount') {
      if (value && Number(value) < 30000) {
        setErrors(prev => ({ ...prev, customAmount: 'Invalid! Custom quote must be $30,000 or more.' }));
      } else {
        setErrors(prev => ({ ...prev, customAmount: '' }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final check before submit
    const isCustomQuote = formData.budget === 'Request a custom quote' || formData.budget === 'Request a custom quote (Corporate / Enterprise)';

    if (isCustomQuote) {
      if (!formData.customAmount || Number(formData.customAmount) < 30000) {
        setErrors(prev => ({ ...prev, customAmount: 'Invalid! Custom quote must be $30,000 or more.' }));
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/custom-app-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, pageUrl: window.location.href }),
      });

      if (response.ok) {
        setFormData({
          name: '', email: '', phone: '', service: '', budget: '', customAmount: '', message: ''
        });
        router.push('/lp/custom-app/thank-you');
      } else {
        alert('There was an issue submitting your form. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('There was an issue submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactSection" className={styles.contactSection}>
      <Image src="/images/custom-app/form-bg.png" alt="Backgroud Image..." fill priority className={styles.bgImg} />
      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-7 mb-5 mb-lg-0 text-white">
            <h2 className={styles.title}>GOT AN <span className={styles.idea}>IDEA?</span></h2>
            <p className={styles.subtitle}>
              Let's get in touch!
            </p>
          </div>
          <div className="col-lg-5">
            <div className={styles.formWrapper}>
              <h3 className={styles.formTitle}>Get in touch with our experts</h3>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      className={styles.inputField}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      className={styles.inputField}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number*"
                    className={styles.inputField}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <select
                    name="service"
                    className={styles.selectField}
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Service Type *</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Web App Development">Web App Development</option>
                    <option value="SaaS Platform">SaaS Platform</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Blockchain Solutions">Blockchain Solutions</option>
                    <option value="Business Proposal">Business Proposal</option>
                    <option value="Request Custom Code">Request Custom Code</option>
                  </select>
                </div>

                {formData.service && (
                  <div className="mb-3">
                    <select
                      name="budget"
                      className={styles.selectField}
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Budget *</option>
                      {formData.service === 'Business Proposal' ? (
                        <>
                          <option value="$999 - Starter Proposal">$999 - Starter Proposal</option>
                          <option value="$2,499 - Investor Ready Proposal">$2,499 - Investor Ready Proposal</option>
                          <option value="$4,900 - Corporate Proposal Pack">$4,900 - Corporate Proposal Pack</option>
                          <option value="Request a custom quote (Corporate / Enterprise)">Request a custom quote (Corporate / Enterprise)</option>
                        </>
                      ) : (
                        <>
                          <option value="$3,000 to $5,000">$3,000 to $5,000</option>
                          <option value="$5,000 to $10,000">$5,000 to $10,000</option>
                          <option value="$10,000 to $25,000">$10,000 to $25,000</option>
                          <option value="$25,000 to $50,000">$25,000 to $50,000</option>
                          <option value="Request a custom quote">Request a custom quote</option>
                        </>
                      )}
                    </select>
                  </div>
                )}

                {(formData.budget === 'Request a custom quote' || formData.budget === 'Request a custom quote (Corporate / Enterprise)') && (
                  <div className="mb-3">
                    <input
                      type="number"
                      name="customAmount"
                      placeholder="Enter Your Budget *"
                      className={`${styles.inputField} ${errors.customAmount ? styles.inputError : ''}`}
                      value={formData.customAmount}
                      onChange={handleChange}
                      required
                    />
                    {errors.customAmount && (
                      <div className={styles.errorText}>{errors.customAmount}</div>
                    )}
                  </div>
                )}

                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message*"
                    className={styles.textareaField}
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
