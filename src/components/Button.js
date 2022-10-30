import { CircularProgress } from "@mui/material";
import "../styles/button.css";

const Button = ({ label, isFetching, ...rest }) => {
	return (
		<button {...rest} className="primary_btn">
			{isFetching ? (
				<CircularProgress size={25} style={{ color: "black" }} />
			) : (
				`${label}`
			)}
		</button>
	);
};

export default Button;