import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useSelector((state) => state.menu.menu);
  // const menu = useLoaderData();

  return (
    <>
      <h1>Menu</h1>
      <ul className="divide-y divide-stone-200 px-2">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export async function menuLoader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
