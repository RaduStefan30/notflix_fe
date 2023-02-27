const BigInput = (props: { type: string; placeholder: string }) => {
  const { type, placeholder } = props;
  return <input className="big-input" type={type} placeholder={placeholder} />;
};

export default BigInput;
