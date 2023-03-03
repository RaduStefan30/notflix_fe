import { Fragment, useState } from "react";
import { BsPencil } from "react-icons/bs";

const Profile = (props: {
  name: string;
  image: string;
  onClick: any;
  editMode: boolean;
}) => {
  const { name, image, onClick } = props;
  const { editMode } = props || false;
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setEdit((prev) => !prev);
  };

  return (
    <Fragment>
      {edit && (
        <div className="edit__wrapper">
          <div className="edit__container">
            <div className="edit__form__container">
              <h1 className="edit__title">Edit Profile</h1>
              <form className="edit__form" onSubmit={handleSubmit}>
                <div className="edit__form__items">
                  <img
                    src={`profile${Math.floor(Math.random() * 4 + 1)}.jpg`}
                    alt="profile"
                    className="profiles__avatar"
                  />
                  <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    className="edit__input"
                  />
                </div>
                <div className="edit__form__buttons">
                  <button className=" btn btn--primary">Save</button>
                  <button
                    className="btn btn--alternative"
                    onClick={() => setEdit((prev) => !prev)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div
        className="profiles__item"
        onClick={() => {
          !editMode && onClick(name);
        }}
      >
        {editMode && (
          <div
            className="profiles__edit"
            onClick={() => setEdit((prev) => !prev)}
          >
            <BsPencil />
          </div>
        )}
        <img src={image} className="profiles__avatar" />
        <p className="profiles__name">{name}</p>
      </div>
    </Fragment>
  );
};

export default Profile;
