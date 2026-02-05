interface ButtonProps {
  buttonStyle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  buttonStyle,
  children = <p>Button</p>,
  onClick,
}: ButtonProps) {
  return (
    <button onClick={onClick} className={`hover:cursor-pointer ${buttonStyle}`}>
      {children}
    </button>
  );
}
