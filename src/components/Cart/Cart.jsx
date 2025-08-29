import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle) => (
          <div className="cart-container">
            <img
              key={bottle.id}
              src={bottle.img}
              alt={bottle.name}
              style={{ width: "80px", marginRight: "5px" }}
            />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
};
export default Cart;
