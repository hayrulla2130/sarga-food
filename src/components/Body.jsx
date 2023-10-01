import React from "react";
import foods from "./data";
import { Link } from "react-router-dom"

function Body({ isOpen }) {
    return <section id="food_body">
        <div className="food_container" style={{ display: isOpen ? 'none' : 'flex' }}>
            {foods.map((food, index) => (
                <div className="food_box" key={food.id}>
                    <Link to={`/food/${food.id}`}>
                        <div className="food_image"><img src={food.link} /></div>
                    </Link>
                    <div className="food_date">{food.date}</div>
                    <div className="food_name">{food.name}</div>
                    <div className="food_title">{food.title}</div>
                    <div className="food_more"><Link to={`/food/${food.id}`}>Read more</Link></div>
                </div>
            ))}
        </div>
    </section>
}

export default Body;