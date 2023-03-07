import Content from "../../components/Content/Content/Content";
import Profiles from "../../components/Profiles/Profiles";
import { useAppSelector } from "../../hooks";

const Browse = () => {
  const displayProfiles = useAppSelector((state) => state.profile.display);

  return (
    <div>
      {displayProfiles && <Profiles editMode={false} />}
      {!displayProfiles && <Content />}
    </div>
  );
};

export default Browse;
