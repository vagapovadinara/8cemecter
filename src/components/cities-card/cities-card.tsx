import { JSX } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

type CitiesCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  onHover: (id: string | null) => void;
  className?: string; 
};

function CitiesCard({ id, title, type, price, previewImage, isPremium, rating, onHover, className = "cities__card" }: CitiesCardProps): JSX.Element {
  return (
    <article
      className={`${className} place-card`}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro; {price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating / 5) * 100}%` }}></span>
            <span className="visually-hidden">Rating {rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            <p className="place-card__name">{title}</p>
          </Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
