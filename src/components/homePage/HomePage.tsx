import React, { FC, useEffect, useRef, useState } from 'react';
import './homePage.css';
import axios from 'axios-jsonp-pro';
import PhotoItem from '../imageItem/PhotoItem';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router';
import { updateToken, loginIn } from '../../redux/actionsCreater';

interface PhotoObjectType {
  url: string;
  likes: string;
}

interface ResponseItemType {
  sizes: {
    url: string;
  }[];

  likes: {
    count: string;
  };
}

interface ResponseType {
  response: {
    items: ResponseItemType[];
  };
}

const HomePage: FC = () => {
  const [photoAlbumType, setPhotoAlbumType] = useState('');
  const [photoQuantity, setPhotoQuantity] = useState('');
  const [allPhotos, setAllPhotos] = useState([]);

  const dispatch = useDispatch();

  const location = useLocation();

  const token = useSelector((state: any) => state.auth.token);
  const authStatus = useSelector((state: any) => state.auth.isAuth);

  useEffect(() => {
    if (location.hash.length > 2) {
      dispatch(loginIn());
    }
    dispatch(updateToken(location.hash.slice(1)));
  }, [location.hash]);

  const appId = 7986489;

  const openAuthWindow = () => {
    window.open(
      `https://oauth.vk.com/authorize?&display=popup&client_id=${appId}&redirect_uri=http://localhost:3000/authPage&scope=photos&response_type=token&v=5.52`,
      'authWindow',
      'top=100, left=100, width=600, height=500, scrollbars=yes, resizable=yes'
    );
  };

  const choicePhotoAlbum = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPhotoAlbumType(event.target.value);
  };
  const changePhotoQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhotoQuantity(event.target.value);
  };

  const fetchPhoto = async () => {
    if (token.length < 2) {
      return console.log('Пожалуйста авторизируйтесь');
    }
    setAllPhotos([]);
    try {
      const response: ResponseType = await axios.jsonp(
        'https://api.vk.com/method/photos.get?&extended=1&v=5.81',
        {
          params: {
            access_token: token,
            album_id: photoAlbumType || 'wall',
            count: photoQuantity,
          },
        }
      );
      response.response.items.forEach((item: ResponseItemType) => {
        {
          const photoObj = { url: item.sizes[2].url, likes: item.likes.count };
          setAllPhotos((prevPhotos): any => [...prevPhotos, photoObj]);
        }
      });
      setPhotoQuantity('');
      setPhotoAlbumType('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='home-page-main-container'>
      <h1>Home Page</h1>
      {authStatus && <h2 className='auth-title'>Вы авторизированы</h2>}
      <select
        className='select-album-type-container'
        onChange={choicePhotoAlbum}
      >
        <option value='wall'>Фото со стены</option>
        <option value='profile'>Фото профиля</option>
      </select>

      <div className='input-photo-quantity-container'>
        <label htmlFor='photo-quantity'>Укажите количество фотографий</label>
        <input
          type='text'
          id='photo-quantity'
          name='photo-quantity'
          onChange={changePhotoQuantity}
          value={photoQuantity}
        />
      </div>
      <button className='button-send-data' onClick={fetchPhoto}>
        Запросить
      </button>

      {!authStatus && (
        <button className='button-auth' onClick={openAuthWindow}>
          Аутентификация
        </button>
      )}

      <div className='photo-container'>
        {allPhotos.map((photoObject: PhotoObjectType) => (
          <PhotoItem
            key={photoObject.url}
            photoUrl={photoObject.url}
            likesQuantity={photoObject.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
