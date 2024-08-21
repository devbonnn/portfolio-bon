import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
    <p>
        Copyright &#169; 2023 Bon Vista. All Rights Reserved.
    </p>
    </section>
  )
}

export default Footer