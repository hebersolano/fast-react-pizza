import { Link, useNavigate } from "react-router-dom";

function LinkButton({ to, type, children }) {
  const navigate = useNavigate();
  const tailwind = "text-sm text-blue-500 hover:text-blue-600 hover:underline ";

  if (type === "btn-back") {
    if (typeof to !== "number")
      throw new Error("LinkButton type='btn-back' requires a number");
    return (
      <button className={tailwind} type="button" onClick={() => navigate(to)}>
        {children}
      </button>
    );
  }

  return (
    <Link className={tailwind} to={to}>
      {children}
    </Link>
  );
}

export default LinkButton;
