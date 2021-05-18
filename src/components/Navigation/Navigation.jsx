import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import { getIsAuthenticated } from '../../redux/auth';

import styles from './Navigation.module.scss';

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <div>
      <NavLink
        exact
        className={styles.Navigation}
        activeStyle={{ color: 'orange' }}
        to={routes.home}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={styles.Navigation}
          activeStyle={{ color: 'orange' }}
          to={routes.contacts}
        >
          Contacts{' '}
        </NavLink>
      )}
    </div>
  );
}
