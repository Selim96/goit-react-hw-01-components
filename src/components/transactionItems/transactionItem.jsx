import PropTypes from "prop-types";

export default function TransactionItem({ item }) {
    const { type, amount, currency, } = item;
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    );
}

TransactionItem.propTypes = {
    item: PropTypes.shape({
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }),
    
}