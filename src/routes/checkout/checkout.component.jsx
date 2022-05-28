import "./checkout.styles.scss";

// import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
// import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {

    // const {cartItems} = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);

    
    const cartTotal = cartItems.reduce((acc, cartItem) =>  
        acc + cartItem.price * cartItem.quantity, 0);
    

    return(
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(checkoutItem => 
                    <CheckoutItem key={checkoutItem.id} checkoutItem= {checkoutItem} />)
            }

            <span className="total">{`Total: $${cartTotal}`}</span>


            <PaymentForm cartTotal={cartTotal}/>

        </div>
    )
};

export default Checkout;