import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    const target = cartItems.find(
        (item) => item.id === productToAdd.id
    );

    if (target) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
        return [...cartItems, { ...productToAdd, quantity: 1 }];
    };

export const CartDrawerContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
});

export const CartDrawerProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product));
        console.log(cartItems)
    const value = { isOpen, setIsOpen, cartItems, addItemToCart };

    return <CartDrawerContext.Provider value={value}>{children}</CartDrawerContext.Provider>
}

