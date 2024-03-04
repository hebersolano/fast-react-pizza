import { useDispatch } from "react-redux";

import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ id, children }) {
  const dispatch = useDispatch();

  function handleDelete() {
    if (!id) return;
    dispatch(deleteItem(id));
  }
  return (
    <Button type="small" onClick={handleDelete}>
      {children}
    </Button>
  );
}

export default DeleteItem;
