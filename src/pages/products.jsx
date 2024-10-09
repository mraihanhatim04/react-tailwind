import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Button,
} from "@nextui-org/react";
import React from "react";

const products = [
  {
    id: 1,
    image: "/images/1.jpg",
    name: "Nike Air Force 1",
    description:
      "Ikonik dalam budaya streetwear, pertama kali dirilis pada 1982, terkenal karena desain klasik dan kenyamanan.",
    price: 120,
  },
  {
    id: 2,
    image: "/images/2.jpg",
    name: "Adidas Yeezy Boost 350",
    description:
      "Kolaborasi dengan Kanye West, sepatu ini menjadi simbol fashion dan kenyamanan, dengan teknologi Boost.",
    price: 220,
  },
  {
    id: 3,
    image: "/images/3.jpg",
    name: "Converse Chuck Taylor All-Star",
    description:
      "Sepatu kanvas klasik yang tak lekang oleh waktu, sering dikenakan oleh berbagai kalangan dan cocok untuk semua gaya.",
    price: 60,
  },
  {
    id: 4,
    image: "/images/4.jpg",
    name: "Nike Air Jordan 1",
    description:
      "Sepatu basket legendaris, dicintai oleh penggemar sneaker dan kolektor dengan banyak edisi dan kolaborasi.",
    price: 170,
  },
  {
    id: 5,
    image: "/images/5.jpg",
    name: "Vans Old Skool",
    description:
      "Sepatu skateboarding klasik dengan desain side stripe yang ikonik, populer di kalangan skateboarder dan anak muda.",
    price: 70,
  },
  {
    id: 6,
    image: "/images/6.jpg",
    name: "Balenciaga Triple S",
    description:
      "Sepatu chunky yang mewah dan stylish, sering tampil di runway dan tren mode high-fashion.",
    price: 950,
  },
  {
    id: 7,
    image: "/images/7.jpg",
    name: "New Balance 550",
    description:
      "Sepatu retro dengan desain yang dibangkitkan kembali, menjadi favorit di kalangan penggemar mode streetwear.",
    price: 110,
  },
  {
    id: 8,
    image: "/images/8.jpg",
    name: "Puma Suede Classic",
    description:
      "Sepatu kasual dengan desain bersih dan tekstur suede yang halus, cocok untuk gaya urban yang simpel.",
    price: 65,
  },
];

const ProductsPage = () => {
  return (
    <div className="container flex flex-wrap mx-auto justify-center gap-4 p-4">
      {products.map(({ id, image, name, description, price }) => (
        <Card key={id} className="max-w-[350px]">
          <CardHeader className="justify-center">
            <Image src={image} width={280} />
          </CardHeader>
          <Divider />
          <CardBody>
            <h1 className="font-bold tracking-wider text-xl mb-2">{name}</h1>
            <p className="font-serif">{description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex justify-between">
            <p className="font-bold text-slate-700">${price}</p>
            <Button
              size="sm"
              color="primary"
              className="font-bold tracking-wider"
            >
              Add To Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
