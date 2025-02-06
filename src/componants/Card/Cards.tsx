import "./Cards.css";

// interface EmploisProps {
// 	data: {
// 		id: number;
// 		image: string;
// 		nom_du_poste: string;
// 		ville: string;
// 		date_debut: string;
// 		duree: string;
// 		description_du_poste: string;
// 		qualification_requise: string;
// 		categorie: string;
// 		salaire: string;
// 	};
// }
interface JobsArray {
	data: {
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
	};
}

function emplois({ data }: JobsArray) {
	return (
		<>
			<div className="containerCard">
				<img className="categorie" src={data.image} alt="coucou" />

				<div className="infoCard">
					<h2>{data.nom_du_poste}</h2>

					<p>{data.ville}</p>
					<div>
						<h3>Date du début:</h3>
						<p>{data.date_debut}</p>
					</div>
					<div>
						<h3>Durée de la mission:</h3>
						<p>{data.duree}</p>
					</div>
					<div>
						<h3>Description de la mission:</h3>
						<p>{data.description_du_poste}</p>
					</div>
					<div>
						<h3>Qualifications requises:</h3>
						<p>{data.qualification_requise}</p>
					</div>
					<div>
						<h3>Categorie:</h3>
						<p>{data.categorie}</p>
					</div>
					<div>
						<h3>Salaire:</h3>
						<p>{data.salaire}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default emplois;
