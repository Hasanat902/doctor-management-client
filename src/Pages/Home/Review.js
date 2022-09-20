import React from "react";

const Review = ({ review }) => {
  const { name, comment, city, img } = review;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{comment}</p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-3">
              <img src={img} alt="" />
            </div>
          </div>
          <div>
            <h2>{name}</h2>
            <h3>{city}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
