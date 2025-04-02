import { OffersList } from "../../types/offer";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
  offersList: OffersList[];
  onHover: (id: string | null) => void;
};

function CitiesCardList({ offersList, onHover }: CitiesCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => (
        <CitiesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          previewImage={item.previewImage}
          isPremium={item.isPremium}
          rating={item.rating}
          onHover={onHover}
        />
      ))}
    </div>
  );
}

export { CitiesCardList };
