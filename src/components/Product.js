import image_mobile from "../images/image_product_mobile.jpg"
import image2_mobile from "../images/image_product_desktop.jpg"
import cart_icon from "../images/icon_cart.svg"

import {StyledProduct} from './styles/Product.styled'
import {Image, Image2, PerfCaption} from "./styles/Image.styled"
import { Description, Title1, Title2 } from "./styles/Description.styled"
import {PerfPrice} from '../components/styles/Price.styled'
import {Button} from '../components/styles/Button.styled'


function Product () {
    return ( 

        // General Settings

        <StyledProduct>

            {/* Image Setup */}

            <Image src={image_mobile} alt="Chanel Perfume bottle"/>

            <Image2 src={image2_mobile} alt="Chanel Perfume bottle"/>

            {/* Image Caption Setup */}

            <section>
                <PerfCaption>
                    PERFUME
                </PerfCaption>
                {/* Item DEscription */}
                <Description>
                    <Title1>
                        Gabrielle Essence <br /> Eau De Parfum
                    </Title1>
                    <Title2>
                        Gabrielle <br /> Essence Eau <br />
                        De Parfum
                    </Title2>
                    <p>
                        A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.
                    </p>
                </Description>
                {/* Perfume price setup */}
                <PerfPrice>
                    <p>$149.99</p>
                    <p><span>$169.99</span></p>
                </PerfPrice>
                {/* Add Cart Button Setup */}
                <div>
                    <Button>
                        <img src={cart_icon} alt="Cart icon" />
                        <p>Add to Cart</p>
                    </Button>
                </div>
            </section>
                  
        </StyledProduct>
    )
}

export default Product