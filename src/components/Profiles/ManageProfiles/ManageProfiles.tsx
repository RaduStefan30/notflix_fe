import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addProfile } from "../../../store/reducers/profileSlice";
import SmallInput from "../../Inputs/SmallInput/SmallInput";
import Profiles from "../Profiles";
import { profileImages } from "../../../utils/api";

const ManageProfiles = () => {
  const { manage } = useAppSelector((state) => state.profile);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useAppDispatch();

  const handleFinishAdding = () => {
    dispatch({
      type: "profile/setProfile",
      payload: { display: "true", manage: "general" },
    });
  };

  useEffect(() => {
    const getImages = async () => {
      const images = (await profileImages()) as any;
      setImage(images[Math.floor(Math.random() * images.length)]);
    };
    getImages();
  }, []);

  const onSuccess = () => {
    setMessage("Profile added successfully!");
  };

  const onError = (error: string) => {
    if (error.includes("required")) {
      return setMessage("Please enter a name for your profile");
    }
    setMessage(error);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    dispatch(addProfile(name, image, onSuccess, onError));
  };

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setMessage("");
      }, 3000);
    };
  }, [message]);

  if (manage === "add") {
    return (
      image.length && (
        <div className="add">
          <div className="add__container">
            <h1 className="add__title">Add Profile</h1>
            <p className="add__text">
              Add a profile for another person watching Notflix.
            </p>
            <div className="add__form__container">
              <form className="add__form" onSubmit={handleSubmit}>
                <div className="add__form__items">
                  <img src={image} alt="profile" className="profiles__avatar" />
                  <div
                    className={`add__message--before ${
                      message && "add__message"
                    }`}
                  >
                    {message}
                  </div>
                  <SmallInput type="text" id="name" placeholder="Name" />
                </div>
                <div className="add__form__buttons">
                  <button className=" btn btn--primary">Continue</button>
                  <button
                    className="btn btn--alternative"
                    onClick={handleFinishAdding}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    );
  }
  return <Profiles editMode={true} />;
};

export default ManageProfiles;
