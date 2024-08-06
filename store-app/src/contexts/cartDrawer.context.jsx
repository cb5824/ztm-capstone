import { createContext, useState, useEffect } from "react";

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

export const decrementItem = (cartItems, productToDecrement) => {
    const target = cartItems.find(
        (item) => item.id === productToDecrement.id
    );
    if (target.quantity !== 1) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToDecrement.id
            ? {...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
    return cartItems.filter(item => item.id !== productToDecrement.id);
    ;
}

export const clearCartItem = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id)
}

export const CartDrawerContext = createContext({
    isOpen: false,
    setIsOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    lowerItemQuantity: () => {},
    clearItemFromCart: () => {},
    cartQuantity: 0,
    cartTotal: 0
});

export const CartDrawerProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)


    useEffect(()=>{
        const newCartQuantity = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartQuantity(newCartQuantity);
    }, [cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + (cartItem.price * cartItem.quantity), 0);
        setCartTotal(newCartTotal);
    }, [cartItems])


    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const lowerItemQuantity = (item) => {
        setCartItems(decrementItem(cartItems, item))
    }

    const clearItemFromCart = (item) => {
        setCartItems(clearCartItem(cartItems, item))
    }

    const value = { isOpen, setIsOpen, cartItems, addItemToCart, cartQuantity, lowerItemQuantity, clearItemFromCart, cartTotal };

    return <CartDrawerContext.Provider value={value}>{children}</CartDrawerContext.Provider>
}

