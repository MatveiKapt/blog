import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
        <AppLink className={cls.mainLink} theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink> 
      </div>
    </div>
  );
};