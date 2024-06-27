import "./cart-icon.style.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartDrawerContext } from "../../contexts/cartDrawer.context"

const CartIcon = () => {
    const {isOpen, setIsOpen} = useContext(CartDrawerContext);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    }

    return(
        <div className="cart-icon-container" onClick={toggleDrawer}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )

}

export default CartIcon