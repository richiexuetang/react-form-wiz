import React from 'react';
import './menu-item.scss';
import { DirectoryCategory } from '../directory/Directory';
import { useNavigate } from 'react-router-dom';

interface MenuItemProps {
  category: DirectoryCategory;
}

const MenuItem: React.FC<MenuItemProps> = ({ category }) => {
  const { imageUrl, title, size, route } = category;
  const navigate = useNavigate();

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(route)}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
