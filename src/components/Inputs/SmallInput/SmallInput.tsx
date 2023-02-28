const SmallInput = (props: {
  placeholder: string;
  id: string;
  type: string;
}) => {
  const { placeholder, id, type } = props;
  return (
    <input
      className="input--small"
      placeholder={placeholder}
      type={type}
      id={id}
    />
  );
};

export default SmallInput;
