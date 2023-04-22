import React from "react";
import Sky from "react-sky";

const Skyanimation = () => {
  return (
    <div>
      <Sky
        images={{
          /* FORMAT AS FOLLOWS */
          0: "/animationstuff/13.png" /* You can pass as many images as you want */,
          1: "/animationstuff/4.png" /* You can pass as many images as you want */,
          2: "/animationstuff/2.png" /* You can pass as many images as you want */,
          3: "/animationstuff/20.png" /* You can pass as many images as you want */,
          4: "/animationstuff/3.png" /* You can pass as many images as you want */,
          5: "/animationstuff/40.png" /* You can pass as many images as you want */,
        //2: myImage /* you can pass images in any form: link, imported via webpack... */,
          /* 3: your other image... */
          /* 4: your other image... */
          /* 5: your other image... */
          /* ... */
        }}
        how={
          40
        } /* Pass the number of images Sky will render chosing randomly */
        time={550} /* time of animation */
        size={"30px"} /* size of the rendered images */
        background={"palettedvioletred"} /* color of background */
      />
    </div>
  );
};

export default Skyanimation;
