import image_mobile from "../../images/image_product_mobile.jpg"

import styles from "./Product.module.css"

function Product () {
    return (
        <div className={styles.product}>

            <img className={styles.image} src={image_mobile} alt="Product Picture"/>

        </div>
    )
}

export default Product