import { JSX } from "react";
import { Link } from "react-router-dom";


function ErrorPage(): JSX.Element {
    return(
        <div className="container-error">
        <div className="emoji">😕</div>
        <h1>404</h1>
        <p>Упс! Страница, которую вы ищете, не найдена.</p>
        <p>Возможно, она была удалена, перемещена или никогда не существовала.</p>
        <p>
          Вернитесь на <Link to="/">главную страницу</Link> или воспользуйтесь поиском.
        </p>
      </div>    
      );
    }

export default ErrorPage;
    