import { JSX } from "react";
// import MainPage from "../../pages/main-page/main-page";
// import Login from "../../pages/login/login";
// import Favorites from "../../pages/favorites/favorites";
// import Offer from "../../pages/offer/offer";
import Error from "../../pages/error/error";

type AppMainPageProps = {
    rentalOffersCount: number;
}

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
    return (
        // <MainPage rentalOffersCount={rentalOffersCount}/>
        // <Login/>
        // <Favorites/>
       // <Offer/>
       <Error/>
    );
}

export default App;