import React, { useState } from "react";
import './row.scss'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import { TiTick } from 'react-icons/ti';


const Sliders = ({ film, image_url, isLargeRow }) => {
    const [isLike, setIsLike] = useState(true)
    const [isAdd, setIsAdd] = useState(false)
    const handleAdd = () => {
        setIsAdd(!isAdd)
    }
    const handleLike = () => {
        setIsLike(!isLike)
    }
    const handleCantPlay = () => {
        alert('I have no films api :((')
    }
    return (
        <>
            <div className="row_container">
                <img
                    key={film?.id}
                    className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                    src={`${image_url}${isLargeRow ? film?.poster_path : film?.backdrop_path}`} alt='' />
                <div className="row_icon">
                    {isLike ? <FavoriteBorderIcon onClick={handleLike} style={{ fontSize: '30px', margin: '0 10px' }} className="row_icon_item" /> : <FavoriteIcon style={{ fontSize: '30px', margin: '0 10px' }} onClick={handleLike} />}
                    <PlayCircleIcon onClick={handleCantPlay} style={{ fontSize: '30px', margin: '0 10px' }} className="row_icon_item" />
                    {isAdd ? <TiTick style={{ fontSize: '40px', margin: '0 10px' }} onClick={handleAdd} /> : <AddIcon style={{ fontSize: '40px', margin: '0 10px' }} onClick={handleAdd} />}
                </div>


            </div>
        </>
    )
}
export default Sliders