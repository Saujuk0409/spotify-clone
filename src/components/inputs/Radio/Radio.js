import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import  "./Radio.css";
import { style } from "@mui/system";

const RadioInput = ({
	name,
	handleInputState,
	label,
	options,
	required,
	...rest
}) => {
	const handleChange = ({ currentTarget: input }) => {
		handleInputState(input.name, input.value);
	};

	return (
		<div className="rad-container" style={{ backgroundColor:"white"}}>
			<p>{label}</p>
			<div className="cont-2">
			<RadioGroup {...rest} row name={name} onChange={handleChange} style={{ backgroundColor:"white"}}>
				{options.map((option, index) => (
					<FormControlLabel
						key={index}
						value={option}
						control={
							<Radio
								disableRipple
								style={{ color:"white",backgroundColor:"white", transform: "scale(1.2)" }}
								required={required}
							/>
						}
						label={option}
						className="radio_input"
						style={{backgroundColor:"white"}}
					/>
				))}
			</RadioGroup>
			</div>
		</div>
	);
};

export default RadioInput;