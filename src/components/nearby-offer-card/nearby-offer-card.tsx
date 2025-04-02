import CitiesCard from "../cities-card/cities-card";

type NearbyOfferCardProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  isPremium: boolean;
  previewImage: string;
  rating: number;
  onHover: (id: string | null) => void;
};

function NearbyOfferCard(props: NearbyOfferCardProps) {
  return <CitiesCard {...props} className="near-places__card" />;
}

export default NearbyOfferCard;
