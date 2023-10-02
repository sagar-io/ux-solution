interface quantityType {
  quantity: number,
  cartItems: any,
  handleCartItems: Function,
  id: number
}

const Quantity = ({ quantity, cartItems, handleCartItems, id }: quantityType) => {
  return (
    <div className="quantity">
      <div onClick={handleDecrementItem}>-</div>
      <div>{quantity}</div>
      <div onClick={handleIncrementItem}>+</div>
    </div>
  )

  function handleDecrementItem() {
    const newArr = [...cartItems]
    if (quantity == 1) {
      newArr.splice(id, 1)
    } else {
      newArr[id].quantity--;
    }
    handleCartItems(newArr);
  }
  function handleIncrementItem() {
    const newArr = [...cartItems]
    newArr[id].quantity++;
    handleCartItems(newArr);
  }
}

export default Quantity