import { useContext } from "react";
import { CartDrawerContext } from "../../contexts/cartDrawer.context";
import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
    const { cartItems, addItemToCart, lowerItemQuantity, clearItemFromCart, cartTotal } = useContext(CartDrawerContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((item) => {
                return (
                    <CheckoutItem key={item.id} cartItem={item} clearFromCart={() => clearItemFromCart(item)} increment={() => addItemToCart(item)} decrement={() => lowerItemQuantity(item)}/>
                )
            })}
            <Total>Total: {cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout