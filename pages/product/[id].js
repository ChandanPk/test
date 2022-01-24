import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Product.module.css'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartSlice'

const Product = ({ pizza }) => {

    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([])
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const alterPrice = (n) => {
        setPrice(price + n)
    }

    const handleSize = (sizeIndex) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex)
        alterPrice(difference)
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked
        if (checked) {
            alterPrice(option.price)
            setExtras(prev=> [...prev, option])
        }
        else {
            alterPrice(-option.price)
            setExtras(extras.filter(extra => extra._id !== option._id))
        }
    }

    const handleClick = ()=> {
        dispatch(addProduct({...pizza, extras, price, quantity}))
    }

    return (
        <div className={styles.container}>

            <div className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image alt="img" src={pizza.img} layout='fill' />
                </div>
            </div>


            <div className={styles.item}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.prize}>${Math.floor(price)}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3>Choose the size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <p className={styles.sizing1}>Small</p>
                        <Image alt="img" src='/img/size.png' layout='fill' />
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <p className={styles.sizing2}>Medium</p>
                        <Image alt="img" src='/img/size.png' layout='fill' />
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <p className={styles.sizing3}>Large</p>
                        <Image alt="img" src='/img/size.png' layout='fill' />
                    </div>
                </div>

                <h3 className={styles.choose}>Choose extra ingredients</h3>
                <div className={styles.options}>

                    {pizza.extraOptions.map(option => {
                        return (
                            <div className={styles.option} key={option._id}>
                                <input type="checkbox" name={option.text} id={option.text} className={styles.checkbox} onChange={e => {handleChange(e, option)}}/>
                                <label htmlFor={option.text}>{option.text}</label>
                            </div>
                        )
                    })}

                </div>

                <div className={styles.add}>
                    <input type="Number" value={quantity} className={styles.quantity} onChange={e => setQuantity(e.target.value)}/>
                    <button className={styles.addCartBtn} onClick={handleClick}>Add to Cart</button>
                </div>
            </div>

        </div>
    );
}

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/product/${params.id}`)
    return {
        props: {
            pizza: res.data
        }
    }
}

export default Product;