import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addProfile } from "../../../store/reducers/profileSlice";
import SmallInput from "../../Inputs/SmallInput/SmallInput";
import Profiles from "../Profiles";

const ManageProfiles = () => {
  const { manage } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    dispatch({
      type: "profile/setProfile",
      payload: { display: "true", manage: "general" },
    });
  };

  const randomImage = `profile${Math.floor(Math.random() * 4 + 1)}.jpg`;

  const onSuccess = () => {
    console.log("success");
  };

  const onError = () => {
    console.log("error");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    dispatch(addProfile(name, randomImage, onSuccess, onError));
  };

  if (manage === "add") {
    return (
      <div className="add">
        <div className="add__container">
          <h1 className="add__title">Add Profile</h1>
          <p className="add__text">
            Add a profile for another person watching Notflix.
          </p>
          <div className="add__form__container">
            <form className="add__form" onSubmit={handleSubmit}>
              <div className="add__form__items">
                <img
                  src={randomImage}
                  alt="profile"
                  className="profiles__avatar"
                />
                <SmallInput type="text" id="name" placeholder="Name" />
              </div>
              <div className="add__form__buttons">
                <button className=" btn btn--primary">Continue</button>
                <button className="btn btn--alternative" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return <Profiles editMode={true} />;
};

export default ManageProfiles;
