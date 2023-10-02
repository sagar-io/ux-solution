import { storeData } from '../../data/storeData.js'
import ProductCard from '../Product/index.js'
import { nanoid } from 'nanoid'

interface categoryResultProps {
    category: string,
    filters: {
        price: number,
        rating: number
    }
}

const CategoryResult = ({ category, filters }: categoryResultProps) => {
    // to match all the products
    if (category === "All") category = "";

    const products = storeData.filter(data => data.category.includes(category) && (data.price*80) < filters.price && data.rating.rate >= filters.rating).map(productData => {
        const { image, title, price, rating, description } = productData
        return <ProductCard
            key={nanoid()}
            imgUrl={image}
            name={title}
            price={price}
            rating={rating.rate}
            description={description}
        />
    })

    return (
        <div className='all-products'>
            {products}
        </div>
    )
}

export default CategoryResult