import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles"
import { useContext } from "react"
import { CartDrawerContext } from "../../contexts/cartDrawer.context"

const CartIcon = () => {
    const {isOpen, setIsOpen, cartQuantity} = useContext(CartDrawerContext);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    return(
        <CartIconContainer onClick={toggleDrawer}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartQuantity}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon