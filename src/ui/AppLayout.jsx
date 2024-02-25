import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router";
import Spinner from "./Spinner";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl ">
          {isLoading ? <Spinner /> : <Outlet />}
        </main>
      </div>

      <CartOverView />
    </div>
  );
}

export default AppLayout;
