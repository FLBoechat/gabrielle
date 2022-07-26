import image_mobile from "../../images/image_product_mobile.jpg"
import cart_icon from "../../images/icon_cart.svg"

import styles from "./Product.module.css"

function Product () {
    return (
        <div>
            <section className={styles.product_info}>
                <img className={styles.image} src={image_mobile} alt="Product Picture"/>
                <p id="perfume">PERFUME</p>
                <h1>Gabrielle Essence <br /> Eau De Parfum</h1>
                <p>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
                <div className={styles.price}>
                    <p>$149.99</p>
                    <p><span>$169.99</span></p>
                </div>
                <button type="submut">
                    <div className="buttonname">
                        <img src={cart_icon} alt="" /> 
                        Add to cart
                    </div>
                </button>
            </section>        
        </div>
    )
}

export default Product