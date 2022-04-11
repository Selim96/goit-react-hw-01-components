import PropTypes from "prop-types";
import s from './Statistics.module.css';
import getRandomHexColor from '../../randomColor/RandomColor';

export default function Statistics({ title, stats }) {
    
    return (<section className={s.statistics}>
        {title && (
        <h2 className={s.title}>{title}</h2>
        )}
    <ul className={s.statList}>
            {stats.map(({ id, label, percentage, }) => {
            const color = getRandomHexColor();
            return <li key={id} style={{backgroundColor: `${color}`}} className={s.item}>
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
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

