import { useState, Fragment } from "react";
import Song from "../components/song";
import PlaylistModel from "../components/PlaylistModel/PlaylistModel";
import { IconButton } from "@mui/material";
import playlistImg from "../assets/img/focus3.jpeg";
import peaches from "../assets/img/focus2.jpeg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/createplaylist.css";
import Navbar from "../components/Navbar";

const playlist = {
	_id: 1,
	img: playlistImg,
	name: "Today's Top Songs",
	desc: "By Jahangeer",
};

const songs = [
	{ _id: 1, img: peaches, name: "Peaches", artist: "Justin Bieber" },
];

const CreatePlaylist = () => {
	const [model, setModel] = useState(false);

	return (
		<>
		<Navbar showSearch={false}/>
		<div className="cp-container">
			<div className="cp-head">
				<div className="cp-head_gradient"></div>
				{playlist.img === "" ? (
					<img
						src="https://static.thenounproject.com/png/17849-200.png"
						alt={playlist.name}
						style={{ background: "#919496" }}
					/>
				) : (
					<img src={playlist.img} alt={playlist.name} />
				)}

				<div className="cp-playlist_info">
					<p>Playlist</p>
					<h1>{playlist.name}</h1>
					<span>{playlist.desc}</span>
				</div>

				<div className="cp-actions_container">
					<IconButton onClick={() => setModel(true)}>
						<EditIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
			<div className="cp-body">
				<div className="cp-body_nav">
					<div className="cp-left">
						<span>#</span>
						<p>Title</p>
					</div>
					<div className="cp-center">
						<p>Artist</p>
					</div>
					<div className="cp-right">
						<AccessTimeIcon />
					</div>
				</div>
				{songs.map((song) => (
					<Fragment key={song._id}>
						<Song song={song} playlist={playlist} />
					</Fragment>
				))}
			</div>
			{model && (
				<PlaylistModel closeModel={() => setModel(false)} playlist={playlist} />
			)}
		</div>
		</>
	);
};

export default CreatePlaylist;