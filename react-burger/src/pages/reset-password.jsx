import { Button, Input, PasswordInput, } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './pages.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { resetPassword } from '../services/actions/user';

const ResetPasswordPage = () => {
    const dispatch = useDispatch();
    const resetPasswordSuccess = useSelector( state => state.user.resetPasswordSuccess );
    const [form, setValue] = useState({
        password: "",
        token: "",
      });

    const onChange = (e) => {
        setValue({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(form));
    };

    if (resetPasswordSuccess) {
		return <Navigate to={"/login"} />
	}

    return(
        <div className={`${styles.mainContainer} mt-30`}>
            <h1 className={`${styles.formTitle} text text_type_main-medium mb-6 `}>Восстановления пароля</h1>
            <form name='register' onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <PasswordInput
                        name='password'
                        placeholder='Введите новый пароль'
                        onChange={onChange}
                        value={form.password}
                    />
                </div>
                <div className='mb-6'>
                    <Input
                        name='name'
                        placeholder='Введите код из письма'
                        onChange={onChange}
                        value={form.token}
                    />
                </div>
                <div className={`${styles.button} mb-20`}>
                    <Button type="primary" size="medium" htmlType='submit'>
                        Сохарнить
                    </Button>
                </div>
            </form>
            <p className={`${styles.textLink} text text_type_main-default text_color_inactive mb-4`}>Вспомнили пароль?
                <Link to={"/login"} className={styles.link}>Войти</Link>
            </p>
        </div>
    );
}

export default ResetPasswordPage;