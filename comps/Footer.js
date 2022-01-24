import Image from 'next/image';
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return ( 
        <footer className={styles.container}>
            <div className={styles.item}>
                <Image alt="img" src='/img/bg.png' layout='fill'/>
            </div>

            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.moto}>
                        The best growminose peedzas whatsoever.
                    </h2>
                </div>

                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURENTS
                    </h1>
                    <p className={styles.text}>
                        56003 R. Bakers Street #221B
                        <br /> London, 806543
                        <br /> 90 788 654 89
                    </p>
                    <p className={styles.text}>
                        56003 R. Bakers Street #221B
                        <br /> London, 806543
                        <br /> 90 788 654 89
                    </p>
                    <p className={styles.text}>
                        56003 R. Bakers Street #221B
                        <br /> London, 806543
                        <br /> 90 788 654 89
                    </p>
                </div>
                <dv className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 - 6:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 - 24:00
                    </p>
                </dv>
            </div>
        </footer>
     );
}
 
export default Footer;