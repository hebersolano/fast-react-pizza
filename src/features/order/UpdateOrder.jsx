import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button>Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function UpdateOrderAction({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
