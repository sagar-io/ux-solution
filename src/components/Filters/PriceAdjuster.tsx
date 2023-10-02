
interface priceAdjusterProps {
    filter: {
        price: number,
        rating: number
    }
    handleFilters: Function
}

const PriceAdjuster = ({ filter, handleFilters }: priceAdjusterProps) => {
    return (
        <div>
            <div>See Items of upto ₹{filter.price}</div>
            <div className="slider-wrapper">
                <input type="range" step="500" min="0" value={filter.price} onChange={handleChange} max="10000" />
            </div>
        </div>

    )
    function handleChange(e: any) {
        handleFilters((prev: any) => ({ ...prev, price: (e.target.value) }))
    }
}

export default PriceAdjuster