import PropTypes from "prop-types";

function ListItem(props) {
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = props.item;

    let nameItem = title;
    let currencySelection = currency_code;
    let remainsClass = "item-quantity";

    if (nameItem.length > 50) {
        nameItem = nameItem.slice(0, 50) + '...';
    }

    switch (currency_code) {
        case 'USD':
            currencySelection = `$${price}`;
            break;
        case 'EUR':
            currencySelection = `€${price}`;
            break;
        default:
            currencySelection = `${currency_code} ${price}`;
            break;
    }

    if (quantity <= 10) {
        remainsClass = remainsClass + " level-low";
    } else if (quantity <= 20) {
        remainsClass = remainsClass + " level-medium";
    } else {
        remainsClass = remainsClass + " level-high";
    }



    return (
        <>
            <div className="item" data-id={listing_id}>
                <div className="item-image">
                    <a href={url}>
                        <img src={MainImage.url_570xN} alt='product' />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{nameItem}</p>
                    <p className="item-price">{currencySelection}</p>
                    <p className={remainsClass}>{quantity} left</p>
                </div>
            </div>
        </>
    )
}

ListItem.propTypes = {
    item: PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
    }),
}

export default ListItem;
