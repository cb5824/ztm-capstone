import { createContext, useState } from "react";

export const CartDrawerContext = createContext({
    isOpen: false,
    setIsOpen: () => null,
});

export const CartDrawerProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = {isOpen, setIsOpen};
    return (
        <CartDrawerContext.Provider value={value}>{children}</CartDrawerContext.Provider>
    )
}

