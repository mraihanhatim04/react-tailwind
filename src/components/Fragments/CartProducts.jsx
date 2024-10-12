import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import React from "react";

const CartProducts = ({ cart = {}, total = 0, onRemoveFromCart }) => {
  const cartItems = Object.entries(cart).map(([id, item]) => ({
    id,
    title: item?.title ?? "",
    price: item?.price ?? 0,
    qty: item?.qty ?? 0,
  }));

  const totalItems = cartItems.length;
  const totalPayment = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleRemoveItem = (itemId) => {
    if (onRemoveFromCart) {
      onRemoveFromCart(itemId); // Pastikan hanya dipanggil sekali
    }
  };

  return (
    <>
      <Card className="max-w-full">
        <CardHeader className="justify-center bg-blue-500 text-white tracking-wider">
          <h1 className="text-xl font-bold text-center">My Cart Orders</h1>
        </CardHeader>
        <CardBody>
          <Table aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>Product Name</TableColumn>
              <TableColumn>Price</TableColumn>
              <TableColumn>Qty</TableColumn>
              <TableColumn>Total</TableColumn>
              <TableColumn>Action</TableColumn>
            </TableHeader>
            <TableBody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>
                    {(item.price * item.qty).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => handleRemoveItem(item.id)}
                      className="p-2 font-bold bg-red-500 text-white rounded-full"
                    >
                      X
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter className="flex justify-between px-6">
          <p className="font-semibold text-slate-700">Total Payment</p>
          <p className="font-bold underline">
            {totalPayment.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <Button
            onClick={() => {
              const message = `Halo, saya ingin melakukan pembayaran untuk pesanan berikut: ${cartItems
                .map((item) => `${item.qty}x ${item.title}`)
                .join(", ")}. Total: $${totalPayment.toLocaleString("en-US")}.`;
              const phoneNumber = "6281293034489";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;

              window.open(whatsappUrl, "_blank");
            }}
            className="bg-blue-500 text-white font-semibold"
            disabled={totalItems === 0} // Tombol dinonaktifkan jika tidak ada item di cart
          >
            {totalItems === 0 ? "Your cart is empty" : "Check Out"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CartProducts;
