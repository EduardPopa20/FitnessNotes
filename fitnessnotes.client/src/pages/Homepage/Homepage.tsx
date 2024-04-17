import Navbar from "../../components/Navbar/Navbar";
import FoodCard from "../../components/FoodCard/FoodCard";

import FoodInfo from "../../utils/interfaces/FoodInfo";
import { AuthSessionContext } from "../../layouts/AuthLayout";
import { useContext } from "react";

const foods: FoodInfo[] = [
    {
        name: "Food 1",
        calories: 100,
        proteins: 10,
        carbohydrates: 20,
        dietaryFiber: 5,
        sugars: 10,
        fats: 8,
        saturatedFats: 3,
        cholesterol: 15,
        B1: 0.2,
        B2: 0.3,
        B3: 5,
        iron: 2,
        potassium: 150,
        zinc: 1,
    },
    {
        name: "Food 2",
        calories: 150,
        proteins: 12,
        carbohydrates: 25,
        dietaryFiber: 3,
        sugars: 8,
        fats: 7,
        saturatedFats: 2,
        cholesterol: 10,
        B1: 0.1,
        B2: 0.4,
        B3: 4,
        iron: 3,
        potassium: 200,
        zinc: 1.5,
    },
    {
        name: "Food 3",
        calories: 120,
        proteins: 8,
        carbohydrates: 18,
        dietaryFiber: 4,
        sugars: 12,
        fats: 6,
        saturatedFats: 2.5,
        cholesterol: 12,
        B1: 0.3,
        B2: 0.2,
        B3: 6,
        iron: 2.5,
        potassium: 170,
        zinc: 1.2,
    },
    {
        name: "Food 4",
        calories: 180,
        proteins: 15,
        carbohydrates: 30,
        dietaryFiber: 6,
        sugars: 15,
        fats: 10,
        saturatedFats: 4,
        cholesterol: 20,
        B1: 0.2,
        B2: 0.5,
        B3: 7,
        iron: 4,
        potassium: 220,
        zinc: 2,
    },
    {
        name: "Food 5",
        calories: 90,
        proteins: 6,
        carbohydrates: 15,
        dietaryFiber: 2,
        sugars: 6,
        fats: 5,
        saturatedFats: 1.5,
        cholesterol: 8,
        B1: 0.4,
        B2: 0.1,
        B3: 3,
        iron: 1.5,
        potassium: 120,
        zinc: 0.8,
    },
];

const Homepage = () => {
    const ceva = useContext(AuthSessionContext);
    return (
        <>
        </>
    );
}

export default Homepage;