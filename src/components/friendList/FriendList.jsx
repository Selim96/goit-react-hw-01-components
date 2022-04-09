import FriendListItem from "components/friendListItem/FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({friends}) {
    return <ul class="friend-list">
        {friends.map((friend) => {
            return (
                <li key={friend.id} class="item">
                    <FriendListItem friend={friend} />
                </li>  
                )
            })}
        </ul>;
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
}