import React from 'react';
import '../assets/styles/_Header.scss'
function Header(props) {
    const navbar_object = [
        {
            id: 1,
            name: 'Reviews',
            link: '#'
        },
        {
            id: 2,
            name: 'Products',
            link: '#',
            children_list: [
                {
                    id: 1,
                    name: 'CeFi',
                    link: '#',
                    children_list: [
                        {
                            id: 1,
                            name: 'Centralized Exchanges (CEX)',
                            link: '#',
                        },
                        {
                            id: 2,
                            name: 'Crypto Tax Softwares',
                            link: '#',
                        },
                        {
                            id: 3,
                            name: 'Custody Solutions',
                            link: '#',
                        },
                        {
                            id: 4,
                            name: 'Web3 Banking',
                            link: '#',
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'DAO',
                    link: '#',
                    children_list: [
                        {
                            id: 1,
                            name: 'Creator DAOs',
                            link: '#',
                        },
                        {
                            id: 2,
                            name: 'DAO Tools',
                            link: '#',
                        },
                        {
                            id: 3,
                            name: 'Gaming DAOs',
                            link: '#',
                        },
                        {
                            id: 4,
                            name: 'Venture DAOs',
                            link: '#',
                        },
                    ]
                },
                {
                    id: 3,
                    name: 'DeFi',
                    link: '#'
                },
                {
                    id: 4,
                    name: 'Development Softwares',
                    link: '#'
                },
                {
                    id: 5,
                    name: 'Gaming',
                    link: '#'
                },
                {
                    id: 6,
                    name: 'Identify',
                    link: '#'
                },
                {
                    id: 7,
                    name: 'Infrastructure',
                    link: '#'
                },
                {
                    id: 8,
                    name: 'Marketing',
                    link: '#'
                },
                {
                    id: 9,
                    name: 'Metaverse',
                    link: '#'
                },
                {
                    id: 10,
                    name: 'NFT',
                    link: '#'
                },
                {
                    id: 11,
                    name: 'Security',
                    link: '#'
                },
                {
                    id: 12,
                    name: 'Wallets',
                    link: '#'
                },
            ]
        },
    ]
    return (
        <header id="Header">
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src="" alt="" />
                        </a>
                    </li>
                    <li>
                        Reviews
                    </li>
                    <li>

                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;