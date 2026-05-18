import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-5 col-md-4 col-lg-3">
            <Link href="/" className={styles.logo}>
              <Image
                src="/images/custom-app/logo.png"
                alt="Appsters Logo"
                width={256}
                height={59}
                className="img-fluid"
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
          <div className="col-7 col-md-8 col-lg-9 d-flex justify-content-end align-items-center gap-3 gap-lg-4">
            <a href="#contactSection" className={`${styles.quoteBtn} d-none d-md-block text-decoration-none`}>
              Request a Quote
            </a>
            <div className={styles.flags}>
              <Image src="/images/custom-app/flag-us.png" alt="American Flag" width={64} height={64} />
              <Image src="/images/custom-app/flag-uk.png" alt="United Kingdom Flag" width={64} height={64} />
              <Image src="/images/custom-app/flag-uae.png" alt="United Arab Emirates Flag" width={64} height={64} />
              <Image src="/images/custom-app/flag-aus.png" alt="Australia Flag" width={64} height={64} />
              <Image src="/images/custom-app/flag-cn.png" alt="Canada Flag" width={64} height={64} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
