import { ProductCardContainer, Footer } from "./product-card.styles";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button-component"
import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cartDrawer.context";


const ProductCard = ({product}) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart} = useContext(CartDrawerContext);
    const addProductToCart = () => addItemToCart(product)
    return(
    <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        <Footer>
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </Footer>
    </ProductCardContainer>
    )
}

export default ProductCard