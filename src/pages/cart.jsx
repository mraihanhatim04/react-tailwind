import { useState } from "react";
import CartProducts from "../components/Fragments/CartProducts";
import MyNavbar from "../components/Fragments/MyNavbar";

const CartPage = () => {
  const email = localStorage.getItem("email");

  if (!email) {
    return <p>You are not logged in. Please log in first.</p>;
  }

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(`cart_${email}`);
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = { ...prev };

      // Cek apakah produk ada di cart
      if (updatedCart[id]) {
        // Kurangi kuantitas produk
        if (updatedCart[id].qty > 1) {
          updatedCart[id].qty -= 1;
        } else {
          // Jika kuantitas 1, hapus produk dari cart
          delete updatedCart[id];
        }

        // Simpan perubahan ke localStorage
        localStorage.setItem(`cart_${email}`, JSON.stringify(updatedCart));
      }
      return updatedCart;
    });
  };

  const total = Object.values(cart || {}).reduce(
    (acc, item) => acc + (item?.qty || 0) * (item?.price || 0),
    0
  );
  return (
    <>
      <div className="p-10">
        <CartProducts
          cart={cart || {}}
          total={total}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </>
  );
};

export default CartPage;
