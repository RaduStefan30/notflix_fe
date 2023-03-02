import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getProfiles } from "../../store/reducers/profileSlice";
import Profile from "./Profile/Profile";

const Profiles = (props: { editMode: boolean }) => {
  const [profiles, setProfiles] = useState([]);
  const { editMode } = props || false;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onClick = (name: string) => {
    dispatch({
      type: "profile/setProfile",
      payload: { name, display: false },
    });
  };

  const addProfile = () => {
    dispatch({
      type: "profile/setProfile",
      payload: { display: true, manage: "add" },
    });
    navigate("/manage-profiles");
  };

  const onSuccess = (profiles: any) => {
    setProfiles(profiles);
  };

  const onError = (message: string) => {
    console.log(message);
  };

  const profilesList = profiles.map((profile: any) => (
    <Profile
      key={profile.name}
      name={profile.name}
      image={profile.image}
      editMode={editMode}
      onClick={onClick}
    />
  ));

  if (profiles.length < 5) {
    profilesList.push(
      <div key="add" className="profiles__add" onClick={addProfile}></div>
    );
  }

  useEffect(() => {
    dispatch(getProfiles(onSuccess, onError));
  }, []);

  return (
    <div className="profiles">
      <div className="profiles__container">
        <h1 className="profiles__title">
          {editMode ? "Manage Profiles:" : "Who's watching?"}
        </h1>
        <div className="profiles__list">{profilesList}</div>
        {editMode ? (
          <a
            className="btn btn--primary profiles__manage"
            onClick={() => {
              navigate("/browse");
            }}
          >
            Done
          </a>
        ) : (
          <a
            className="btn btn--alternative profiles__manage"
            onClick={() => {
              navigate("/manage-profiles");
            }}
          >
            Manage Profiles
          </a>
        )}
      </div>
    </div>
  );
};

export default Profiles;
