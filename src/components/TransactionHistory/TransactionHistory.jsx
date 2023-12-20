import './transactionHistory.css';

const TransactionHistory = ({ items }) => {
  const transactionHistory = items.map(item => (
    <tr className="transact-wrap" key={item.id}>
      <td className="transact-typ">{item.type}</td>
      <td className="transact-amon">{item.amount}</td>
      <td className="transact-curren">{item.currency}</td>
    </tr>
  ));
  return (
    <table className="transaction-history">
      <thead className="transact-thead">
        <tr className="transact-tr">
          <th className="transact-type">Type</th>
          <th className="transact-amount">Amount</th>
          <th className="transact-currency">Currency</th>
        </tr>
      </thead>

      <tbody className="transact">{transactionHistory}</tbody>
    </table>
  );
};

export default TransactionHistory;
