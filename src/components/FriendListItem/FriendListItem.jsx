import './friendListItem.css';

const FriendListItem = ({ avatar, name, isOnline, }) => {
  return (
    <li className="item-frend">
      {isOnline ? (
        <span className="status"></span>
      ) : (
        <span className="status onLine"></span>
      )}
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
