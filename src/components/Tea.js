import React from "react";

function Tea(){
  const tea1 = 'oolong'
  return (
    <React.Fragment>
      <h3>{tea1} Details:</h3>
      <p>Country of Origin: Brazil</p>
      <p>Price: $5</p>
      <p>Type: Organic</p>
    </React.Fragment>
  )
}

export default Tea;