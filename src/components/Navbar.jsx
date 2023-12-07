
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-6">
          <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F1690453492%2Fdisplay_1500%2Fstock-vector-shopping-cart-vector-icon-flat-design-isolated-on-white-background-1690453492.jpg&tbnid=2likXKtcInP2KM&vet=12ahUKEwje2f2iz_qCAxWypukKHY1QDG4QMygBegQIARBw..i&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fshopping-cart-vector-icon-flat-design-1690453492&docid=BwP6RJo2njv4SM&w=1500&h=1600&q=cart&ved=2ahUKEwje2f2iz_qCAxWypukKHY1QDG4QMygBegQIARBwclassNameh-14" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-green-400 cursor-pointer duration-300 transition-all ease-in">
            Home
          </p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl " />
            {
              cart.length > 0 &&
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid justify-items-center animate-bounce text-white">{cart.length}</span>
            }
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;