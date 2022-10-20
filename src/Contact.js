import React from "react";

const Table = ({ data }) => {
  data.map((el) => {
    if (el.gender) {
      if (el.gender.toLowerCase() == "male") {
        el.gender = "♂";
      }
      if (el.gender.toLowerCase() == "female") {
        el.gender = "♀";
      }
    }
  });
  return (
    <ul>
      <div className="contact-section">
        {data.map((el, i) => (
          <li key={i}>
            <p className="name">
              {el.firstName} {el.lastName}
            </p>
            <p className="info">
              {el.gender} {el.phone}
            </p>
            <hr></hr>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Table;
