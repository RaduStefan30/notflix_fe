import { useNavigate } from "react-router-dom";
import Profiles from "../../components/Profiles/Profiles";
import { useAppDispatch, useAppSelector } from "../../hooks";

const Browse = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const displayProfiles = useAppSelector((state) => state.profile.display);

  const logout = () => {
    try {
      dispatch({
        type: "auth/logout",
        payload: { email: "", token: "" },
      });
      dispatch({
        type: "profile/setProfile",
        payload: { name: "", display: true },
      });
    } catch (e) {
      console.log(e);
    } finally {
      navigate("/");
    }
  };
  return (
    <div>
      {displayProfiles && <Profiles />}
      {!displayProfiles && <button onClick={logout}>Log out fake</button>}
    </div>
  );
};

export default Browse;
