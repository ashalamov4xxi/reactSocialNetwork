import React from "react"
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {

    props.setUsers ([
        {
            id: 1,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/83/SouthPark-1613.jpg',
            followed: true,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {city: 'Tyumen', country: 'Russia'}
        },
        {
            id: 2,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/83/SouthPark-1613.jpg',
            followed: false,
            fullName: 'Hasim',
            status: 'You man',
            location: {city: 'Anapa', country: 'Russia'
            }
        },
        {
            id: 3,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/83/SouthPark-1613.jpg',
            followed: true,
            fullName: 'Yan',
            status: 'Эй ты',
            location: {city: 'Kaliningrad', country: 'Russia'}
        },
        {
            id: 4,
            photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/83/SouthPark-1613.jpg',
            followed: false,
            fullName: 'MArick',
            status: 'Юхуу',
            location: {city: 'Moscow', country: 'Russia'}
        }
    ])
    }

    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl}  className={styles.userPhoto} alt="userPhoto"/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={ () => { props.unfollow(u.id)}} >Unfollow</button>
                            : <button onClick={ () => { props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
        </div>

}

export default Users