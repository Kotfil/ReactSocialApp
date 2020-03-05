import React from "react";
import s from "./Profileinfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1516641051054-9df6a1aad654?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></img>
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
