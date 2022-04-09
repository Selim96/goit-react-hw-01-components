import TransactionItem from "../transactionItems/transactionItem";
import PropTypes from "prop-types";

export default function TransactionHistory({trns}) {
    return (
        <table class="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {trns.map((trn) =>
                (<tr key={trn.id}>
                    <TransactionItem item={trn} />
                </tr>)
                )}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    trns: PropTypes.arrayOf(PropTypes.object),
}