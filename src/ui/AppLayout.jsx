import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      <Header />

      <main>{isLoading ? <Spinner /> : <Outlet />}</main>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
