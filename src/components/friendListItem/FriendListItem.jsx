import PropTypes from "prop-types";

export default function FriendListItem({friend}) {
    const { avatar, name, isOnline, } = friend;
    return (<>
        {isOnline ? <span class="statusOnlaine">Online</span> : <span class="statusOflaine">Ofline</span>}
        <img class="avatar" src={avatar} alt={name} width="48" />
        <p class="name">{name}</p>
    </>);
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }),
    
}