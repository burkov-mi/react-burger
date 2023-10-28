import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Tabs from "../../utils/tabs";
import { useState, useEffect } from "react";

const ingredientsURL = "https://norma.nomoreparties.space/api/ingredients";

const App = () => {
    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        ingredients: []
    });
    
    const [successed, setSuccessed] = useState(false);

    const getIngredients = () => {
        setState({ ...state, hasError: false, isLoading: true });
        fetch(ingredientsURL)
          .then(res => res.json())
          .then(data => 
            { setState({ ...state, ingredients:data.data, isLoading: false })
                setSuccessed(true)  
            })
          .catch(e => {
            setState({ ...state, hasError: true, isLoading: false });
          });
      };
      
      useEffect(() => {
        getIngredients();
      }, []);

    return(
        <>
        
            <AppHeader isLoading={state.isLoading} hasError={state.hasError}/>

            {  !successed ? (<p>Info loading</p>) : (
            <section className={appStyles.row}>
                <div className='mr-10'>
                    <BurgerIngredients tabs={Tabs} data={state.ingredients} />
                </div>
                <div>
                    <BurgerConstructor data={state.ingredients}/>
                </div>
            </section> )}
        </>
    )
}

export default App;