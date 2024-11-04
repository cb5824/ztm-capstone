import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearFromCart, increment, decrement }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${{ name }}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <div className="arrow" onClick={decrement}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={increment}>
                    &#10095;
                </div>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearFromCart}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem