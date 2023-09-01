import './row.scss'
import React, { useRef, useLayoutEffect, useState } from 'react';
import Sliders from './sliders';
import axios from "axios";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";


const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const image_url = 'https://image.tmdb.org/t/p/w500/'
    const scrollRef = useRef(null)
    const [films, setFilms] = useState([])

    useLayoutEffect(() => {
        async function fetchData() {
            setIsLoading(true)
            const request = await axios.get(fetchUrl)
            setFilms(request.data.results);
            setIsLoading(false)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const scroll = (direction) => {
        const { current } = scrollRef
        direction === 'left' ? current.scrollLeft -= 310 : current.scrollLeft += 310
    }
    const [isLoading, setIsLoading] = useState(false)
    return (
        <div className='row'>

            <BsArrowLeftCircle className="row_navigate" onClick={() => scroll('left')}></BsArrowLeftCircle>
            <h2>{title}</h2>
            {!isLoading ? (
                <div ref={scrollRef} className='row_box'>



                    {films.map((film, id) => (
                        <>
                            <Sliders
                                key={id}
                                film={film}
                                image_url={image_url}
                                isLargeRow={isLargeRow}
                            />

                        </>
                    ))}
                </div>
            ) :
                <div
                    className='row_loading'>
                   <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>}

            <BsArrowRightCircle className="row_navigate-2" onClick={() => scroll('right')}></BsArrowRightCircle>
        </div>
    )
}
export default Row