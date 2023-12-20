import FriendListItem from './FriendListItem';
import './friendList.css';

const FriendList = ({ friends }) => {
  const frendsLi = friends.map(friend => (
    <FriendListItem
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
      key={friend.id}
    />
  ));
  return <ul className="friend-list">{frendsLi}</ul>;
};

export default FriendList;
