import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = ({ pizza }) => {



    return ( 
        <Link href={`/product/${pizza._id}`} >
        <div className={styles.container}>
            <Image alt="img" className={styles.img} src={pizza.img} width='500' height='500' />
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>${pizza.prices[0]}</span>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur natus cum facere porro quo dolor.</p>
        </div>
        </Link>
     );
}
 
export default PizzaCard;