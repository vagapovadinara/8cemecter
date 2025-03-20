import { JSX } from "react";
import { OfferList } from "../../types/offer";
import FavoritesCard from "../favorite-card/favorite-card";

type FavotitesCardListProps = {
    offersList : OfferList[];
};


function FavoritesCardList({offersList} : FavotitesCardListProps ): JSX.Element {
    return(
        <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>City</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                {Array.from(offersList, (item) =>
                  <FavoritesCard key={ item.id } id = { item.id } title = { item.title }  type = { item.type } price = { item.price } 
                            previewImage = { item.previewImage } isPremium = {item.isPremium} rating = { item.rating } />)}

                </div>
              </li>
        );
    }

export default FavoritesCardList;
    