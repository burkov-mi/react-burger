import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon,} from '@ya.praktikum/react-developer-burger-ui-components';
import headerStyles from './app-header.module.css';
import classNames from 'classNames';


const AppHeader = () => {
    
    return(
        <header className={headerStyles.header}>
         
            <nav className={headerStyles.nav}>
                <div className={`${headerStyles.leftPosition} ${headerStyles.fullHeight} `}>
                    <button type="button" className={`${headerStyles.menuItem} p-4 mr-2`}>
                        <BurgerIcon type='primary'/>
                        <span className={`${headerStyles.menuItemText} text text_type_main-default ml-2`}>Конструктор</span>
                    </button>
                    <button type="button" className={`${headerStyles.menuItem} p-4`}>
                        <ListIcon type='secondary'/>
                        <span className={`${headerStyles.menuItemText} ${headerStyles.colorTitle} text text_type_main-default ml-2`}>Лента заказов</span>
                    </button>
                </div>
                <div className={`${headerStyles.centerPosition} ${headerStyles.fullHeight}`}>
                    <Logo />
                </div>
                <div className={`${headerStyles.rightPosition} ${headerStyles.fullHeight} `}>
                    <button type="button" className={`${headerStyles.menuItem} p-4 mr-2`}>
                        <ProfileIcon  type='secondary'/>
                        <span className={`${headerStyles.menuItemText} ${headerStyles.colorTitle} text text_type_main-default  ml-2`}>Личный кабинет</span>
                    </button>
                </div>
            </nav> 
        </header> 
    )
}

export default AppHeader;