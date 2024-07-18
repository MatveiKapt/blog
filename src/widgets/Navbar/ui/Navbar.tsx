import { classNames } from 'shared/lib';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

// eslint-disable-next-line arrow-body-style
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
