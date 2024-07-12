import { classNames } from '../../../shared/lib';
import './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames('page__loader', {}, [className])}>
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
