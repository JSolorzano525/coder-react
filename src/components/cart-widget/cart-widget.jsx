import cartImage from "../../media/images/cart.svg";
import "./cart-widget.scss";

const CartWidget = ({ itemCount }) => {
  return (
    <div className="h-full ml-auto">
      <button className="relative h-full p-3">
        <img
          className="h-full"
          alt="cart"
          src={cartImage}
          item-count={itemCount}
        />
        <span className="cart-badge">{itemCount}</span>
      </button>
    </div>
  );
};

export default CartWidget;
