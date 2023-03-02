import React from "react";

const Profile = (props: { name: string; image: string; onClick: any }) => {
  const { name, image, onClick } = props;

  return (
    <div className="profiles__item" onClick={() => onClick(name)}>
      <img src={image} className="profiles__avatar" />
      <p className="profiles__name">{name}</p>
    </div>
  );
};

export default Profile;
