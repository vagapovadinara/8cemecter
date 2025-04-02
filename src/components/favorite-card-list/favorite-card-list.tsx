import { JSX } from "react";
import FavoriteCard from "../favorite-card/favorite-card";
import { FullOffer } from "../../types/offer";

type FavoriteCardListProps = {
  offers: FullOffer[];
};

function FavoriteCardList({ offers }: FavoriteCardListProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  const offersByCity = favoriteOffers.reduce((acc, offer) => {
    const city = offer.city.name;
    if (!acc[city]) {
      acc[city] = [];
    }
    acc[city].push(offer);
    return acc;
  }, {} as Record<string, FullOffer[]>);

  return (
    <section className="favorites">
      <h2 className="favorites__title">Saved listings</h2>
      <ul className="favorites__list">
        {Object.keys(offersByCity).map((city) => (
          <li key={city} className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offersByCity[city].map((offer) => (
                <FavoriteCard key={offer.id} offer={offer} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FavoriteCardList;