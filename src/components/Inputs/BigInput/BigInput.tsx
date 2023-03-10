const BigInput = (props: {
  placeholder: string;
  autocomplete: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { placeholder, autocomplete, value, onChange } = props;
  return (
    <input
      className="input--big"
      placeholder={placeholder}
      autoComplete={autocomplete}
      value={value}
      onChange={onChange}
    />
  );
};

export default BigInput;
