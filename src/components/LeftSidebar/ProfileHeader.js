import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
      <img className="avatar" src={user.image} alt="profile-pic" />
        <div>
          
        </div>
       
        <div className="ml-2 d-flex flex-column">
          <p className="header-name mb-0">{user.name}</p>
          <p className="mb-0">
            {user.status === "online"
              ? user.status
              : `Last seen : ${user.status}`}
            {}
          </p>
        </div>
        <div className="col-lg-6 header-btn-section">
          <a href="/" class="btn btn-outline-secondary">
            <i class="fa fa-camera"></i>
          </a>
          <a href="/" class="btn btn-outline-primary">
            <i class="fa fa-image"></i>
          </a>
          <a href="/" class="btn btn-outline-info">
            <i class="fa fa-cogs"></i>
          </a>
          <a href="/" class="btn btn-outline-warning">
            <i class="fa fa-question"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
