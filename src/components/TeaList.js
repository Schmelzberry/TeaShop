import React from "react";
import Tea from "./Tea";

function TeaList() {
  return (
    <React.Fragment>
      < Tea
      name="Cheshire Chai"
      origin="Wonderland"
      price="$5.00/g"
      type="organic"
      />
      < Tea
      name="Simba Sejak"
      origin="Pride Rock"
      price="$7.00/g"
      type="non-organic"
      />
    </React.Fragment>
  );
}
export default TeaList;