import React, { FC } from 'react';
import './photoItem.css';

interface PhotoItemPropsType {
  photoUrl: string;
  likesQuantity: string;
}

const PhotoItem: FC<PhotoItemPropsType> = ({ photoUrl, likesQuantity }) => {
  return (
    <div className='image-item-container'>
      <div className='image-container'>
        <img src={photoUrl} alt='image' />
      </div>
      <p className='photo-item-likes'>Количество лайков: {likesQuantity}</p>
    </div>
  );
};

export default PhotoItem;
