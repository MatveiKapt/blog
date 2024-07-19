/* eslint-disable i18next/no-literal-string */
import { useTheme } from 'app/providers/ThemeProvider/index';
import { classNames } from 'shared/lib';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useState } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';
import { AppRouter } from './providers/router';
import { PageLoader } from '../widgets/PageLoader/ui/PageLoader';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <Button onClick={() => setIsOpen(true)}>toggle</Button>
                <Modal isOpen={isOpen} onClose={() => { setIsOpen(false); }}>
                    {/* eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, iure nobis numquam minus, accusantium velit quisquam impedit doloribus dicta, veniam hic exercitationem! Quos facilis reprehenderit reiciendis labore debitis adipisci inventore.
                </Modal>

                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
