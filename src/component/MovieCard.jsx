import React,{useEffect,useState} from 'react'
import { BiMoviePlay} from 'react-icons/bi';
import axios from "axios";



const MovieCard = () => {

    const [movies,setMovies]  = useState([])
    

    useEffect(() => {
        const options = {
          method: 'GET',
          url: 'https://movies-app1.p.rapidapi.com/api/movies',
          headers: {
            'X-RapidAPI-Key': 'f6e5d97f48msh0061ec0f8bcec65p19f169jsn15557ae0375f',
            'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
          }
        };
        
        axios.request(options)
        .then(function (response) {
            setMovies(response.data);

        }).catch(function (error) {
            console.error(error);
    });
    
    },[])
    console.log(movies.results)

  return (
    <>
        <div className='card__container'>
            <div className='card__logo'>
                <h1>Movie Galleria <BiMoviePlay size={20}/></h1>
                <h2>Start SlideShow</h2>
            </div>
            <div className='card__content__container'>
        {
            movies?.results?.map((moc,i)=>(
                <div className='card__content'>
                    <img src={moc?.image} alt=""/>
                    <div className='card__title'>
                        <h3 >{moc?.title}</h3>
                        <h3 >{moc?.rating}</h3>

                    </div>
                    
                </div>
            ))
        }
        </div>
        </div>

        
    </>
  )
}

export default MovieCard