import PropTypes from "prop-types";
import s from './FriendListItem.module.css';

export default function FriendListItem({friend}) {
    const { avatar, name, isOnline, } = friend;
    return (<>
        <span className={s.status} style={{ backgroundColor: isOnline? "green" : "red" }}></span>
        <img className={s.avatar} src={avatar} alt={name} width="48" />
        <p className={s.name}>{name}</p>
    </>);
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }),
    
}