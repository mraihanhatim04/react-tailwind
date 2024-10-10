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

const CartProducts = ({ cart, total }) => (
  <Card>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardBody>
    <CardFooter className="flex justify-between px-6">
      <p className="font-semibold text-slate-700">Total Payment</p>
      <p className="font-bold underline">
        {total.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </p>
      <Button className="bg-red-500 text-white font-semibold">Check Out</Button>
    </CardFooter>
  </Card>
);

export default CartProducts;
