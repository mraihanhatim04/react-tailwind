import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import MyNavbar from "../components/Fragments/MyNavbar";
import InputSearch from "../components/Fragments/InputSearch";
import { getProducts } from "../services/product.service";

const ProductsPage = () => {
  const userEmail = localStorage.getItem("email");

  const [userCart, setUserCart] = useState(() => {
    const savedCart = localStorage.getItem(`cart_${userEmail}`);
    return savedCart ? JSON.parse(savedCart) : {};
  });

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQty, setSelectedQty] = useState({});

  useEffect(() => {
    getProducts((data) => {
      setFilteredProducts(data);
    });
  }, []);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(userCart));
    }
  }, [userCart, userEmail]);

  useEffect(() => {
    const results = filteredProducts.filter(
      (product) =>
        (product.title &&
          product.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  const handleAddToCart = (productId) => {
    const quantity = selectedQty[productId] || 1; // Menggunakan qty yang dipilih atau default 1
    if (!productId || quantity <= 0) return;

    const product = filteredProducts.find((p) => p.id === productId);
    if (!product) return;

    setUserCart((prev) => {
      const newProduct = {
        ...product,
        qty: (prev[productId]?.qty || 0) + quantity,
      };
      return { ...prev, [productId]: newProduct };
    });

    // Reset nilai qty untuk produk yang baru ditambahkan
    setSelectedQty((prev) => ({ ...prev, [productId]: 1 }));
  };

  const handleQtyChange = (productId, value) => {
    setSelectedQty((prevQty) => ({
      ...prevQty,
      [productId]: Number(value), // Pastikan value adalah number
    }));
  };

  return (
    <>
      <MyNavbar />
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container mx-auto flex flex-wrap justify-center gap-4 p-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(({ id, image, title, description, price }) => (
            <Card key={id} className="max-w-[350px]">
              <CardHeader className="justify-center">
                {image ? (
                  <Image isZoomed src={image} height={200} width={380} />
                ) : null}
              </CardHeader>
              <Divider />
              <CardBody>
                <h1 className="font-bold tracking-wider text-xl mb-2">
                  {title}
                </h1>
                <p className="font-serif">{description}</p>
              </CardBody>
              <Divider />
              <CardFooter className="flex justify-between">
                <div>
                  <p className="font-bold text-slate-700">
                    {price
                      ? `${price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}`
                      : "Unknown product price"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    min="1"
                    value={selectedQty[id] || 1}
                    onChange={(e) => handleQtyChange(id, e.target.value)}
                    className="max-w-[80px]"
                    width="20px"
                  />
                  <Button
                    size="sm"
                    color="primary"
                    className="font-bold tracking-wider"
                    onClick={() => handleAddToCart(id)}
                  >
                    Add To Cart
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="font-bold text-red-600 text-xl">No products found</p>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
