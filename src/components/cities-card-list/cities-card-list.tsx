import { OfferList } from "../../types/offer";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
    offersList : OfferList[];
};

function CitiesCardList ({offersList} : CitiesCardListProps ){
    return(
        <div className="cities__places-list places__list tabs__content">
            {Array.from(offersList, (item) =>
            <CitiesCard key={ item.id } id = { item.id } title = { item.title }  type = { item.type } price = { item.price } 
                            previewImage = { item.previewImage } isPremium = {item.isPremium} rating = { item.rating } />)}
            
        </div>
    );
}

export {CitiesCardList}