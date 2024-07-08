import './styles/index.scss'
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link> 
      <AppRouter />
    </div>
  )
};

export default App;