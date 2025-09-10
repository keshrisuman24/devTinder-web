import React from "react";

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-center my-10">
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.firstName + " " + data.lastName}</h2>
          {data.age && data.gender && <p>{data.age + ", " + data.gender}</p>}
          <p>{data.about}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
