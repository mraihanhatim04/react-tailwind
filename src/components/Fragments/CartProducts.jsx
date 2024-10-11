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
  const items = Object.entries(cart).map(([id, item]) => ({
    id,
    name: item?.name ?? "",
    price: item?.price ?? 0,
    qty: item?.qty ?? 0,
  }));
  const totalItems = items.length;
  const totalPayment = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

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
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>
                    {(item.price * item.qty).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => onRemoveFromCart(item.id)}
                      className="py-1 px-1 bg-white-500"
                    >
                      ❌
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
        <CardFooter className="flex justify-between px-6">
          <p className="font-semibold text-slate-700">Total Payment</p>
          <p className="font-bold underline">
            {totalPayment.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
          <Button
            onClick={() => {
              const message = `Halo, saya ingin melakukan pembayaran untuk pesanan berikut: ${items
                .map((item) => `${item.qty}x ${item.name}`)
                .join(", ")}. Total: Rp${totalPayment.toLocaleString(
                "id-ID"
              )}.`;
              const phoneNumber = "6281293034489";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;

              try {
                window.open(whatsappUrl, "_blank");
              } catch (error) {
                console.error("Gagal membuka WhatsApp", error);
              }
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
