import { useState, useEffect } from "react";
import TextField from "../inputs/TextFeild/index";
import FileInput from "../inputs/FileInput/FileInput";
import Button from "../../components/Button";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import defaultImg from "../../assets/songs/song-1.jpg";
import "./PlaylistModel.css";

const PlaylistModel = ({ closeModel, playlist }) => {
	const [data, setData] = useState({
		name: "",
		desc: "",
		img: "",
	});

	useEffect(() => {
		setData({ name: playlist.name, desc: playlist.desc, img: playlist.img });
	}, [playlist]);

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data);
	};

	return (
		<div className="pmmodel_container">
			<IconButton className="pmclose_btn" onClick={closeModel}>
				<CloseIcon />
			</IconButton>
			<div className="pmform_container">
				<h1>Edit Details</h1>
				<div className="pminput_container">
					<TextField
						label="Name"
						name="name"
						value={data.name}
						handleInputState={handleInputState}
					/>
				</div>
				<div className="pminput_container">
					<TextField
						label="Description"
						name="desc"
						value={data.desc}
						handleInputState={handleInputState}
					/>
				</div>
				<div className="pminput_container">
					<FileInput
						label="Choose Image"
						type="image"
						name="img"
						value={data.img === "" ? defaultImg : data.img}
						handleInputState={handleInputState}
					/>
				</div>
				<Button
					label="Submit"
					onClick={handleSubmit}
					style={{
						position: "absolute",
						bottom: "0",
						right: "0",
						margin: "1rem",
					}}
				/>
			</div>
		</div>
	);
};

export default PlaylistModel;