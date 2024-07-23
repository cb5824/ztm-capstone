import './cart-item.style.scss'

const CartItem = ({cartItem}) => {
    const {name, quantity} = cartItem;
    <div>
        <h2>{name}</h2>
        <span>{quantity}</span>
    </div>
}

export default CartItem