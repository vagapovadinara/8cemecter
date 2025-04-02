import { JSX } from "react";
import { useParams } from "react-router-dom";
import { Logo } from "../../components/logo/logo";
import NotFound from "../not-found/not-found";
import { FullOffer } from "../../types/offer";
import { reviews } from "../../mocks/reviews";
import ReviewForm from "../../components/review-form/review-form";
import ReviewsList from "../../components/reviews-list/reviews-list";
import Map from "../../components/map/map";
import { offersList } from "../../mocks/offers-list"; 
import { NearbyOffersList } from "../../components/nearby-offers-list/nearby-offers-list";
import { useState } from "react"; 


type OfferProps = {
  offers: FullOffer[];
};

function Offer({ offers }: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lastHoveredId, setLastHoveredId] = useState<string | null>(null);
  const handleHover = (id: string | null) => {
  setHoveredId(id);
  if (id !== null) {
    setLastHoveredId(id);
  }
};

  if (!offer) {
    return <NotFound />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Myemail@gmail.com</span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{offer.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${(offer.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro ? (
                    <span className="offer__user-status">
                      Pro
                    </span>) : null
                    } 
                  </div>
                <div className="offer__description">
                  <p className="offer__text">{offer.description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
              <ReviewForm />
            </div>
          </div>
          <div className="offer__map-container" style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
          <Map
  city={{
    latitude: offer.city.location.latitude,
    longitude: offer.city.location.longitude,
    zoom: offer.city.location.zoom,
  }}
  offers={offersList.slice(0, 3)}
  hoveredOfferId={hoveredId}
  lastHoveredOfferId={lastHoveredId}
  height="700px"
  width="1100px"
/>

          </div>
        </section>
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighborhood</h2>
          <NearbyOffersList offersList={offersList.slice(0, 3)} onHover={handleHover} />
        </section>
      </main>
    </div>
  );
}

export default Offer;
