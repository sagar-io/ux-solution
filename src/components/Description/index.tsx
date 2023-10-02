import { useLocation, useNavigate } from "react-router-dom"
import { HistoricalContext } from "./HistoricalContext";
import StartRating from "../Product/StarRating";
import FirebaseContext from "../../context/firebaseContext"
import { useContext } from "react";

const Description = () => {
    const firebase: any = useContext(FirebaseContext)
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state;
    const { imgUrl, name, price, rating, description } = data;

    return (
        <div className="description-container">
            <div className="properties">
                <div className="img">
                    <img src={imgUrl} />
                    <div className="price">Payable Amount: <span className="bold">₹{price}</span></div>
                </div>
                <div className="text-wrapper">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <button onClick={handleCartDataUpload}>Add To Cart</button>
                </div>

                <div className="rating"><StartRating rating={rating} /></div>
            </div>

            <HistoricalContext />
        </div>
    )
    async function handleCartDataUpload() {
        if (firebase.auth.currentUser) {
            const data = {imgUrl, name, price, quantity: 1 }
            await firebase.addCartDataToDB(
                firebase.auth.currentUser.uid,
                data
            )
            window.prompt("Item Added To Cart Successfully !")
        } else {
            navigate('/signin')
        }
    }
}

export default Description