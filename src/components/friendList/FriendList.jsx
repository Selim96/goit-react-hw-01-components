import FriendListItem from "components/friendListItem/FriendListItem";
import PropTypes from "prop-types";
import s from './FriendList.module.css';

export default function FriendList({friends}) {
    return <ul className={s.friendList}>
        {friends.map((friend) => {
            return (
                <li key={friend.id} className={s.item}>
                    <FriendListItem friend={friend} />
                </li>  
                )
            })}
        </ul>;
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}