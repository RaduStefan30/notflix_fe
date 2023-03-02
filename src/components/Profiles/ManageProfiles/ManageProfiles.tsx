import { useAppSelector } from "../../../hooks";

const ManageProfiles = () => {
  const { manage } = useAppSelector((state) => state.profile);
  if (manage === "add") {
    return <div className="add__container">Add</div>;
  }
  return <div>General</div>;
};

export default ManageProfiles;
