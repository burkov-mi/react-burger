import { Button, Input, PasswordInput,} from '@ya.praktikum/react-developer-burger-ui-components';
import profileBodyStyle from './profile.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchUser } from '../../services/actions/user';



const ProfileBody = () => {
	const dispatch = useDispatch();
	const userCurrentData = useSelector(state => state.user.user);
/*
	const [form, setValue] = useState({
		name: userCurrentData?.name,
		email: userCurrentData?.email,
		password: "",
	  });
*/
	const [form, setValue] = useState({
		name: '',
		email: '',
		password: "",
	});

	useEffect(() => {
		if (userCurrentData) {
			setValue({
				...form,
				email: userCurrentData.email,
				name: userCurrentData.name,
				password: "",
			})
		}
	}, [userCurrentData])

	const onChange = (e) => {
		setValue({ ...form, [e.target.name]: e.target.value });
	  };
	
	const handleCancel = () => {
		setValue({
			...form,
			email: userCurrentData.email,
			name: userCurrentData.name,
			password: "",
		})
	}
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(patchUser(form.name, form.email, form.password))
	}
	
    return (
        <form className={profileBodyStyle.form} onSubmit={handleSubmit} >
            <Input
				type='text'
				name='name'
				placeholder='Имя'
				onChange={onChange}
				value={form.name ?? ""}
				icon={'EditIcon'}
			/>
			<Input
				type='email'
				name='login'
				placeholder='Логин'
				onChange={onChange}
				value={form.email ?? ""}
				icon={'EditIcon'}
			/>
			<PasswordInput
				name='password'
				onChange={onChange}
				value={form.password ?? ""}
			/>
			<div className={profileBodyStyle.button}>
				<Button
					type='primary'
					size='medium'
					htmlType='button'
					onClick={handleCancel}
				>
					Отмена
				</Button>
				<Button type='primary' size='medium' htmlType='submit'>
					Сохранить
				</Button>
			</div>
        </form>
    )
}

export default ProfileBody;