import React from "react";
import "./App.css";

function Reviews() {
    const users = [
      {
        id: 1,
        photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Mama Setiawan",
        review: "Harganya murah tapi kualitas bukan kaleng-kaleng nih",
      },
      {
        id: 2,
        photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Mama dina",
        review: "Harganya murah Banget...",
      },
      {
        id: 3,
        photo: "https://images.pexels.com/photos/2120114/pexels-photo-2120114.jpeg?auto=compress&cs=tinysrgb&w=400",
        name: "Mama adis",
        review: "Harganya murah Banget...",
      },
    ];
  
    const listReviews = users.map((itemReview) => 
      <div className="item">
        <img
          src={itemReview.photo}
          alt=""
        />
        <div className="user">
          <h3>{itemReview.name}</h3>
          <p>{itemReview.review}</p>
        </div>
      </div>
    );
  
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReviews}
      </div>
    );
  };
  

  
  export default Reviews;