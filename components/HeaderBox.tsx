import React from "react";

const HeaderBox = ({
  type = "title",
  title,
  description,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <div className="inline-flex">
        <h1 className="header-box-title ">{title},</h1>
        {type === "greeting" && (
          <h1 className="header-box-title-user"> &nbsp;{user}!</h1>
        )}
      </div>
      <p className="header-box-subtext">{description}</p>
    </div>
  );
};

export default HeaderBox;
