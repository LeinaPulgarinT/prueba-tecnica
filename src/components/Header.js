import React from "react";
//esto:
/*const Header = (props) => {
  const { titulo } = props;*/

//es lo mismo que esto:

const Header = ({ titulo }) => {
  return (
    <nav className="header">
      <div className="bg-info">
        <h1 className="text-center py-3">{titulo}</h1>
      </div>
    </nav>
  );
};

export default Header;
