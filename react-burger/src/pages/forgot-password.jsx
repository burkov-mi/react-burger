import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './pages.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom'
import { forgotPassword } from '../services/actions/user';

const ForgotPasswordPage = () => {
    const dispatch = useDispatch();
    const forgotPasswordSuccess = useSelector( state => state.user.forgotPasswordSuccess );
    const [form, setValue] = useState({
        email: "",
      });

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword(form));
    };

    if (forgotPasswordSuccess) {
		return <Navigate to={"/reset-password"} />
	}

    return(
        <div className={`${styles.mainContainer} mt-30`}>
            <h1 className={`${styles.formTitle} text text_type_main-medium mb-6 `}>Восстановления пароля</h1>
            <form name='forgot-password' onSubmit={handleSubmit}>  
                <div className='mb-6'>
                    <EmailInput
                        name='email'
                        onChange={onChange}
					    value={form.email}
                    />
                </div>
                <div className={`${styles.button} mb-20`}>
                    <Button type="primary" size="medium" htmlType='submit'>
                        Восстановить
                    </Button>
                </div>
            </form>
            <p className={`${styles.textLink} text text_type_main-default text_color_inactive mb-4`}>Вспомнили пароль?
                <Link to={"/login"} className={styles.link}>
					Войти
				</Link>
            </p>
        </div>
    );
}

export default ForgotPasswordPage;