import TransactionItem from "../TransactionItems/transactionItem";
import PropTypes from "prop-types";
import s from './Transactions.module.css';

export default function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th className={s.head}>Type</th>
                    <th className={s.head}>Amount</th>
                    <th className={s.head}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((trn) =>
                (<tr key={trn.id} className={s.tableItem}>
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