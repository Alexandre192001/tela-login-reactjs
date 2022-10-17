import React, {Fragment} from 'react';
import Style from './footer.module.css';
import ImgFooter from '../../img/img-site-frutas.jpg'

export default function Footer(){
  return(
    <Fragment>
      <footer className={Style.sessao_footer}>
          <div className={Style.card_footer}>
            <img src={ImgFooter} alt="Img_Footer"></img>
          </div>

          <div className={Style.card_footer}>
              <h1 className={Style.title_footer}>FrutBen</h1>

              <div className={Style.redeSocial_footer}>
                <a href="https://www.linkedin.com/in/alexandre-j%C3%BAnior-front-end/">Linkedin</a>
                <a href="https://github.com/Alexandre192001">Github</a>
                <a href="https://frontend-alexandrejr.netlify.app/">Voltar</a>
              </div>
          </div>
      </footer>
    </Fragment>
  );
}