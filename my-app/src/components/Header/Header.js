import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1 className="header-text">{props.headerText}</h1>
    </div>
  );
}

export default Header;
