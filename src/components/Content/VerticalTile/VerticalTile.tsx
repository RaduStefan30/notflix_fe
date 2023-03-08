import { useState } from "react";
import { BsPlayCircle, BsPlusCircle, BsTv } from "react-icons/bs";

const VerticalTile = (props: { single: any; setSingle: any; item: any }) => {
  const { single, setSingle, item } = props;
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSingle((prev: boolean) => !prev);
    setSelected((prev: boolean) => !prev);
  };
  return (
    <div
      className={selected ? "general__item selected" : "general__item"}
      onClick={handleClick}
    >
      <h1
        className={
          selected ? "general__title fade-in" : "general__title fade-out"
        }
      >
        {item.name}
      </h1>
      <p
        className={
          !single ? "general__genre fade-in" : "general__genre fade-out"
        }
      >
        {item.genre}
      </p>
      <div
        className={
          selected ? "general__links fade-in" : "general__links fade-out"
        }
      >
        <a>
          Watch <BsPlayCircle />
        </a>
        <a>
          Add to my watch list <BsPlusCircle />
        </a>
        <a>
          Browse other {item.genre}{" "}
          {item.mediaType === "series" ? "series" : "movies"}
          <BsTv />
        </a>
      </div>

      <img src={item.image} alt="poster" />
    </div>
  );
};

export default VerticalTile;
