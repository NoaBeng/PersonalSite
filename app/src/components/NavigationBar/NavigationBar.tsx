import { Link, useLocation } from 'react-router-dom';
import Styles from './NavigationBar.module.css';
import clsx from 'clsx';
import { MenuOutlined } from '@ant-design/icons';

type tab = { to: string; label: string };

function NavigationBar() {
  const location = useLocation();

  const tabs: tab[] = [
    { to: '/', label: 'ABOUT ME' },
    { to: '/skills', label: 'SKILLS' },
    { to: '/experience', label: 'EXPERIENCE' },
    { to: '/education', label: 'EDUCATION' },
    { to: '/contact', label: 'CONTACT' },
  ];
  return (
    <header className={Styles['navigation-container']}>
      <label className={Styles['name-title']}>
        <span>Noa Bengayev</span>
        <MenuOutlined className={Styles['menu-icon']} />
      </label>
      <div className={Styles['links-container']}>
        {tabs.map((tab) => (
          <Link
            key={tab.to}
            to={tab.to}
            className={clsx(
              Styles['navigation-link'],
              tab.to === location.pathname && Styles['chosen-link']
            )}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default NavigationBar;
