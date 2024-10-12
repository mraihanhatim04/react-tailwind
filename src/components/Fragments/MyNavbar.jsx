import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";

const MyNavbar = () => {
  const email = localStorage.getItem("email");
  const handleLogOut = () => {
    if (email) {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      window.location.href = "/";
    }
  };
  return (
    <>
      <Navbar className="p-2">
        <NavbarBrand>
          <Link to="/home">
            <h1 className="font-bold text-2xl text-sky-500">Land Commerce</h1>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="font-semibold">
            <Link to="/products">Products</Link>
          </NavbarItem>
          <CartModal />
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex gap-2">
            {email && (
              <>
                <p className="mt-1">{email || ""}</p>
                <Button
                  onClick={handleLogOut}
                  color="danger"
                  size="sm"
                  className="font-semibold"
                >
                  Log Out
                </Button>
              </>
            )}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default MyNavbar;
