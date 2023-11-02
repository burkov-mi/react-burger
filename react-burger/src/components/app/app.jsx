import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useState, useEffect } from "react";
import { DataContext, } from '../services/app-context';


const ingredientsURL = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
    const [stateRequest, setRequesState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    });
    
    const [successed, setSuccessed] = useState(false);

    async function getIngredients (){
        setRequesState({ ...stateRequest, hasError: false, isLoading: true });
        let response = await fetch(ingredientsURL);
        if (response.ok) {
            let data = await response.json();
            setRequesState({ ...stateRequest, ingredients:data.data, isLoading: false })
            setSuccessed(true);
        } 
        else {
            setRequesState({ ...stateRequest, hasError: true, isLoading: false });
            alert("Ошибка HTTP: " + response.status);
        }
    }
    
    useEffect(() => {
    getIngredients();
    }, []);

    return(
        <>
        
            <AppHeader isLoading={stateRequest.isLoading} hasError={stateRequest.hasError}/>

            {  !successed ? (<p>Info loading</p>) : (
            <section className={appStyles.row}>
                <DataContext.Provider value={stateRequest.ingredients}>
                    <div className='mr-10'>
                        <BurgerIngredients/>
                    </div>
                    <div>
                        <BurgerConstructor/>
                    </div>
                </DataContext.Provider>
            </section> )}
        </>
    )
}

export default App;