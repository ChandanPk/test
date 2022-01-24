import styles from '../../styles/Order.module.css';

const Order = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}></div>
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
                    <button disabled className={styles.btn}>PAID</button>
                </div>
            </div>
        </div>
    );
}

export default Order;