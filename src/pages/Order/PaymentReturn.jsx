import React from "react";
import {useNavigate } from 'react-router-dom';

const PaymentReturn = () => {
  const query = new URLSearchParams(window.location.search);
  const navigate = useNavigate()
  const billData = {
    amount: (parseInt(query.get("vnp_Amount"), 10) / 100).toLocaleString("vi-VN") + " ₫",
    bankCode: query.get("vnp_BankCode"),
    bankTranNo: query.get("vnp_BankTranNo"),
    cardType: query.get("vnp_CardType"),
    orderInfo: decodeURIComponent(query.get("vnp_OrderInfo") || ""),
    payDate: formatDateVNPay(query.get("vnp_PayDate")),
    responseCode: query.get("vnp_ResponseCode"),
    transactionNo: query.get("vnp_TransactionNo"),
    transactionStatus: query.get("vnp_TransactionStatus"),
    txnRef: query.get("vnp_TxnRef"),
  };

  function formatDateVNPay(dateString) {
    if (!dateString) return "";
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    const hour = dateString.slice(8, 10);
    const minute = dateString.slice(10, 12);
    const second = dateString.slice(12, 14);
    return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Hóa đơn thanh toán VNPay</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr><td><b>Mã giao dịch</b></td><td>{billData.transactionNo}</td></tr>
          <tr><td><b>Mã đơn hàng</b></td><td>{billData.txnRef}</td></tr>
          <tr><td><b>Thông tin đơn hàng</b></td><td>{billData.orderInfo}</td></tr>
          <tr><td><b>Số tiền</b></td><td>{billData.amount}</td></tr>
          <tr><td><b>Ngân hàng</b></td><td>{billData.bankCode}</td></tr>
          <tr><td><b>Mã giao dịch ngân hàng</b></td><td>{billData.bankTranNo}</td></tr>
          <tr><td><b>Loại thẻ</b></td><td>{billData.cardType}</td></tr>
          <tr><td><b>Ngày thanh toán</b></td><td>{billData.payDate}</td></tr>
          <tr>
            <td><b>Trạng thái</b></td>
            <td style={{ color: billData.transactionStatus === "00" ? "green" : "red" }}>
              {billData.transactionStatus === "00" ? "Thanh toán thành công" : "Thất bại"}
            </td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() => navigate("/")}
          style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}
        >
          Về trang chủ
        </button>
        <button
          onClick={() => navigate(`/order/${billData.txnRef}`)}
          style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "4px" }}
        >
          Xem đơn hàng
        </button>
      </div>


    </div>
  );
};

export default PaymentReturn;
