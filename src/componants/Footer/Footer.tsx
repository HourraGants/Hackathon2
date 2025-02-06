import { SetStateAction, useState } from "react";
import "./Footer.css";

function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content: SetStateAction<string>) => {
    setModalContent(content);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  }

	return (
		<>
			<div className="footer-container">
				<div className="footer">
          <div>
            <p>Notre réseau</p>
          </div>
          <div className="footer-reseau">
            <div>
              <img src="../src/assets/pigeon.png" alt="pigeon" title="Pigeon Voyageur"/>
              <p>HomingBird</p>
            </div>
            <div>
              <img src="../src/assets/messager.png" alt="messager" title="Messager"/>
              <p>I'mSpeed</p>
            </div>
            <div>
              <img src="../src/assets/parchemin.png" alt="parchemin" title="Nos informations"/>
              <p>Informations</p>
            </div>
          </div>
          <div id="footer-mentions">
            <button
              type="button"
              className="footer-mentions-text"
              onClick={() => openModal("mentionsLegales")}>
              Mentions légales
            </button>
            <button
              type="button"
              className="footer-mentions-text"
              onClick={() => openModal("politiqueConfidentialite")}>
              Politique de confidentialité
            </button>
            <button
              type="button"
              className="footer-mentions-text"
              onClick={() => openModal("cgu")}>
              Conditions Générales d'Utilisation (CGU)
            </button>
          </div>
          {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button type="button" className="close-btn" onClick={closeModal}>
              X
            </button>
            <h2>{modalContent === "mentionsLegales" && "Mentions légales"}</h2>
            <h2>
              {modalContent === "politiqueConfidentialite" &&
                "Politique de Confidentialité"}
            </h2>
            <h2>
              {modalContent === "cgv" && "Conditions Générales de Vente (CGV)"}
            </h2>
            {/* Ici, tu peux afficher le contenu en fonction de `modalContent` */}
            <div className="modal-text">
              {modalContent === "mentionsLegales" && (
                <div className="modal-text-align">
                  <h2>Mentions légales - Guild'Emploi</h2>
                  <section>
                    <h3>1. Mentions légales</h3>
                    <p>
                      <strong>Créateur du site :</strong> Guild'Emploi
                    </p>
                    <p>
                      <strong>Endroit :</strong> Le château à Paris là.
                    </p>
                    <p>
                      <strong>Numéro de TVA intracommunautaire :</strong>{" "}
                      FR00000000001
                    </p>
                    <p>
                      <strong>Pigeon Voyageur de contact :</strong> demandez le Pigeon Olivier
                    </p>
                  </section>
                  <section>
                    <h3>
                      2. Accessibilité et services adaptés aux personnes
                      anormales
                    </h3>
                    <p>
                      S'il vous manque un bras ou une jambe, signalez-le dans votre candidature.
                    </p>
                    <p>
                      Les autres ne seront pas pris.
                    </p>
                    <p>
                      Désolé.
                    </p>
                  </section>
                  <h5>&copy; 1350 Guild'Emploi. Tous droits réservés.</h5>
                </div>
              )}
              {modalContent === "politiqueConfidentialite" && (
                <div className="modal-text-align">
                  <h2>Politique de Confidentialité - Guild'Emploi</h2>
                  <section>
                    <h3>1. Introduction</h3>
                    <p>
                      Guild'Emploi ne s'engage pas à protéger la vie privée de ses
                      utilisateurs. Cette politique de confidentialité décrit
                      comment nous collectons, utilisons, ne protégeons pas et
                      partageons vos données personnelles lorsque vous utilisez
                      notre site web ou nos services.
                    </p>
                    <p>
                      PS : Le clergé vous surveille.
                    </p>
                  </section>
                  <section>
                    <h3>2. Données personnelles collectées</h3>
                    <p>
                      Nous collectons des informations personnelles lorsque vous
                      vous inscrivez sur notre site, réservez un trajet ou
                      interagissez avec nous d'une autre manière. Ces
                      informations peuvent inclure :
                    </p>
                    <ul>
                      <li>Nom et prénom</li>
                      <li>Votre lieu de résidence</li>
                      <li>Si vous avez la Lèpre ou non</li>
                      <li>Si vous avez la Peste</li>
                      <li>Si vous avez la Variole</li>
                      <li>S'il vous manque un bras ou une jambe</li>
                      <li>Si vous avez une gangrène</li>
                    </ul>
                  </section>
                  <section>
                    <h3>3. Utilisation des données personnelles</h3>
                    <p>
                      Les données personnelles collectées sont utilisées pour :
                    </p>
                    <ul>
                      <li>Le clergé.</li>
                      <li>
                        Savoir où vous habitez.
                      </li>
                      <li>
                        Préparer des preuves contre vous si vous agissez mal.
                      </li>
                    </ul>
                    <p>
                      Nous partagerons vos données personnelles avec des
                      tiers à des fins commerciales sans votre consentement
                      explicite.
                    </p>
                  </section>
                  <section>
                    <h3>4. Droits des utilisateurs</h3>
                    <p>
                      Nous sommes en 1350. Vous n'avez aucun droit.
                    </p>
                    <p>
                      Désolé.
                    </p>
                  </section>
                  <section>
                    <h3>5. Partage des données</h3>
                    <p>
                      Nous pouvons partager vos données avec des prestataires de
                      services tiers (par exemple, pour les paiements ou la
                      gestion des réservations). Ces prestataires ne s'engagent pas à
                      respecter la confidentialité et la sécurité de vos
                      données. Nous vendons et louons vos données à des
                      tiers à des fins commerciales.
                    </p>
                  </section>
                  <h5>&copy; 1350 Guild'Emploi. Tous droits réservés.</h5>
                </div>
              )}
              {modalContent === "cgu" && (
                <div className="modal-text-align">
                  <h2>Conditions Générales d'Utilisation' - Guild'Emploi</h2>
                  <section>
                    <h3>1. Objet</h3>
                    <p>
                      Les présentes Conditions Générales d'Utilisation (CGU)
                      régissent l'ensemble des ventes de services de transport
                      proposées par Guild'Emploi, une société spécialisée dans l'exploitation
                      du personnel et dans le travail forcé.
                    </p>
                  </section>
                  <section>
                    <h3>2. Responsabilité</h3>
                    <p>
                      Guild'Emploi n'est pas responsable de la sécurité des
                      utilisateurs sur le site et au travail. Nous ne pouvons être
                      tenus responsables des objets personnels perdus ou
                      endommagés, de blessures durant l'ouvrage ou de maladies attrapées.
                    </p>
                  </section>
                  <section>
                    <h3>3. Modification des CGU</h3>
                    <p>
                      Nous nous réservons le droit de modifier ces conditions
                      générales d'utilisation à tout moment, et ce, sans que vous soyez au courant.
                    </p>
                    <p>
                      Evidemment.
                    </p>
                  </section>
                  <section>
                    <h3>4. Droit applicable et litiges</h3>
                    <p>
                      Les présentes CGU sont soumises à la législation
                      du château de Paris. En cas de litige, les tribunaux français ne seront
                      pas compétents.
                    </p>
                  </section>
                  <h5>&copy; 1350 Guild'Emploi. Tous droits réservés.</h5>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
				</div>
			</div>
		</>
	);
}
export default Footer;
