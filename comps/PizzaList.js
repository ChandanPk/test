import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
    // console.log(pizzaList, "yaah");
    return (
        <div className={styles.container}>
            <div className={styles.title}>THE BEST IN MANY</div>
            <p className={styles.desc}>Lorem ipsum dolor sit amet repellat ab temporibus enim commodi nesciunt nisi, suscipit quos cum nostrum beatae asperiores sequi voluptate, aliquid ad placeat aliquam. Sint, amet ipsam! Nihil dicta vitae ad!</p>
            <div className={styles.wrapper}>
               
               {pizzaList.map((pizza) => {
                   return <PizzaCard key={pizza._id} pizza={pizza}/>
               })} 

            </div>
        </div>
    );
}

export default PizzaList;