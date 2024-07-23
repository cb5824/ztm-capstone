import Button from "../button/button-component"
import "./cart-dropdown.style.scss"
import CartItem from "../cart-item/cart-item.component"
import { useContext } from "react"
import { CartDrawerContext } from "../../contexts/cartDrawer.context"


const CartDropdown = () =>{
    const {cartItems} = useContext(CartDrawerContext);

    return(
    <div className="cart-dropdown-container">
        <div className="cart-items">
            {cartItems.map((item) =>(
                <CartItem key={item.id} cartItem={item} />
            ))}
        </div>
        <Button>Checkout</Button>
    </div>
    )
}

export default CartDropdown