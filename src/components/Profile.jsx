import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
return (
    <div className={s.content}>
    <div>
    <img src="https://images.unsplash.com/photo-1516641051054-9df6a1aad654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
    </div>
    <div>
    ava + description
    </div>
    <div>
        My post 
        </div>
        <div>
            New post
        </div>
        <div className={s.post}>
            <div className={s.item}>
            Post 1
            </div> 
             <div className={s.item}>
                 Post 2
           
</div>
</div>
</div>
);
}   

export default Profile;