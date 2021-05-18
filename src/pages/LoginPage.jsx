import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../redux/auth';

import styles from './pages.module.scss';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        throw new Error('ERROR');
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(login({ email, password }));

    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.Page}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form__group}>
          <label className={styles.form__label}>
            Email
            <input
              autoComplete="off"
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder=" "
              className={styles.form__input}
            />
          </label>
        </div>

        <div className={styles.form__group}>
          <label className={styles.form__label}>
            Password
            <input
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder=" "
              className={styles.form__input}
            />
          </label>
        </div>

        <button type="submit" className={styles.form__btn}>
          Sing in
        </button>
      </form>
    </div>
  );
}

// class LoginPage extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = e => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onLogin(this.state);

//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ email: '', password: '' });
//   };

//   render() {
//     const { email, password } = this.state;
// return (
//   <div className={styles.Page}>
//     <form onSubmit={this.handleSubmit} className={styles.form}>
//       <div className={styles.form__group}>
//         <label className={styles.form__label}>
//           Email
//           <input
//             autoComplete="off"
//             name="email"
//             type="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder=" "
//             className={styles.form__input}
//           />
//         </label>
//       </div>

//       <div className={styles.form__group}>
//         <label className={styles.form__label}>
//           Password
//           <input
//             name="password"
//             type="password"
//             value={password}
//             onChange={this.handleChange}
//             placeholder=" "
//             className={styles.form__input}
//           />
//         </label>
//       </div>

//       <button type="submit" className={styles.form__btn}>
//         Sing in
//       </button>
//     </form>
//   </div>
// );
//   }
// }

// LoginPage.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

// const mapDispatchToProps = {
//   onLogin: login,
// };

// export default connect(null, mapDispatchToProps)(LoginPage);
