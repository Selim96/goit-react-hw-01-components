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
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li className="stats__item">
                <span className="lable">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li className="stats__item">
                <span className="lable">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li className="stats__item">
                <span className="lable">Likes</span>
                <span className="quantity">{likes}</span>
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