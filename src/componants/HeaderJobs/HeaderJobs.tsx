import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../../componants/Card/Cards";
import "./HeaderJobs.css";

type JobsArray = {
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

function HeaderJobs() {
	const jobsArray = useLoaderData() as JobsArray;
	const [selectedCategorie, setSelectedCategorie] = useState<string>("");
	const [selectedVille, setSelectedVille] = useState<string>("");
	const [filteredJobs, setFilteredJobs] = useState<JobsArray>(jobsArray);

	useEffect(() => {
		setFilteredJobs(
			jobsArray.filter((job) => {
				const matchCategorie = selectedCategorie
					? job.categorie === selectedCategorie
					: true;
				const matchVille = selectedVille ? job.ville === selectedVille : true;
				return matchCategorie && matchVille;
			}),
		);
	}, [selectedCategorie, selectedVille, jobsArray]);

	return (
		<>
			<img
				src="https://th.bing.com/th/id/OIP.TEnEY6tgmuHzHlfC0wgpYgHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7"
				alt="a random pecore with some cows"
			/>

			<form className="center">
				{/* Filtre par catégorie */}
				<label htmlFor="categorie-select">
					Filtrer par catégorie :{" "}
					<select
						id="categorie-select"
						value={selectedCategorie}
						onChange={(event) => setSelectedCategorie(event.target.value)}
					>
						<option value="">[ Catégorie ]</option>
						{[...new Set(jobsArray.map((job) => job.categorie))].map(
							(categorie) => (
								<option key={categorie} value={categorie}>
									{categorie}
								</option>
							),
						)}
					</select>
				</label>

				{/* Filtre par ville */}
				<label htmlFor="ville-select" style={{ marginLeft: "20px" }}>
					Filtrer par ville :{" "}
					<select
						id="ville-select"
						value={selectedVille}
						onChange={(event) => setSelectedVille(event.target.value)}
					>
						<option value="">[ Ville ]</option>
						{[...new Set(jobsArray.map((job) => job.ville))].map((ville) => (
							<option key={ville} value={ville}>
								{ville}
							</option>
						))}
					</select>
				</label>

				{/* Bouton pour réinitialiser les filtres */}
				<button
					type="button"
					onClick={() => {
						setSelectedCategorie("");
						setSelectedVille("");
					}}
					style={{ marginLeft: "20px" }}
				>
					Réinitialiser les filtres
				</button>
			</form>

			<ul className="cupcake-list" id="cupcake-list">
				{filteredJobs.map((job) => (
					<li key={job.id}>
						<Cards data={job} />
					</li>
				))}
			</ul>
		</>
	);
}

export default HeaderJobs;
