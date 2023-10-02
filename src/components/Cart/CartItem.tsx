import Quantity from "./Quantity"

interface cartItemType {
  imgUrl: 'string',
  name: 'string',
  price: number,
  quantity: number,
  cartItems: object,
  handleCartItems: Function,
  id: number
}

const CartItem = ({id, imgUrl, name, price, quantity, cartItems, handleCartItems }: cartItemType) => {
  return (
    <tr className="cart-item">
      <td className="img-title">
        <img src={imgUrl} />
        <p>{name}</p>
      </td>
      <td>
      ₹{price*80}
      </td>
      <td>
        <Quantity quantity={quantity} id={id} cartItems={cartItems} handleCartItems={handleCartItems} />
      </td>
      <td>
        <div className="total-price">₹{Math.round(price*80*quantity)}</div>
      </td>
    </tr>
  )
}

export default CartItem