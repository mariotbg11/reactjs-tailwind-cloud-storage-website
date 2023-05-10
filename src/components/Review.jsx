import React from "react";

function Review(props) {
  return (
    <div className="w-full p-4 flex flex-col text-center rounded-md border">
      <img
        className="w-24 mx-auto rounded-full"
        src={`/images/${props.profileImg}`}
        alt=""
      />
      <div className="py-2">
        <h4 className="py-2 text-lg font-medium">{props.name}</h4>
        <p className="text-gray-500">"{props.review}"</p>
      </div>
    </div>
  );
}

export default Review;
