import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import CartProducts from "../components/Fragments/CartProducts";

// Data produk
const productsData = [
  {
    id: 1,
    image: "/images/1.jpg",
    name: "Adidas Ultraboost",
    description: "Sepatu lari yang populer dengan teknologi Boost.",
    price: 2500000,
  },
  {
    id: 2,
    image: "/images/2.jpg",
    name: "Nike Air Force 1",
    description:
      "Sepatu basket yang ikonik dengan desain yang sangat populer di kalangan muda.",
    price: 1500000,
  },
  {
    id: 3,
    image: "/images/3.jpg",
    name: "Converse Chuck Taylor All Star",
    description:
      "Sepatu kanvas yang sangat populer di kalangan anak muda dan musisi.",
    price: 500000,
  },
  {
    id: 4,
    image: "/images/4.jpg",
    name: "Reebok Classic Leather",
    description:
      "Sepatu olahraga yang sangat populer di kalangan olahragawan dan fashionista.",
    price: 1200000,
  },
  {
    id: 5,
    image: "/images/5.jpg",
    name: "Vans Old Skool",
    description:
      "Sepatu skateboarding klasik dengan desain side stripe yang ikonik, populer di kalangan skateboarder dan anak muda.",
    price: 700000,
  },
  {
    id: 6,
    image: "/images/6.jpg",
    name: "Balenciaga Triple S",
    description:
      "Sepatu chunky yang mewah dan stylish, sering tampil di runway dan tren mode high-fashion.",
    price: 9500000,
  },
  {
    id: 7,
    image: "/images/7.jpg",
    name: "New Balance 550",
    description:
      "Sepatu retro dengan desain yang dibangkitkan kembali, menjadi favorit di kalangan penggemar mode streetwear.",
    price: 1100000,
  },
  {
    id: 8,
    image: "/images/8.jpg",
    name: "Puma Suede Classic",
    description:
      "Sepatu kasual dengan desain bersih dan tekstur suede yang halus, cocok untuk gaya urban yang simpel.",
    price: 6500000,
  },
];

const ProductsPage = () => {
  const email = localStorage.getItem("email");
  const handleLogOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // Load cart based on email from localStorage or start with an empty object
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(`cart_${email}`);
    return savedCart ? JSON.parse(savedCart) : {};
  });

  // Save cart to localStorage based on email whenever cart changes
  useEffect(() => {
    if (email) {
      localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
    }
  }, [cart, email]);

  const handleAddToCart = (id, name, price) => {
    setCart((prev) => ({
      ...prev,
      [id]: { name, price, qty: (prev[id]?.qty || 0) + 1 },
    }));
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[id]?.qty > 1) {
        updatedCart[id].qty -= 1; // Kurangi qty jika masih ada lebih dari 1
      } else {
        delete updatedCart[id]; // Hapus produk dari cart jika qty = 1
      }
      return updatedCart;
    });
  };

  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  return (
    <>
      <div className="flex mb-5 justify-end h-14 bg-white shadow-2xl items-center p-4">
        <div className="mr-32 flex gap-3">
          <h1 className="text-md font-medium text-slate-500 mt-1">
            Welcome, <span className="font-bold text-blue-700">{email}</span>
          </h1>
          <Button
            onClick={handleLogOut}
            size="sm"
            className="font-bold bg-red-500 text-white"
          >
            Log Out
          </Button>
        </div>
      </div>
      <div className="container mx-auto justify-around flex gap-4 p-4">
        <div className="w-1/2 flex flex-wrap gap-4">
          {productsData.map(({ id, image, name, description, price }) => (
            <Card key={id} className="max-w-[300px]">
              <CardHeader className="justify-center">
                <Image src={image} width={280} />
              </CardHeader>
              <Divider />
              <CardBody>
                <h1 className="font-bold tracking-wider text-xl mb-2">
                  {name}
                </h1>
                <p className="font-serif">{description}</p>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-between">
                <p className="font-bold text-slate-700">
                  Rp{" "}
                  {price.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
                <Button
                  size="sm"
                  color="primary"
                  className="font-bold tracking-wider"
                  onClick={() => handleAddToCart(id, name, price)}
                >
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="w-1/2">
          <CartProducts
            cart={cart}
            total={total}
            onRemoveFromCart={handleRemoveFromCart}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
