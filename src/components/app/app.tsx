import { JSX } from "react";
import MainPage from "../../pages/main-page/main-page";
import Favorites from "../../pages/favorites/favorites";
import Login from "../../pages/login/login";
import Offer from "../../pages/offer/offer";
import NotFound from "../../pages/not-found/not-found";
import { PrivateRoute } from "../private-route/private-route";
import { AppRoute } from "../../const";
import { FullOffer } from "../../types/offer";
import { AuthorizationStatus } from "../../const";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type AppProps = {
    offers: FullOffer[];
};

function App({ offers }: AppProps): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<MainPage />} />
                <Route
                    path={AppRoute.Favorites}
                    element={
                        <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                            <Favorites offers={offers} />
                        </PrivateRoute>
                    }
                />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={`${AppRoute.Offer}/:id`} element={<Offer offers={offers} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
