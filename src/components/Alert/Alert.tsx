import { BiError } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";

const Alert = (props: { type: string; message: string }) => {
  const { type, message } = props;
  return (
    <div className={`alert ${type}`}>
      {type === "error" && <BiError />}
      {type === "success" && <BsCheck2Circle />}
      <p>{message}</p>
    </div>
  );
};

export default Alert;
