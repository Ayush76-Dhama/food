/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
    console.log(detail);

    return (
        <div className="meals">
            {!detail ? "" : detail.map((curItem) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <div className="mealImg">
                        <img src={curItem.strMealThumb} />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/${curItem.idMeal}`}>
                            <button >Recipe</button>
                        </NavLink>
                    </div>
                )



            }

            )}

        </div>

    )

}

export default Mealcards