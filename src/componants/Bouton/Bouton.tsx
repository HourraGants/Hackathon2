import "./Bouton.css";

interface BoutonProps {
	editText: string;
	myClassName: string;
}

const Bouton: React.FC<BoutonProps> = ({ editText, myClassName }) => (
	<>
		<button className={myClassName} type="button">
			{editText}
		</button>
	</>
);

export default Bouton;
