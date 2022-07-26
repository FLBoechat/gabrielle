import image_mobile from "../../images/image_product_mobile.jpg"
import cart_icon from "../../images/icon_cart.svg"

import styles from "./Product.module.css"

function Product () {
    return (
        <div className={styles.product_info}>
                
                <div className={styles.perfume}>
                    
                    <img src={image_mobile} alt="Chanel Perfume bottle"/>

                    <p>PERFUME</p>
                </div>
                <section>
                    <h1>Gabrielle Essence <br /> Eau De Parfum</h1>
                    <p>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                </section>
                <div className={styles.price}>
                    <p>$149.99</p>
                    <p><span>$169.99</span></p>
                </div>
                <button>
                    <div className={styles.addcart}>
                        <img src={cart_icon} alt="Cart icon" />
                        <p>Add to Cart</p>
                    </div>
                </button>
        </div>
    )
}

export default Product