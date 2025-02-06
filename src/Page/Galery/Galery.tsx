import Cards from "../../componants/Card/Cards";

function Galery() {
	return (
		<>
			<Cards
				data={{
					id: 0,
					image: "",
					nom_du_poste: "",
					ville: "",
					date_debut: "",
					duree: "",
					description_du_poste: "",
					qualfication_requise: "",
					categorie: "",
					salaire: "",
				}}
			/>
		</>
	);
}

export default Galery;
