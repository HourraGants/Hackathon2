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
	const [filteredCategorie, setFilteredCategorie] =
		useState<JobsArray>(jobsArray);
	useEffect(() => {
		setFilteredCategorie(
			selectedCategorie
				? jobsArray.filter((job) => job.categorie === selectedCategorie)
				: jobsArray,
		);
	}, [selectedCategorie, jobsArray]);

	return (
		<div className="headerGalery">
			<img
				className="imageHeader"
				src="https://www.tourisme-occitanie.com/uploads/2021/1/la-cite-medievale-de-carcassonne_g-deschamps-crt-occitanie.jpg"
				alt="a random pecore with some cows"
			/>

			<form className="center">
				<label htmlFor="categorie-select">
					Filtrer par :{" "}
					{/* <select
						id="categorie-select"
						value={selectedCategorie}
						onChange={(event) => setSelectedCategorie(event.target.value)}
					>
						<option value="">---</option>
						{jobsArray.map((category) => (
							<option key={category.id} value={category.categorie}>
								{category.categorie}
							</option>
						))}
					</select> */}
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
			</form>

			<ul className="cupcake-list" id="cupcake-list">
				{filteredCategorie.map((job) => (
					<li key={job.id}>{<Cards data={job} />}</li>
				))}
			</ul>
		</div>
	);
}

export default HeaderJobs;
