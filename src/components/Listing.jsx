import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { v4 as uuid } from 'uuid';

function Listing(props) {
    const { items } = props;

    return (
        <>
            <div className="item-list">
                {items.map((element) => (
                    <ListItem key={uuid()} item={element} />
                ))}
            </div>
        </>
    )
}

Listing.defaultProps = { item: [] };

Listing.propTypes = {
    items: PropTypes.array,
}

export default Listing;
