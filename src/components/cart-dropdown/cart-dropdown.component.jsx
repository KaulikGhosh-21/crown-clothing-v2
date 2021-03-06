import { useCallback } from "react";

import "./cart-dropdown.styles.jsx";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart-new/cart-new.selector.js";

import { setIsCartOpen } from "../../store/cart-new/cart-new.action.js";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { 
    CartDropdownContainer, 
    CartItems, 
    EmptyMessage, 
    HideOverlayContainer 
} from "./cart-dropdown.styles.jsx";
import { selectItemsInCart } from "../../store/user/user.selector.js";

const CartDropdown = () => {

    const itemsInCart = useSelector(selectItemsInCart);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleCart = () => {
        dispatch(
            setIsCartOpen(!isCartOpen)
        );
    }

    const handleGoToCheckout = useCallback(() => {
        navigate('/checkout')
    }, [])
    

    return(
        <HideOverlayContainer showOverlay={isCartOpen}
            onClick={toggleCart}
        >
            <CartDropdownContainer showDropdown={isCartOpen}>
                <CartItems>
                    {
                        itemsInCart.length > 0 ? 
                        (itemsInCart.map(cartItem => 
                            <CartItem key={cartItem.id} cartItem={cartItem} />)
                        ) : 
                        (
                            <EmptyMessage>
                                No products in your cart
                            </EmptyMessage>
                        )
                    }
                </CartItems>

                <Button onClick={handleGoToCheckout}>Go to checkout</Button>
            </CartDropdownContainer>
        </HideOverlayContainer>
    )
};

export default CartDropdown;