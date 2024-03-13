# Fast React Pizza Project

React project from the [Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course) by Jonas Schmedtmann.

## Learning:

- React Router with `createBrowserRouter`:
  - routes structures: `js { path: "/", element: <Home />, errorElement: <Error />, children: [...] }`
  - use of "loader" function with `useLoaderData`.
  - `useNavigation` hook.
  - BrowserRouter "actions" functions to make async operations and perform data mutations. Use with `useActionData`hook to read what the action function returns
  - Each route can define a "loader" function to provide data to the route element before it renders. Use with `useLoaderData` to read what the loader function returns
  - useFetcher Hook: use "loaders" and "actions" without changing the URL. Do the same with `<fetcher.Form>` component
- Tailwind CSS:
  - installation and configuration: "prettier" + "prettier-plugin-tailwindcss", tailwind fold extension
  - tailwind @layer components: reuse styles
  - `twMerge`to overwrite tailwind classes and `clsx` to to conditionally apply a tailwind class
- Redux:
  - Create state slices with its reducers and configure redux store
  - `useDispatch` to dispatch redux actions
  - `useSelector` to get any state data with selector functions
  - Async Thunk and extra reducers in the creation of state slices

## Planning:

### Requirements and features:

- users can order **one or more pizzas from the menu**.
- **no logins and accounts**, users just input their name before using the app.
- the menu can change so it is **fetch from a API**.
- users can add multiple pizzas to a **cart** before ordering.
- ordering requires only **user's name, phone and address**.
- GPS location option.
- users **can mark their order as "priority"** for an additional 20% of the cart price
- orders are made by **sending a POST request** with user data and selected pizzas
- payments are made on delivery, so **no payment processing** is require
- orders have a unique ID, **users can later look up their** order based on the ID
- users can mark their order as "priority" after been placed

### Features Categories and state management:

1. Users -> global UI state
2. Menu -> Global remote state
3. Cart -> global UI state
4. Order -> Global remote state

Technology decisions:

---

- Routing: React Router
- Styling: tailwind css
- Remote state management: React Rounter v6.4+ -> render-as-you-fetch, not really a state management, doesn't persist state.
- UI state management: Redux.

### Pages:

- Homepage: `/`
- Pizza menu: `/menu`
- Cart: `/cart`
- Placing a new order: `/order/new`
- Looking up an order: `/order/:orderId`
