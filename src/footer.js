import React from "react";
import FooterComponent from "rc-footer";
import "rc-footer/assets/index.css";

function footer() {
  return (
    <div>
      <FooterComponent
        columns={[
          {
            icon: (
              <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            ),
            title: "Amazon Clone By JoushwaS",
            url: "#",
            description:
              "This is not actual Amazon website this is just a clone ",
            openExternal: true,
          },
        ]}
        bottom="Copyright   ©  2021 All rights reserved "
      />
    </div>
  );
}
export default footer;
