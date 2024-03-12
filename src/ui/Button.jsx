import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Button({
  onClick,
  to,
  disable,
  type = "primary",
  children,
  btnType = "submit",
}) {
  const tailwind = {
    base: "inline-block rounded-full text-sm bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  ",
    get primary() {
      return twMerge(this.base, " px-4 py-3 md:py-4");
    },
    get small() {
      return twMerge(this.base, " py-2 px-4 md:px-5 md:py-2.5 text-xs");
    },
    get secondary() {
      return twMerge(
        this.base,
        "px-4 py-2.5 bg-transparent border-2 border-stone-400 text-stone-400 md:py-3.5 hover:bg-stone-200 hover:text-stone-600 hover:border-stone-600",
      );
    },
    get round() {
      return twMerge(this.base, "px-3.5 py-2 md:px-4 md:py-2.5");
    },
  };

  if (to) {
    return (
      <Link className={tailwind[type]} to={to}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={tailwind[type]}
      disabled={disable}
      onClick={onClick}
      type={btnType}
    >
      {children}
    </button>
  );
}

export default Button;
