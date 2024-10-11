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

const CartProducts = ({ cart, total, onRemoveFromCart }) => {
  // Buat string deskripsi produk untuk WhatsApp
  const cartDescription = Object.values(cart)
    .map(
      (item) =>
        `${item.qty}x ${item.name} - Rp${item.price.toLocaleString("id-ID")}`
    )
    .join(", ");

  // Fungsi untuk membuka WhatsApp dengan pesan otomatis
  const handleProceedToPayment = () => {
    const message = `Halo, saya ingin melakukan pembayaran untuk pesanan berikut: ${cartDescription}. Total: Rp${total.toLocaleString(
      "id-ID"
    )}.`;
    const phoneNumber = "6281293034489"; // Nomor WhatsApp tujuan (ganti dengan nomor yang sesuai)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Buka WhatsApp Web atau Aplikasi WhatsApp
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <Card className="max-w-[700px]">
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
              {Object.entries(cart).map(([id, item]) => (
                <TableRow key={id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.price.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </TableCell>
                  <TableCell>{item.qty}</TableCell>
                  <TableCell>
                    {(item.qty * item.price).toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => onRemoveFromCart(id)}
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
            {total.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
          <Button
            onClick={handleProceedToPayment}
            className="bg-blue-500 text-white font-semibold"
            disabled={total === 0} // Tombol dinonaktifkan jika total 0
          >
            {total === 0 ? "Your cart is empty" : "Check Out"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CartProducts;
