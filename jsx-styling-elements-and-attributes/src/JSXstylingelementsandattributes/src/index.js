import React from "react";
import ReactDOM from "react-dom";

const pic = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Games list{" "}
    </h1>
    <ul>
      <li>PubG</li>
      <li>Candy Crush</li>
      <li>Hill climbing</li>
    </ul>

    <img
      className="game-size"
      src="https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg"
      alt="immage here"
    ></img>
    <img
      className="game-size"
      src="https://store-images.s-microsoft.com/image/apps.27192.9007199266379485.c1ef97c5-cf2f-4dbd-840d-c4c975f1b009.4c147b04-721a-4ac1-b7e9-151ad255f3f3"
      alt="immage here"
    ></img>
    <img
      className="game-size"
      src="https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0"
      alt="immage here"
    ></img>
    {/* suppose you need to add some extra to url then u can do like this */}
    <img src={pic + "?grayscale"} alt="" />
  </div>,
  document.getElementById("root")
);
