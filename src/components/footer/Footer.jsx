import { Link } from "react-router-dom";
import s from "./footer.module.scss";
import Logo from "../../assets/logo.png";
import Email from "../../assets/email.png";
import Telefone from "../../assets/telefone.png";
import Localizacao from "../../assets/localizacao.png";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.infos}>
        <div className={s.boxApresentacao}>
          <div className={s.boxLogo}>
            <img src={Logo} alt="Imagem de logo do site Médicos Voluntários" />
            <Link to="/">Médicos & Dentistas</Link>
          </div>
          <p>Saúde e cuidado sem barreiras para toda comunidade.</p>
        </div>
        <div className={s.boxContato}>
          <h3>Contato</h3>
          <div>
            <img src={Email} alt="simbolo de e-mail" />
            <p>contato@medico-dentista.org</p>
          </div>
          <div>
            <img src={Telefone} alt="simbolo de telefone" />
            <p>(11) 3000-0000</p>
          </div>
          <div>
            <img src={Localizacao} alt="simbolo de localização" />
            <p>São Paulo, Brasil</p>
          </div>
        </div>
        <div className={s.redes}>
          <h3>Redes Sociais</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
      <div className={s.copy}>
        <p>
          &copy; 2025 Médicos e Dentistas pela Comunidade. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
