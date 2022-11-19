import React from "react";
import { product } from "../../../Components/Products/Product";
import { getTransactionData } from "../../../Controller/Firebase";
import TransactionCard from "./TransactionCard";

const TransactionList = ({ uid }) => {
  console.log(uid);
  const transactionData = getTransactionData(uid);

  const data = transactionData.transactionRef.transactions.transactionProductId;

  let productFilter = product.map((data) => {
    return data.id.includes(data);
  });

  console.log(transactionData.transactions.productId);
  return (
    <div>
      {productFilter.map((card) => (
        <TransactionCard />
      ))}
    </div>
  );
};

export default TransactionList;
