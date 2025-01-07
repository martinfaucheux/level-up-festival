"use client";

import Image from 'next/image';
import styles from './page.module.css'; // Use a local CSS file

export default function FestivalPage() {
  const handleNotifyMe = () => {
    alert("C'est bien.");
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image src="/images/logo.png" alt="Festival Logo" width={500} height={500} layout="intrinsic" />
        </div>
        {/* <h1 className={styles.title}>Festival 2025</h1>
        <p className={styles.tagline}>An unforgettable experience is on its way...</p> */}
      </header>

      <main className={styles.main}>
        <section className={styles.info}>
          <h2>Plus d'infos à venir...</h2>
          <p>Promis, on revient vers vous</p>
        </section>
        <section className={styles.cta}>
          <button className={styles.notifyButton} onClick={handleNotifyMe}>
            Je suis chaud !
          </button>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2025 Festival Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
