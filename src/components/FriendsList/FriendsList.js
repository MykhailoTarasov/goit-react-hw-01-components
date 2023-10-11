import css from './Friends.module.css';

import { FriendsItem } from "../FriendListItem/FriendListItem"

export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
      {friends.map((friend) => 
        <FriendsItem 
        key={friend.id}
        avatar={friend.avatar} 
        name={friend.name} 
        isOnline={friend.isOnline}
        id={friend.id} />
      )}
      
    </ul>
}