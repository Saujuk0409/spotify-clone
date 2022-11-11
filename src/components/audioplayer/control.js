import React from 'react'
import { IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
function Controls(props) {
    return (
        <div className="ap-audio_controls">
            <IconButton className="ap-prev" >
                <SkipPreviousIcon onClick={() => props.SkipSong(false)}/>
            </IconButton>
            <button className="ap-play" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                {props.isPlaying ? (<PauseIcon />) : (<PlayArrowIcon />)}
            </button>
            <button className="ap-next" >
                <SkipNextIcon onClick={() => props.SkipSong()}/>
            </button>
        </div>
    )
}

export default Controls