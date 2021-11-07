import React, { useState, useEffect } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import { webPortfolio, databasePortfolio, featuredPortfolio, mobilePortfolio, designPortfolio, othersPortfolio } from '../../data'
import './portfolio.css'

function Porfolio(props) {

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web Technologies'
        },
        {
            id: 'frame',
            title: 'Frameworks'
        },
        {
            id: 'language',
            title: 'Languages'
        },
        {
            id: 'database',
            title: 'Database'
        },
        {
            id: 'others',
            title: 'Others'
        },

    ]


    const [selected, setselected] = useState('featured')
    const [data, setdata] = useState([])

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setdata(featuredPortfolio)
                break;
            case 'web':
                setdata(webPortfolio)
                break;
            case 'frame':
                setdata(mobilePortfolio)
                break;
            case 'language':
                setdata(designPortfolio)
                break;
            case 'database':
                setdata(databasePortfolio)
                break;
            case 'others':
                setdata(othersPortfolio)
                break;
            default:
                setdata(featuredPortfolio)

        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Skills</h1>
            <ul>
                {list.map(item => {
                    return (
                        <PortfolioList
                            title={item.title}
                            active={selected === item.id}
                            setselected={setselected}
                            id={item.id}
                        />
                    )
                })}
            </ul>
            <div className='container'>
                {data.map(item => {
                    return (
                        <div className="item">
                            <img src={item.img} />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Porfolio;