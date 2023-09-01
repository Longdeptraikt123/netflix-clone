import React, { useState } from "react";
import './banner.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import { AiFillCloseCircle } from 'react-icons/ai';
const Banner = (props) => {
    const { movies } = props
    const threeDot = (string, number) => {
        return string?.length > number ? string.substr(0, number - 1) + ' . . .' : string
    }
    const description = movies?.overview
    const title = movies?.title
    const [toggleInfo, setToggleInfo] = useState(false)
    return (
        <div style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}
            className="banner">
            <div className="banner_content">
                <h1 className="banner_title">{title}</h1>
                <h1 className="banner_description">
                    {threeDot(description, 148)}
                </h1>
                <div className="banner_buttons">
                    <button onClick={() => alert('I do not have films api :(')} className="banner_button">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button onClick={() => setToggleInfo(true)} className="banner_button">
                        <InfoIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
            <div className="banner_films_info">
                {toggleInfo && (
                    <div className="banner_films_info_box">
                        <AiFillCloseCircle id="icon_close" onClick={() => setToggleInfo(false)} />
                        <div className="banner_films_info_box_content">
                            <img src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`} alt="error_img" />
                            <h1>{title}</h1>
                            <div className="banner_films_info_box_content_description">
                                <p id="p1">{description}</p>
                                <p>Release date: {movies?.release_date}</p>

                                <button onClick={() => alert('I do not have films api :(')} className="banner_films_info_box_button">
                                    <PlayArrowIcon />
                                    <span>Play</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="banner_fade_bottom" />
        </div>

    )
}
export default Banner
