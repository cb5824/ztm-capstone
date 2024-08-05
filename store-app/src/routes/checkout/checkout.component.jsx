import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cartDrawer.context";
import "./checkout.style.scss"

const Checkout = () => {
    const {cartItems, addItemToCart, lowerItemQuantity} = useContext(CartDrawerContext)

    return (
        <div>
            {cartItems.map((item) => {
                const {id, name, quantity, price} = item;
                return (
                <div key={id}>
                    <h1>{name}</h1>
                    <span>{"<"}</span>
                    <span onClick={ () => lowerItemQuantity(item)}>{quantity}</span>
                    <span onClick={ () => addItemToCart(item)}>{">"}</span>
                    <span>{price}</span>
                </div>
                )
        })}
        </div>
        )
}

export default Checkout