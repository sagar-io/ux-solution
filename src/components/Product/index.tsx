import StartRating from "./StarRating"
import { useNavigate } from "react-router-dom"

interface productProps {
    imgUrl: string,
    name: string,
    price: number,
    rating: number,
    description: string
}

const ProductCard = ({ imgUrl, name, price, rating, description }: productProps) => {
    const navigate = useNavigate()
    const data = {
        imgUrl,
        name,
        price,
        rating,
        description
    }

    return (
        <div className="card" onClick={() => navigate('/description', {state: data})}>
            <div>
                <img src={imgUrl} />
            </div>
            <div className="card-data">
                <h3>{name}</h3>
                <div className="stats">
                    <div className="price"><span className="no-font">₹</span>{price * 80}</div>
                    <div className="rating"><StartRating rating={rating} /></div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard