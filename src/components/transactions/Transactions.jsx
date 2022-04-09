import TransactionItem from "../transactionItems/transactionItem";
import PropTypes from "prop-types";

export default function TransactionHistory({items}) {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((trn) =>
                (<tr key={trn.id}>
                    <TransactionItem item={trn} />
                </tr>)
                )}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
}