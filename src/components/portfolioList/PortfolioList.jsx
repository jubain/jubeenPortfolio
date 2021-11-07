import React from 'react';
import './portfolioList.css'

function PortfolioList({ title, active, setselected, id }) {
    return (
        <li className={active ? "portfolioList active" : 'portfolioList'} onClick={() => {
            setselected(id)
        }}>
            {title}
        </li>
    );
}

export default PortfolioList;