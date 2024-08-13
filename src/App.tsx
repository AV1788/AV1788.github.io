import React, { useEffect, useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './styles/App.scss';
import tapasFromServer from './api/tapas.json';
import toastsFromServer from './api/toasts.json';
import sandwichesFromServer from './api/sandwiches.json';
import ginFromServer from './api/gin.json';
import vodkaFromServer from './api/vodka.json';
import whiskeyFromServer from './api/whiskey.json';
import rumFromServer from './api/rum.json';
import cognacFromServer from './api/cognac_brandy.json';
import clCocktailsFromServer from './api/cl_cocktails.json';
import smCocktailsFromServer from './api/sm_cocktails.json';
import mocktailsFromServer from './api/mocktails.json';
import lemonadesFromServer from './api/lemonades.json';
import milkshakesFromServer from './api/milkshakes.json';
import { CustomDropdown } from './CustomDropdown';

export const App = () => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState('en');


  const options = [
    { value: 'en', label: 'English', icon: 'icons/uk.png' },
    { value: 'es', label: 'Español', icon: 'icons/spain.png' },
    { value: 'fr', label: 'Français', icon: 'icons/france.png' },
    { value: 'ru', label: 'Русский', icon: 'icons/russia.png' },
  ];

  const changeLanguage = (lng: string) => {
    setLoading(true);
    // Затримка 3 секунди перед зміною мови
    setTimeout(() => {
      i18n.changeLanguage(lng).then(() => {
        setLoading(false);
        setLanguage(lng);
      });
    }, 1000); // 3000 мс = 3 секунди
  };

  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);

  function openMenu(): void {
    const menu = document.getElementById("menu");
    const header = document.getElementById("header");
  
    if (menu && header) {
      menu.classList.add("open");
      header.classList.add("hidden");
    }
  }
  
  function closeMenu(): void {
    const menu = document.getElementById("menu");
    const header = document.getElementById("header");
  
    if (menu && header) {
      menu.classList.remove("open");
      header.classList.remove("hidden");
    }
  }

  return (
    <div className="app">
      {loading && 
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>}
      <header className="header" id="header">
        <div className="header__icon">
          <a href="#menu" className="icon icon--menu" onClick={openMenu}></a>
        </div>
        
        <nav className="header__container nav">
          <ul className="nav__list">
            <li>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  {t(`main.cocktails`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#cl_cocktails">{t(`header.cl_cocktails`)}</a></li>
                  <li><a className="dropdown-item" href="#sm_cocktails">{t(`header.sm_cocktails`)}</a></li>
                  <li><a className="dropdown-item" href="#mocktails">{t(`header.mocktails`)}</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  {t(`main.alcohol`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#gin">{t(`header.gin`)}</a></li>
                  <li><a className="dropdown-item" href="#vodka">{t(`header.vodka`)}</a></li>
                  <li><a className="dropdown-item" href="#whiskey">{t(`header.whiskey`)}</a></li>
                  <li><a className="dropdown-item" href="#rum">{t(`header.rum`)}</a></li>
                  <li><a className="dropdown-item" href="#cognac">{t(`header.cognac`)}</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  {t(`main.drinks`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#lemonades">{t(`header.lemonades`)}</a></li>
                  <li><a className="dropdown-item" href="#milkshakes">{t(`header.milkshakes`)}</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  {t(`main.food`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#tapas">{t(`header.tapas`)}</a></li>
                  <li><a className="dropdown-item" href="#toasts">{t(`header.toasts`)}</a></li>
                  <li><a className="dropdown-item" href="#sandwiches">{t(`header.sandwiches`)}</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <CustomDropdown options={options} selectedLanguage={language} onLanguageChange={changeLanguage}/>
        
        
      </header>

      <aside className="app__menu menu" id="menu">
        <div className="menu__top">
          <div className="menu__icon">
            <a href="#header" className="icon icon--close" onClick={closeMenu}></a>
          </div>
          <CustomDropdown options={options} selectedLanguage={language} onLanguageChange={changeLanguage}/>
        </div>
        <div className="menu__nav">
          <ul className="menu-nav accordion" id="accordionExample">
            <li className="menu-nav__item">
            
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {t('main.cocktails')}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#cl_cocktails" className="accordion-body__link" onClick={closeMenu}>
                          {t('header.cl_cocktails')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#sm_cocktails" className="accordion-body__link" onClick={closeMenu}>
                          {t('header.sm_cocktails')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#mocktails" className="accordion-body__link" onClick={closeMenu}>
                          {t('header.mocktails')}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </li>
            <li className="menu-nav__item">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  {t('main.alcohol')}
                  </button>
                </h2>
                 <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#gin" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.gin')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#vodka" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.vodka')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#whiskey" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.whiskey')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#rum" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.rum')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#cognac" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.cognac')}
                        </a>
                      </li>
                    </ul>
                   </div>
                 </div>
              </div>
            </li>
            <li className="menu-nav__item">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {t('main.drinks')}
                  </button>
                </h2>
                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#lemonades" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.lemonades')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#milkshakes" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.milkshakes')}
                        </a>
                      </li>
                    </ul>
                   </div>
                 </div>
              </div>
            </li>
            <li className="menu-nav__item">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    {t('main.food')}
                  </button>
                </h2>
                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#tapas" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.tapas')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#toasts" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.toasts')}
                        </a>
                      </li>
                      <li className="accordion-body__item">
                        <a href="#sandwiches" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.sandwiches')}
                        </a>
                      </li>
                    </ul>
                   </div>
                 </div>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <main>
        <section className="cocktails">
        <div className="container">
          <h1 className="cocktails__title title" id="cl_cocktails">{t('header.cl_cocktails')}</h1>
          <ul className="cocktails__list">
            {clCocktailsFromServer.map(clCocktails => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{clCocktails.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{clCocktails.price}€</span>
              </div>

              <span className="product__description">{t(`cl_cocktails.description.${clCocktails.id}`)}
              </span>
            </li>
            ))}
          </ul>

          <h1 className="cocktails__title title" id="sm_cocktails">{t('header.sm_cocktails')}</h1>
          <ul className="cocktails__list">
            {smCocktailsFromServer.map(smCocktails => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{smCocktails.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{smCocktails.price}€</span>
              </div>

              <span className="product__description">{t(`sm_cocktails.description.${smCocktails.id}`)}
              </span>
            </li>
            ))}
          </ul>

          <h1 className="cocktails__title title" id="mocktails">{t('header.mocktails')}</h1>
          <ul className="cocktails__list">
            {mocktailsFromServer.map(mocktails => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{mocktails.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{mocktails.price}€</span>
              </div>

              <span className="product__description">{t(`mocktails.description.${mocktails.id}`)}
              </span>
            </li>
            ))}
          </ul>
        </div>
        </section>

        <section className="drinks">
        <div className="container">
          <h1 className="drinks__title title" id="lemonades">{t('header.lemonades')}</h1>
          <ul className="drinks__list">
            {lemonadesFromServer.map(lemonades => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{lemonades.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{lemonades.price}€</span>
              </div>

              <span className="product__description">{t(`lemonades.description.${lemonades.id}`)}
              </span>
            </li>
            ))}
          </ul>

          <h1 className="drinks__title title" id="milkshakes">{t('header.milkshakes')}</h1>
          <ul className="drinks__list">
            {milkshakesFromServer.map(milkshakes => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{t(`milkshakes.name.${milkshakes.id}`)}</span>
                <span className="product__space"></span>
                <span className="product__price">{milkshakes.price}€</span>
              </div>

              <span className="product__description">{t(`milkshakes.description.${milkshakes.id}`)}
              </span>
            </li>
            ))}
          </ul>
        </div>
        </section>


        <section className="alcohol">
        <div className="container">
          
          <h1 className="alcohol__title title" id="gin">{t('header.gin')}</h1>
          <ul className="alcohol__list">
            {ginFromServer.map(gin => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{gin.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{gin.price}€</span>
              </div>
            </li>
            ))}
          </ul>
          

          <h1 className="alcohol__title title" id="vodka">{t('header.vodka')}</h1>
          <ul className="alcohol__list">
            {vodkaFromServer.map(vodka => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{vodka.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{vodka.price}€</span>
              </div>
            </li>
            ))}
          </ul>


          <h1 className="alcohol__title title" id="whiskey">{t('header.whiskey')}</h1>
          <ul className="alcohol__list">
            {whiskeyFromServer.map(whiskey => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{whiskey.name}</span>
                <span className="product__space"></span>
                {whiskey.price ? (
                  <span className="product__price">{whiskey.price}€</span>
                ) : (
                  <span className="product__price">{whiskey.priceSmall}€ / {whiskey.priceBig}€</span>
                )}
                
              </div>
            </li>
            ))}
          </ul>

          <h1 className="alcohol__title title" id="rum">{t('header.rum')}</h1>
          <ul className="alcohol__list">
            {rumFromServer.map(rum => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{rum.name}</span>
                <span className="product__space"></span>
                {rum.price ? (
                  <span className="product__price">{rum.price}€</span>
                ) : (
                  <span className="product__price">{rum.priceSmall}€ / {rum.priceBig}€</span>
                )}
                
              </div>
            </li>
            ))}
          </ul>

          <h1 className="alcohol__title title" id="cognac">{t('header.cognac')}</h1>
          <ul className="alcohol__list">
            {cognacFromServer.map(cognac => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{cognac.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{cognac.price}€</span>
              </div>
            </li>
            ))}
          </ul>
          <img src="icon.png" alt="" className="app__pict"/>

        </div>
        </section>
      
        <section className="food">
        <div className="container" id="tapas">
          
          <h1 className="food__title title">{t('header.tapas')}</h1>
          <ul className="food__list">
            {tapasFromServer.map(tapas => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{t(`tapas.name.${tapas.id}`)}</span>
                <span className="product__space"></span>
                <span className="product__price">{tapas.price}€</span>
              </div>

              <span className="product__description">{t(`tapas.description.${tapas.id}`)}
              </span>
            </li>
            ))}
          </ul>
          

          <h1 className="food__title title" id="toasts">{t('header.toasts')}</h1>

          <ul className="food__list">
            {toastsFromServer.map(toasts => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{t(`toasts.name.${toasts.id}`)}</span>
                <span className="product__space"></span>
                <span className="product__price">{toasts.price}€</span>
              </div>

              <span className="product__description">{t(`toasts.description.${toasts.id}`)}
              </span>
            </li>
            ))}
          </ul>

          <h1 className="food__title title" id="sandwiches">{t('header.sandwiches')}</h1>

          <ul className="food__list food__list--second">
            {sandwichesFromServer.map(sandwiches => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{t(`sandwiches.name.${sandwiches.id}`)}</span>
                <span className="product__space"></span>
                <span className="product__price">{sandwiches.price}€</span>
              </div>

              <span className="product__description">{t(`sandwiches.description.${sandwiches.id}`)}
              </span>
            </li>
            ))}
          </ul>
          <img src="icon.png" alt="" className="app__pict"/>
              
        </div>
        </section>
      </main>

    </div>
  );
}
