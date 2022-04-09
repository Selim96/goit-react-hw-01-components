import PropTypes from "prop-types";
// import { flushSync } from "react-dom";

export default function Statistics({title, stats}) {
    return (<section>
        {title && (
        <h2 className="title">{title}</h2>
        )}
    <ul className="stat-list">
        {stats.map(({ id, label, percentage, }) => {
            return <li key={id} className="item">
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
            </li>
        }
        )}
    </ul>
    </section>);
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
}
