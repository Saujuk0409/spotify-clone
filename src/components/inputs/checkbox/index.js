import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./checkbox.css";

const CheckboxInput = ({ label, ...rest }) => {
	return (
		<FormControlLabel
			className="checkbox_container"
			control={
				<Checkbox
					{...rest}
					style={{ color: "#15883e"}}
					className="checkbox"
				/>
			}
			label={label}
            style={{backgroundColor:"white"}}
		/>
	);
};

export default CheckboxInput;