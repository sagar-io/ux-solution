import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

interface dropdownProps {
    handleFilters: Function
}

const DropDown = ({ handleFilters }: dropdownProps) => {
    const options = [
        {
            value: '4',
            label: '> 4 rating'
        },
        {
            value: '3',
            label: '> 3 rating'
        },
        {
            value: '2',
            label: '> 2 rating'
        },
        {
            value: '1',
            label: '> 1 rating'
        }
    ]

    return (
        <Dropdown
            options={options}
            value={'1'}
            placeholder="Search via Rating"
            onChange={handleChange}
        />
    )

    function handleChange(e: any) {
        handleFilters((prev: any) => ({ ...prev, rating: parseInt(e.value) }))
    }
}

export default DropDown