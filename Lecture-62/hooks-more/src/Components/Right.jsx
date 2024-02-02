import React, { useEffect, useState } from "react";
import axios from "axios";

function Right() {
  let [d, setD] = useState("");
  useEffect(function () {
    axios
      .get("https://api.tvmaze.com/search/shows?q=girls")
      .then(function (res) {
        console.log(res);
        setD(res);
      });
  }, []);

  console.log("render");
  return <div>Right - {} </div>;
}

export default Right;
