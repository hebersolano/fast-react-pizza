import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item, ingredients }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <DeleteItem id={pizzaId}>Delete</DeleteItem>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} />
      </div>
    </li>
  );
}

export default CartItem;
