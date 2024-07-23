import "./product-card.style.scss"
import Button from "../button/button-component"
import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cartDrawer.context";


const ProductCard = ({product}) => {
    const { name, price, imageUrl} = product;
    const { addItemToCart} = useContext(CartDrawerContext);
    const addProductToCart = () => addItemToCart(product)
//  cart items state is not updating? calling console.log with cartItems here shows blank array
    return(
    <div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <Button buttonType='inverted' onClick={addProductToCart}>Add to cart</Button>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
    </div>
    )
}

export default ProductCard