import React, { useEffect, useLayoutEffect, useState } from 'react';
import './home.scss'
import Banner from './banner';
import axios from "axios";
import Row from './row';
import Footer from './footer';
const API_KEY = '4e455b71cbb55de4200e6f19420790c8'
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
}


const Home = () => {
    const [movies, setMovies] = useState([])



    useLayoutEffect(() => {
        console.log('useLayoutEffect run');
        async function fetchData() {
            console.log('func trun')
            const request = await axios.get(requests.fetchTopRated)
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request
        }
        fetchData()
    }, [])
    console.log('mounteds')

    useEffect(() => { console.log('render'); }
        , [])
    return (
        <div className='home'>

            <Banner
                movies={movies} />
            <Row
                setMovies={setMovies}
                isLargeRow
                title='Netflix Original'
                fetchUrl={requests.fetchNetflixOriginals}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Trending now'
                fetchUrl={requests.fetchTrending}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Top rated'
                fetchUrl={requests.fetchTopRated}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Action movies'
                fetchUrl={requests.fetchActionMovies}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Comedy movies'
                fetchUrl={requests.fetchComedyMovies}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Horror movies'
                fetchUrl={requests.fetchHorrorMovies}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Romance movies'
                fetchUrl={requests.fetchRomanceMovies}
                movies={movies} />
            <Row
                setMovie={setMovies}
                title='Documentaries'
                fetchUrl={requests.fetchDocumentaries}
                movies={movies} />
            <Footer />
        </div>
    )
}
export default Home