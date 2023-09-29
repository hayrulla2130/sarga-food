import React from "react";
import foods from "./data";

function Body() {
    return <section id="food_body">
        <div className="food_container">
            {foods.map(food => (
                <div className="food_box">
                    <div className="food_image"><img src={food.link} /></div>
                    <div className="food_date">{food.date}</div>
                    <div className="food_name">{food.name}</div>
                    <div className="food_title">{food.title}</div>
                    <div className="food_more"><a href="#">Read More</a></div>
                </div>
            ))}
        </div>
    </section>
}

export default Body;