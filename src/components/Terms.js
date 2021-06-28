import React from "react";

const Terms = () => {
  return (
    <div className="bg-white mt-5 border-transparent rounded-md p-3">
      <div className="grid grid-cols-2">
        <div>
          <p>User Agreement</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <p>Content Policy</p>
          <p>Moderator Guidelines</p>
        </div>
      </div>
      <p className="mt-5">@ 2021 Reddit, Inc, All Rights Reserved</p>
    </div>
  );
};

export default Terms;
