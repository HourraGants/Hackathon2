import { useState } from "react";
import "./Partenaires.css";

function Partenaires() {
  const [isOpen, setIsOpen] = useState({
    charette: false,
    paysan: false,
    banque: false,
    mercenaire: false
});

const toggleDescription = (partner) => {
    setIsOpen((prevState) => ({
        ...prevState,
        [partner]: !prevState[partner]
    }));
};

    return (
        <>
          <div className="partenaires-container">
          <hr />
            <div className="partenaires">
              <div className="partenaire">
                <img src="../src/assets/charette.png" alt="charette" title="BlaBlaChar" className="partenaire-logo"/>
                <button className={`arrow-button ${isOpen.charette ? "open" : ""}`} onClick={() => toggleDescription("charette")}>
                ›
                </button>
                  <div className={`partenaire-description ${isOpen.charette ? "open" : ""}`}>
                    <p>
                      BlaBlaChar : Des charettes de transport pour tous vos besoins !
                      Ils nous accompagnent depuis la Grande Peste maintenant.
                    </p>
                  </div>
              </div>
              <div className="partenaire">
                <img src="../src/assets/paysan.png" alt="paysan" title="Syndicat des Pécores et Paysans en Colère (SPPC)" className="partenaire-logo"/>
                <button className={`arrow-button ${isOpen.paysan ? "open" : ""}`} onClick={() => toggleDescription("paysan")}>
                ›
                </button>
                  <div className={`partenaire-description ${isOpen.paysan ? "open" : ""}`}>
                    <p>
                      Syndicat des Pécores et Paysans en Colère (SPPC) : Unité et solidarité paysanne !
                      Le Syndicat nous suit depuis quelques mois maintenant, et les révoltes se sont arrêtées !
                    </p>
                  </div>
              </div>
              <div className="partenaire">
                <img src="../src/assets/banque.png" alt="banque" title="Banque d'Or" className="partenaire-logo"/>
                <button className={`arrow-button ${isOpen.banque ? "open" : ""}`} onClick={() => toggleDescription("banque")}>
                ›
                </button>
                  <div className={`partenaire-description ${isOpen.banque ? "open" : ""}`}>
                    <p>
                      Banque d'Or : Pour gérer votre argent en tout sécurité !
                      Vous nous prêtez votre argent, et on vous ne le rend p... On vous le rends avec des interêts.
                    </p>
                  </div>
              </div>
              <div className="partenaire">
                <img src="../src/assets/mercenaire.png" alt="mercenaire" title="La Compagnie Merco" className="partenaire-logo"/>
                <button className={`arrow-button ${isOpen.mercenaire ? "open" : ""}`} onClick={() => toggleDescription("mercenaire")}>
                ›
                </button>
                  <div className={`partenaire-description ${isOpen.mercenaire ? "open" : ""}`}>
                    <p>
                      La Compagnie Merco : Des mercenaires qui protègent nos routes depuis quelques années maintenant !
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </>
    );
}
export default Partenaires;
