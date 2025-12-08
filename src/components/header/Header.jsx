import homeStyle from "./homeStyle.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={homeStyle.header}>
      <div>
        <img src="" alt="" />
        <Link to="/">Médicos e Dentistas</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/voluntario">Seja Voluntario</Link>
      </nav>
    </header>
  );
};

export default Header;
