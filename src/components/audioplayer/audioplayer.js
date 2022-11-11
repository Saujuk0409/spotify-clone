import { useState, useRef, useEffect } from "react";
import Like from "../Like";
import { IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Controls from "./control";
import img1 from "../../assets/img/playlist5.jpeg"
import "./audioplayer.css";

const AudioPlayer = (props) => {
	const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
		console.log("You clicked me!!!!")
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

	return (
		<div className="audio_player">
			<div className="ap-left">
				<img src={img1} alt="song_img" />
				<div className="ap-song_info">
					<p className="ap-song_name">look up</p>
					<p className="ap-song_artist">Black Pink</p>
				</div>
			</div>
			<div className="ap-center">
				<div className="ap-audio_controls" >
					<div className="ap-prev" onClick={() => props.SkipSong(false)}>
						<SkipPreviousIcon className="ap-prev" />
					</div>
					<IconButton className="ap-play">
						{/* <PlayArrowIcon /> */}
						<i class="fa-solid fa-pause"></i>
					</IconButton>
					<IconButton className="ap-next">
						<SkipNextIcon />
					</IconButton>
				</div>
				{/* <div className="ap-progress_container">
					<p>0.30</p>
					<input
						type="range"
						step="1"
						min="0"
						max={4}
						className="ap-progress"
					/>
					<audio></audio>
					<p>4.00</p>
				</div> */}
				 {/* <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} /> */}
			</div>
			<div className="ap-right">
				<Like />
			</div>
		</div>
	);
};

export default AudioPlayer;