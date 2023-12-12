import { useEffect, FC } from 'react';
import ingredientsStyles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsElem from "../burger-ingredients-elem/burger-intgredients-elem";
import tabs from "../../utils/tabs";
import { useDispatch, useSelector } from 'react-redux'
import { SWITCH_TAB } from "../../services/actions/tabs";
import { useInView } from "react-intersection-observer";
import { TCategoryRefMap } from '../../utils/types/category-type';
import { TIngredient } from '../../utils/types/ingredient';

const BurgerIngredients: FC = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store: any) => store.ingredients)
  const { currentTab } = useSelector( (store: any) => store.currentTab )

  const onTabClick = (value: string) => {
    dispatch({ type: SWITCH_TAB, currentTab: value });
		const element = document.getElementById(value);
    if (element) element.scrollIntoView({ behavior: "smooth" });
	};

  const inViewOptions = {
    threshold: 0,
    trackVisibility: true,
    delay: 100
  };

  const [bunRef, inViewBun] = useInView(inViewOptions);
  const [mainRef, inViewMain] = useInView(inViewOptions);
  const [sauceRef, inViewSauce] = useInView(inViewOptions);
    
  const categoryRefMap: TCategoryRefMap = {
    bun: { ref: bunRef },
    sauce: { ref: sauceRef},
    main: { ref: mainRef},
  };

  useEffect(() => {
    if (inViewBun) {
      dispatch({ type: SWITCH_TAB, currentTab: 'bun' });
    }
    else if (inViewSauce) {
      dispatch({ type: SWITCH_TAB, currentTab: 'sauce' });
    }
    else if (inViewMain) {
      dispatch({ type: SWITCH_TAB, currentTab: 'main' });
    }
   }, [inViewBun, inViewSauce, inViewMain]);

  return (
    <>
      <p className="text text_type_main-large mb-5 mt-10">Соберите бургер</p>
      <div className={`${ingredientsStyles.tabs} mb-10`}>
        {tabs.map((tab) => (
          <Tab key={tab._id} value={tab.value} active={currentTab === tab.value}
            onClick={() => onTabClick(tab.value)}
          >
            {tab.name}
          </Tab>
        ))}

      </div>
      {ingredients && (
        <div className={ingredientsStyles.components}>
          {tabs.map((tab) => (
            <section ref={categoryRefMap[tab.type].ref} id={tab.type} key={tab._id} >
              <p className="text text_type_main-medium">{tab.name}</p>
              <div className={`${ingredientsStyles.elem_container} ml-4`}>
                { ingredients &&
                  ingredients
                  .filter((elem: TIngredient) => elem.type === tab.type)
                  .map((el: TIngredient) => {
                    return <BurgerIngredientsElem item={el} key={el._id}/>
                  }
                  )}
              </div>
            </section>
          ))}
        </div>
      )}
    </>
  );
}

export default BurgerIngredients;