import { classNames } from 'shared/lib';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                    to="/"
                >
                    {t('Главная')}
                </AppLink>

                <AppLink
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                    to="/about"
                >
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
