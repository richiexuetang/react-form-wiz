import React from 'react';

import './directory.scss';

import MenuItem from '../../pages/menu-item/menu-item';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/82cYDRC/jaikishan-patel-x-Dk-JEp-GJ0-I-unsplash.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/z8CxtJ2/amanda-vick-K0-Vlk9-DZ1dc-unsplash.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/5j83T64/ozgu-ozden-wa-3-Dee-Ex6-Q-unsplash.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/fd34wvX/Screen-Shot-2020-08-26-at-7-57-43-PM.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/0Y2x20J/wells-chan-hh05-xgi-E-unsplash.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }]
        }
    }

    render() {
        return (<div className='directory-menu'>
        {
            this.state.sections.map(({id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))
        }
    </div>);
    }
}

export default Directory;