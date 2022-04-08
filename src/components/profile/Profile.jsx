import PropTypes from "prop-types";

export default function Profile({ username, avatar, tag, location, stats }) {
    const { followers, views, likes, } = stats;
    return <div>
        <div>
            <img
                src={avatar}
                alt={username}
            />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>

        <ul>
            <li>
                <span>Followers</span>
                <span>{followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{likes}</span>
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