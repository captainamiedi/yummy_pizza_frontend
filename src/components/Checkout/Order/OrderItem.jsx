import React from 'react';
import PropTypes from "prop-types";

export default function OrderItem({items}) {
    const { title, count, total} = items
    return (
        <div>
        <div className="row">
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">{title}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">{count}</p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-uppercase">${total}</p>
            </div>
        </div>
        <hr className="mt-2 mb-3 d-lg-none" />
        </div>
    )
}

OrderItem.propTypes = {
    items: PropTypes.shape({
        title: PropTypes.string,
        count: PropTypes.number,
        total: PropTypes.number
    }).isRequired
}
