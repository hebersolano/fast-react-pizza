# Fast React Pizza Project

React project from the [Ultimate React Course](https://github.com/jonasschmedtmann/ultimate-react-course) by Jonas Schmedtmann.

## Learning:

- React Router with `createBrowserRouter`:
  - routes structures: `js { path: "/", element: <Home />, errorElement: <Error />, children: [...] }`
  - use of "loader" function with `useLoaderData`.
  - `useNavigation` hook.
  - "actions" functions and `useActionData` hook to read what the function returns
- Tailwind CSS:
  - installation and configuration: "prettier" + "prettier-plugin-tailwindcss", tailwind fold extension
  - tailwind @layer components: reuse styles

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
