import { useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../styles/like.css"

const Like = () => {
	const [like, setLike] = useState(false);

	return (
		<IconButton className="like_btn" onClick={() => setLike(!like)}>
			{!like ? (
				<FavoriteBorderIcon className="like_outlined" />
			) : (
				<FavoriteIcon className="like_filled" style={{color:"green"}}/>
			)}
		</IconButton>
	);
};

export default Like;