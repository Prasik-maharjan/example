import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-black p-4 text-white flex justify-center gap-5 sticky top-0 z-10">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/return">Return Policy</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}