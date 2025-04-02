import { JSX, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { CitiesCardList } from "../../components/cities-card-list/cities-card-list";
import { Logo } from "../../components/logo/logo";
import { Link } from "react-router-dom";
import Map from "../../components/map/map";
import { changeCity } from "../../store/action";
import { CITIES_LOCATION } from "../../const";
import { getOffersByCity, sortOffersByType } from "../../utils";
import { SortOffer } from "../../types/sort";
import { SortOptions } from "../../components/sort-options/sort-options";

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);

  const cityName = selectedCity?.name ?? "Paris";

  const filteredOffers = getOffersByCity(cityName, offersList);

  const [hoveredOfferId, setHoveredOfferId] = useState<string | null>(null);
  const [lastHoveredOfferId, setLastHoveredOfferId] = useState<string | null>(null);
  const [activeSort, setActiveSort] = useState<SortOffer>('Popular');

  const sortedOffers = sortOffersByType(filteredOffers, activeSort);

  const handleHover = (id: string | null) => {
    setHoveredOfferId(id);
    if (id !== null) {
      setLastHoveredOfferId(id);
    }
  };

  const getCityLocation = (cityName: string) => {
    const city = CITIES_LOCATION.find((city) => city.name === cityName);
    return city ? city.location : CITIES_LOCATION.find((city) => city.name === "Amsterdam")?.location;
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="/favorites">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <p className="visually-hidden">Cities</p>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"].map((city) => (
                <li className="locations__item" key={city}>
                  <a
                    className={`locations__item-link tabs__item ${city === cityName ? 'tabs__item--active' : ''}`}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(changeCity({ name: city, location: { latitude: 0, longitude: 0, zoom: 8 } }));
                    }}
                  >
                    <span>{city}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <p className="visually-hidden">Places</p>
              <b className="places__found">{sortedOffers.length} places to stay in {cityName}</b>
              <SortOptions activeSorting={activeSort} onChange={setActiveSort} />
              <div className="cities__places-list places__list tabs__content">
                <CitiesCardList offersList={sortedOffers} onHover={handleHover} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={getCityLocation(cityName) ?? { latitude: 52.2226, longitude: 4.5322, zoom: 8 }}
                offers={sortedOffers}
                hoveredOfferId={hoveredOfferId}
                lastHoveredOfferId={lastHoveredOfferId}
                height="1277px"
                width="525px"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
