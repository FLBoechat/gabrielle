import image_mobile from "../images/image_product_mobile.jpg"
import cart_icon from "../images/icon_cart.svg"
import {StyledProduct, PerfCaption, PerfDescription, PerfPrice,PerfButton} from './styles/Product.styled'
import {Image} from './styles/Product.styled'



function Product () {
    return ( 
        <StyledProduct>
    
            <Image src={image_mobile} alt="Chanel Perfume bottle"/>
            <PerfCaption>PERFUME</PerfCaption>

            <PerfDescription>
                <h1>
                    Gabrielle Essence <br /> Eau De Parfum
                </h1>
                <p>
                    A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
                </p>
            </PerfDescription>

            <PerfPrice>
                <p>$149.99</p>
                <p><span>$169.99</span></p>
            </PerfPrice>
            
            <button>
                <PerfButton>
                    <img src={cart_icon} alt="Cart icon" />
                    <p>Add to Cart</p>
                </PerfButton>
            </button>
        </StyledProduct>
    )
}

export default Product