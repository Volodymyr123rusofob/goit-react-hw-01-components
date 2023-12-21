import FriendListItem from '../FriendListItem/FriendListItem';
import './friendList.css';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendList;

// const FriendList = ({ friends }) => {
//   const frendsLi = friends.map(friend => (
//     <FriendListItem
//       avatar={friend.avatar}
//       name={friend.name}
//       isOnline={friend.isOnline}
//       key={friend.id}
//     />
//   ));

//   return <ul className="friend-list">{frendsLi}</ul>;
// };
