import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Detail.css";

interface JobDetail {
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
}

function Detail() {
	const { id } = useParams<{ id: string }>(); // Récupérer l'ID depuis l'URL
	const [job, setJob] = useState<JobDetail | null>(null);

	useEffect(() => {
		const fetchJobDetail = async () => {
			try {
				const response = await axios.get(`http://localhost:4242/emplois/${id}`);
				setJob(response.data);
			} catch (error) {
				console.error(
					"Erreur lors de la récupération des détails de l'offre :",
					error,
				);
			}
		};

		if (id) {
			fetchJobDetail();
		}
	}, [id]);

	if (!job) {
		return <p>Chargement des détails de l'offre...</p>;
	}

	return (
		<>
			<div className="containerCard">
				<img className="categorie" src={job.image} alt={job.nom_du_poste} />

				<div className="infoCard">
					<div className="hautCard">
						<h2>{job.nom_du_poste}</h2>

						<div>
							<h3>Date du début :</h3>
							<p>{job.date_debut}</p>
						</div>
						<div>
							<h3>Durée de la mission :</h3>
							<p>{job.duree}</p>
						</div>
						<div>
							<h3>Description de la mission :</h3>
							<p>{job.description_du_poste}</p>
						</div>
						<div>
							<h3>Qualifications requises :</h3>
							<p>{job.qualification_requise}</p>
						</div>
						<div>
							<h3>Catégorie :</h3>
							<p>{job.categorie}</p>
						</div>
					</div>
					<div className="basCard">
						<button className="boutonGauche" type="button">
							{job.ville}
						</button>
						<button className="boutonGauche" type="button">
							{job.salaire}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
