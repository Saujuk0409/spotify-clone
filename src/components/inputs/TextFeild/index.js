import Joi from "joi";
import  "./textfeild.css";

const TextField = ({
	label,
	error,
	handleInputState,
	handleErrorState,
	schema,
	...rest
}) => {
	const validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const inputSchema = Joi.object({ [name]: schema });
		const { error } = inputSchema.validate(obj);
		return error ? error.details[0].message : "";
	};

	const handleChange = ({ currentTarget: input }) => {
		if (schema) {
			const errorMessage = validateProperty(input);
			if (handleErrorState) handleErrorState(input.name, errorMessage);
		}
		handleInputState(input.name, input.value);
	};

	return (
		<div className="tfcontainer">
			<p className="tflabel">{label}</p>
			<input
				{...rest}
				onChange={handleChange}
				className={
					error ? `$"input" $ "error"` : `$"input" `
				}
			/>
			{error && (
				<p className="error_msg">
					<i class="fa-solid fa-eraser"></i> {error}
				</p>
			)}
		</div>
	);
};

export default TextField;