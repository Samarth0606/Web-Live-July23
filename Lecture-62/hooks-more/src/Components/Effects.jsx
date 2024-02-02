import React, { useState } from "react";

// https://api.tvmaze.com/search/shows?q=girls

function Effects() {
  let [d, setD] = useState("");

  //   fetch("https://api.tvmaze.com/search/shows?q=girls").then(async function (
  //     res
  //   ) {
  //     let data = await res.json();
  //     console.log("api fetched");
  //     setD(data);
  //   });

  return <div>api call kr rha hu - {JSON.stringify(d)} </div>;
}

export default Effects;
