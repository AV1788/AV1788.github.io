import React, { useEffect, useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './styles/App.scss';
import ginFromServer from './api/gin.json';
import vodkaFromServer from './api/vodka.json';
import whiskeyFromServer from './api/whiskey.json';
import rumFromServer from './api/rum.json';
import cognacFromServer from './api/cognac_brandy.json';
import clCocktailsFromServer from './api/cl_cocktails.json';
import redWines from './api/red_wine.json';
import whiteWines from './api/white_wine.json';
import roseWines from './api/rose_wine.json';
import sparklingWines from './api/sparkling_wine.json';
import coffeeFromServer from './api/coffee.json';
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
                  {t(`main.wine`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#red_wine">{t(`header.red_wines`)}</a></li>
                  <li><a className="dropdown-item" href="#white_wine">{t(`header.white_wines`)}</a></li>
                  <li><a className="dropdown-item" href="#rose_wine">{t(`header.rose_wines`)}</a></li>
                  <li><a className="dropdown-item" href="#sparkling_wine">{t(`header.sparkling_wines`)}</a></li>
                </ul>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                  {t(`main.cocktails`)}
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#cl_cocktails">{t(`header.cl_cocktails`)}</a></li>
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
                  <li><a className="dropdown-item" href="#coffee">{t(`header.coffee`)}</a></li>
                  <li><a className="dropdown-item" href="#lemonades">{t(`header.lemonades`)}</a></li>
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
                  {t('main.wine')}
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul className="accordion-body__list">
                    <li className="accordion-body__item">
                      <a href="#red_wine" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.red_wines')}
                      </a>
                    </li>
                    <li className="accordion-body__item">
                      <a href="#white_wine" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.white_wines')}
                      </a>
                    </li>
                    <li className="accordion-body__item">
                      <a href="#rose_wine" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.rose_wines')}
                      </a>
                    </li>
                    <li className="accordion-body__item">
                      <a href="#sparkling_wine" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.sparkling_wines')}
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
                    {t('main.cocktails')}
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#cl_cocktails" className="accordion-body__link" onClick={closeMenu}>
                          {t('header.cl_cocktails')}
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
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  {t('main.alcohol')}
                  </button>
                </h2>
                 <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    {t('main.drinks')}
                  </button>
                </h2>
                 <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                   <div className="accordion-body">
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#coffee" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.coffee')}
                        </a>
                      </li>
                      
                    </ul>
                   <ul className="accordion-body__list">
                      <li className="accordion-body__item">
                        <a href="#lemonades" className="accordion-body__link" onClick={closeMenu}>
                        {t('header.lemonades')}
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
        <section className="wines">
          <div className="container">
            <h1 className="wines__title title" id="red_wine">{t('header.red_wines')}</h1>
            <ul className="wines__list">
              {redWines.map(redWine => (
                <li className="product">
                <div className="product__main">
                  <span className="product__name">{redWine.name}</span>
                  <span className="product__space"></span>
                  <span className="product__price">{redWine.price}€</span>
                </div>
  
                <span className="product__description">{redWine.description}
                </span>
              </li>
              ))}
            </ul>

            <h1 className="wines__title title" id="white_wine">{t('header.white_wines')}</h1>
            <ul className="wines__list">
              {whiteWines.map(whiteWine => (
                <li className="product">
                <div className="product__main">
                  <span className="product__name">{whiteWine.name}</span>
                  <span className="product__space"></span>
                  <span className="product__price">{whiteWine.price}€</span>
                </div>
  
                <span className="product__description">{whiteWine.description}
                </span>
              </li>
              ))}
            </ul>

            <h1 className="wines__title title" id="rose_wine">{t('header.rose_wines')}</h1>
            <ul className="wines__list">
              {roseWines.map(roseWine => (
                <li className="product">
                <div className="product__main">
                  <span className="product__name">{roseWine.name}</span>
                  <span className="product__space"></span>
                  <span className="product__price">{roseWine.price}€</span>
                </div>
  
                <span className="product__description">{roseWine.description}
                </span>
              </li>
              ))}
            </ul>

            <h1 className="wines__title title" id="sparkling_wine">{t('header.sparkling_wines')}</h1>
            <ul className="wines__list">
              {sparklingWines.map(sparklingWine => (
                <li className="product">
                <div className="product__main">
                  <span className="product__name">{sparklingWine.name}</span>
                  <span className="product__space"></span>
                  <span className="product__price">{sparklingWine.price}€</span>
                </div>
  
                <span className="product__description">{sparklingWine.description}
                </span>
              </li>
              ))}
            </ul>
          </div>
        </section>

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
        <h1 className="drinks__title title" id="coffee">{t('header.coffee')}</h1>
          <ul className="drinks__list">
            {coffeeFromServer.map(coffee => (
              <li className="product">
              <div className="product__main">
                <span className="product__name">{coffee.name}</span>
                <span className="product__space"></span>
                <span className="product__price">{coffee.price}€</span>
              </div>

            </li>
            ))}
          </ul>

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
      
        
      </main>

    </div>
  );
}
