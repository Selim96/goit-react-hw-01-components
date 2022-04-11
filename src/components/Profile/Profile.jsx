import PropTypes from "prop-types";
import s from './profile.module.css';

export default function Profile({ username, avatar, tag, location, stats }) {
    const { followers, views, likes, } = stats;
    return <div className={s.profile}>
        <div className={s.description}>
            <img
                src={avatar}
                alt={username}
                className={s.avatar}
            />
            <p className={s.name}>{username}</p>
            <p className={s.tag}>{tag}</p>
            <p className={s.location}>{location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.item}>
                <span className={s.lable}>Followers</span>
                <span className={s.quantity}>{followers}</span>
            </li>
            <li className={s.item}>
                <span className={s.lable}>Views</span>
                <span className={s.quantity}>{views}</span>
            </li>
            <li className={s.item}>
                <span className={s.lable}>Likes</span>
                <span className={s.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
}

Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
}