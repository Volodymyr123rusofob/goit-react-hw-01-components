import './friendList.css';

const FriendList = ({ friends }) => {
  const Frends = friends.map(friend => (
    <li class="item">
      <span class="status">{}</span>
      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p class="name">{friend.username}</p>
    </li>
  ));
  return <ul class="friend-list"></ul>;
};

export default FriendList;
