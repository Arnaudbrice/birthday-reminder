import React from "react";

const Person = props => {
  console.log(props);
  return (
    <div className="person">
      <img src={props.image} alt={props.id} />
      <h4>{props.name}</h4>
      <p>{props.age} years</p>
      <hr />
    </div>
  );
};

export default Person;
