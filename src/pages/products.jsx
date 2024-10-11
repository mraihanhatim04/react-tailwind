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
import MyNavbar from "../components/Fragments/MyNavbar";
import InputSearch from "../components/Fragments/InputSearch";

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

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem(`cart_${email}`);
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [searchTerm, setSearchTerm] = useState(""); // State untuk kata kunci pencarian
  const [filteredProducts, setFilteredProducts] = useState(productsData); // State untuk produk yang difilter

  useEffect(() => {
    if (email) {
      localStorage.setItem(`cart_${email}`, JSON.stringify(cart));
    }
  }, [cart, email]);

  useEffect(() => {
    // Filter produk berdasarkan nama atau deskripsi
    const results = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]); // Filter produk setiap kali `searchTerm` berubah

  const handleAddToCart = (id, name, price) => {
    if (!id || !name || !price) {
      console.error("handleAddToCart: invalid product data", {
        id,
        name,
        price,
      });
      return;
    }

    setCart((prev) => {
      const newProduct = { name, price, qty: (prev[id]?.qty || 0) + 1 };
      return { ...prev, [id]: newProduct };
    });
  };

  return (
    <>
      <MyNavbar />
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex flex-wrap justify-center gap-4 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, image, name, description, price }) => (
            <Card key={id} className="max-w-[300px]">
              <CardHeader className="justify-center">
                {image ? <Image src={image} width={280} /> : null}
              </CardHeader>
              <Divider />
              <CardBody>
                <h1 className="font-bold tracking-wider text-xl mb-2">
                  {name || "Unknown product name"}
                </h1>
                <p className="font-serif">
                  {description || "Unknown product description"}
                </p>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-between">
                <p className="font-bold text-slate-700">
                  {price
                    ? `Rp ${price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}`
                    : "Unknown product price"}
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
          ))
        ) : (
          <p>No products found</p> // Tampilkan jika tidak ada produk yang sesuai
        )}
      </div>
    </>
  );
};

export default ProductsPage;
