import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  /*const onClick = (e) => {
    console.log("click");
    //in button: onClick={onClick}
  }; */

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
