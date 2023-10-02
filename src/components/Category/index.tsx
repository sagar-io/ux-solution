import { useState } from "react"
import { categories } from "../../data/storeData"
import CategoryResult from "./CategoryResult"
import Filters from "../Filters"
import { nanoid } from "nanoid"

const Categories = () => {
    const [currentCategory, setCurrentCategory] = useState('All')
    const [currentFilters, setCurrentFilters] = useState({
        price: 10000,
        rating: 1
    })

    const categoryElements = categories.map((name) => (
        <Category key={nanoid()} name={name} handleCategory={setCurrentCategory} />
    ))

    return (
        <div className="category-wrapper">
            <div className="category-bar">
                {categoryElements}
            </div>
            <div className="filter-bar">
                <Filters filter={currentFilters} handleFilters={setCurrentFilters} />
            </div>
            <div className="category-result">
                <CategoryResult category={currentCategory} filters={currentFilters}/>
            </div>
        </div>
    )
}

interface categoryProps {
    name: string,
    handleCategory: Function
}

const Category = ({ name, handleCategory }: categoryProps) => (
    <div className="category-name" onClick={() => handleCategory(name)}>
        <p>{name}</p>
    </div>
)

export default Categories