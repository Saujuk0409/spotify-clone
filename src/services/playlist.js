import axios from "axios"

export const getplayList = async() => {
    console.log("inside getplaylist in services")
    const playlist = await axios.get("http://192.168.1.54:3000/playlist/public/playlists/0");
    console.log("jhskshdksj")
    console.log(playlist);
    return playlist.data;
}