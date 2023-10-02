import DropDown from "./DropDown"
import PriceAdjuster from "./PriceAdjuster"
import filterIcon from '../../assets/images/filter.svg'

interface filtersProps {
    filter: {
        price: number,
        rating: number
    },
    handleFilters: Function
}

const Filters = ({ filter, handleFilters }: filtersProps) => {
    return (
        <div className="filters">
            <div className="icon">
                <img src={filterIcon} alt="filter" />
            </div>
            <DropDown handleFilters={handleFilters} />
            <PriceAdjuster filter={filter} handleFilters={handleFilters} />
        </div>
    )
}

export default Filters