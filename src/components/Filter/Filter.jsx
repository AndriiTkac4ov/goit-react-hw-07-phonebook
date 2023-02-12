import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { filterList } from "../../redux/filterSlice";
import { FilterLabel, FilterInput } from "./Filter.styled";

const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput
                type="text"
                value={filter}
                onChange={event => dispatch(filterList(event.currentTarget.value))}
            />
        </FilterLabel>
    )
}

export default Filter;