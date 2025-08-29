const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle) => (
          <img
            key={bottle.id}
            src={bottle.img}
            alt={bottle.name}
            style={{ width: "80px", marginRight: "5px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
