import HeaderHome from "../../componants/HeaderHome/HeaderHome";
import AnnoncesAccueil from "../../componants/AnnoncesAccueil/AnnoncesAccueil";
import Partenaires from "../../componants/Partenaires/Partenaires";

function Accueil() {
	return (
		<>
		<HeaderHome />
			<AnnoncesAccueil />
		<Partenaires />
		</>
	);
}
export default Accueil;
