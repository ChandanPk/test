import Image from 'next/image';
import styles from '../styles/Cart.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    // console.log(cart.products)

    return (
        <div className={styles.container}>
            {cart.quantity > 0 ? <>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        {cart.products.map((product, i) => {
                            return (<tr key={i}>
                                <td className={styles.td}>
                                    <div className={styles.imgContainer}>
                                        <Image alt="img" src={product.img} layout='fill' objectFit='cover' />
                                    </div>
                                </td>
                                <td className={styles.td}>
                                    <span className={styles.name}>{product.title}</span>
                                </td>
                                <td className={styles.td}>
                                    {
                                        product.extras.map(extra => {
                                            return (<span key={extra._id} className={styles.extras}>{extra.text}</span>)
                                        })
                                    }
                                </td>
                                <td className={styles.td}>
                                    <span className={styles.prize}>${product.price}</span>
                                </td>
                                <td className={styles.td}  >
                                    <span className={styles.quantity}>{product.quantity}</span>
                                </td>
                                <td className={styles.td}>
                                    <span className={styles.total}>${product.price * product.quantity}</span>
                                </td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>Cart Total</h2>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Subtotal:</b>$26
                    </div>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Discount:</b>$26
                    </div>
                    <div className={styles.cartText}>
                        <b className={styles.cartTextTitle}>Total:</b>$26
                    </div>
                    <button className={styles.btn}>CHECKOUT NOW!</button>
                </div>
            </div></>
            : <h3>Empty cart! <Link href='/' ><span className={styles.continue}>continue</span></Link> to homepage</h3> }
        </div>
    );
}

export default Cart;