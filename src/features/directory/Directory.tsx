import React, { Key } from 'react';
import './directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  size?: string;
  route: string;
};

const categories: DirectoryCategory[] = [
  {
    title: 'hats',
    imageUrl:
      'https://i.ibb.co/82cYDRC/jaikishan-patel-x-Dk-JEp-GJ0-I-unsplash.jpg',
    id: 1,
    route: 'shop/hats',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/z8CxtJ2/amanda-vick-K0-Vlk9-DZ1dc-unsplash.jpg',
    id: 2,
    route: 'shop/jackets',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/5j83T64/ozgu-ozden-wa-3-Dee-Ex6-Q-unsplash.jpg',
    id: 3,
    route: 'shop/sneakers',
  },
  {
    title: 'womens',
    imageUrl:
      'https://i.ibb.co/fd34wvX/Screen-Shot-2020-08-26-at-7-57-43-PM.png',
    size: 'large',
    id: 4,
    route: 'shop/womens',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/0Y2x20J/wells-chan-hh05-xgi-E-unsplash.jpg',
    size: 'large',
    id: 5,
    route: 'shop/mens',
  },
];

const Directory = () => {
  return (
    <div className='directory-menu'>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
