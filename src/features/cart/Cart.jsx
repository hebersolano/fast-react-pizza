import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);
  const menu = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">Your cart, {username}</h2>

      <ul className="mb-3 mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem
            key={item.pizzaId}
            item={item}
            ingredients={
              menu.find((pizza) => pizza.id === item.pizzaId)?.ingredients || []
            }
          />
        ))}
      </ul>

      <div className="bt-6 space-x-2">
        <Button to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
