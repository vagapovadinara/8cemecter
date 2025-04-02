import { JSX } from "react";
import { Logo } from "../../components/logo/logo";
import { Link } from "react-router-dom";
import { AppRoute } from "../../const";

function NotFound(): JSX.Element {
    return (
        <div className="page page--gray page--not-found">
            <header className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__left">
                            <Logo />
                        </div>
                    </div>
                </div>
            </header>

            <main className="page__main page__main--not-found">
                <div className="page__not-found-container container">
                    <section className="not-found">
                        <h1 className="not-found__title">404 Not Found</h1>
                        <p className="not-found__message">Sorry, the page you are looking for does not exist.</p>
                        <Link to={AppRoute.Main}> 
                            <button className="not-found__button button">Go to Home</button>
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default NotFound;
