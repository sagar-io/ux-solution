import { useContext, useEffect, useState } from 'react'
import FirebaseContext from "../../context/firebaseContext"
import CartItem from './CartItem'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import cartIcon from '../../assets/images/cart.svg'

const Cart = () => {
    type cartItemsType = {
        imgUrl: String,
        name: String,
        price: Number,
        quantity: Number
    }
    const [cartItems, setCartItems] = useState<Array<cartItemsType>>([])
    const navigate = useNavigate()
    let totalPrice = 0;
    const firebase: any = useContext(FirebaseContext)
    useEffect(() => {
        if (!firebase.auth.currentUser) {
            navigate('/signin')
        } else {
            const getCartItems = async () => {
                const snap = await firebase.readCartDataFromDB(firebase?.auth?.currentUser?.uid) || []
                const items: any = Object.values(snap)
                setCartItems(items)
            }
            getCartItems()
        }
    }, [])

    const cartElements = cartItems.map((item: any, id) => {
        totalPrice += Math.round(item.price * 80 * item.quantity)
        return <CartItem
            key={nanoid()}
            id={id}
            imgUrl={item.imgUrl}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            cartItems={cartItems}
            handleCartItems={setCartItems}
        />
    })

    return (
        <div className="cart-wrapper">
            <div className='heading'>
                <img src={cartIcon} />
                <h1>Your Cart of Knowledge</h1>
            </div>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <td className='t-heading'>Item</td>
                        <td className='t-heading'>Price</td>
                        <td className='t-heading'>Quantity</td>
                        <td className='t-heading'>Total</td>
                    </tr>
                </thead>
                <tbody>{cartElements}</tbody>
            </table>
            <div className='cart-total'>
                Total Payment - ₹{totalPrice}
                <a href='https://secure.2checkout.com/order/checkout.php?PRODS=1234567&BACK_REF=http%3A//www.YourCustomRedirectURL.com'>
                    <button>
                        Checkout and Pay
                    </button> </a>
            </div>
        </div>
    )
}

export default Cart