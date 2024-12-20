export default function Header(props) {
  const { children } = props;

  return (
    <div className="border-b-2 h-24 flex items-center px-8">{children}</div>
  );
}
