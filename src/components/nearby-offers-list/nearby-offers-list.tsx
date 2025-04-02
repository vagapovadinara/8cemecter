import { OffersList } from "../../types/offer";
import NearbyOfferCard from "../nearby-offer-card/nearby-offer-card";

type NearbyOffersListProps = {
  offersList: OffersList[];
  onHover: (id: string | null) => void;
};

function NearbyOffersList({ offersList, onHover }: NearbyOffersListProps) {
  return (
    <div className="near-places__list places__list">
      {offersList.map((item) => (
        <NearbyOfferCard
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

export { NearbyOffersList };
