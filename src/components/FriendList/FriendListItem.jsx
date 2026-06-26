import css from "./FriendList.module.css"

export default function FriendListItem({avatar, name, isOnline}){
    return(
        <li className={css.item}>
            <span className={`${css.status} ${isOnline ? css.online : css.offline}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}