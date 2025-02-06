import { useLoaderData } from "react-router-dom";
import Cards from "../Card/Cards";
import "./AnnoncesAccueil.css";

type AnnoncesArray = {
	id: number;
	image: string;
	nom_du_poste: string;
	ville: string;
	date_debut: string;
	duree: string;
	description_du_poste: string;
	qualification_requise: string;
	categorie: string;
	salaire: string;
}[];

function AnnoncesAccueil() {
	const annoncesArray = useLoaderData() as AnnoncesArray;
	return (
		<>
			<ul className="annonces-list" id="annonces-list">
				{annoncesArray.slice(0, 3).map((annonce) => (
					<li key={annonce.id}>{<Cards data={annonce} />}</li>
				))}
			</ul>
		</>
	);
}

export default AnnoncesAccueil;
