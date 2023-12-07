import Media from "../Media/Media";

const Zone = ({ title, media }: { title: string; media: object }) => {
  return (
    <div className="zone">
      <h2>{title}</h2>
      <Media media={media} />
    </div>
  );
};

export default Zone;
