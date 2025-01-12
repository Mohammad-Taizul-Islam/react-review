import { CiShoppingCart } from "react-icons/ci";
const Cart = () => {
  const items = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Camera",
    "Headphone",
    "SmartWatch",
  ];
  return (
    <div>
      <h1>
        Cart <CiShoppingCart />
      </h1>
    <ul>
        <h1>Products</h1>
        {items.map((item) => (
            <li key={Math.random}>{item}</li>
        ))}
    </ul>
    </div>
  );
};

export default Cart;
