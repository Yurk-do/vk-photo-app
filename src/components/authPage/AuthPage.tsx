import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateToken, loginIn } from '../../redux/actionsCreater';

const AuthPage = () => {
  const location = useLocation();

  const getToken = (hash: string) => {
    const startToken = hash.indexOf('=') + 1;
    const endToken = hash.indexOf('&');
    return hash.slice(startToken, endToken);
  };

  window.opener.location.hash = getToken(location.hash);

  const closeWindow = () => {
    window.close();
  };

  return (
    <div>
      <h1>Поздравляем! Авторизация прошла успешно</h1>

      <button className='button-back' onClick={closeWindow}>
        Вернуться в приложение
      </button>
    </div>
  );
};

export default AuthPage;
