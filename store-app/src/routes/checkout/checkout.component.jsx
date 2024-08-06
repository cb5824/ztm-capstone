import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cartDrawer.context";
import "./checkout.style.scss"
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const { cartItems, addItemToCart, lowerItemQuantity, clearItemFromCart, cartTotal } = useContext(CartDrawerContext)

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => {
                return (
                    <CheckoutItem key={item.id} cartItem={item} clearFromCart={() => clearItemFromCart(item)} increment={() => addItemToCart(item)} decrement={() => lowerItemQuantity(item)}/>
                )
            })}
            <span className="total">Total: {cartTotal}</span>
        </div>
    )
}

export default Checkout