import { useSelector } from 'react-redux';

import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';

import { getIsAuthenticated } from '../../redux/auth';

import styles from './AppBar.module.scss';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <div className={styles.AppBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
