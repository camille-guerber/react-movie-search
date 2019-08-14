import React from 'react'

import '../css/showmovie.css'

const API_KEY = 'd713318e3cf352af2e666a5ffc69633f'
const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_LANGUAGE = 'fr-FR'
const API_DETAILS_MOVIE = '/movie'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

class ShowMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            movie: this.getMovieData(),
        }
        this.getMovieData = this.getMovieData.bind(this)
    }

    getMovieData() {
        const { id } = this.props.match.params
        const path = API_BASE_URL+API_DETAILS_MOVIE+'/'+id+'?api_key='+API_KEY+'&language='+API_LANGUAGE

        fetch(path)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ isLoaded:true, movie: result })
                console.log(result)
            },
            (error) => {
                this.setState({ isLoaded:true })
                console.log(error)
            }
        )
    }

    render() {
        const { isLoaded, movie } = this.state
        
        return (
            <div>
                { isLoaded ?
                    (
                        <div className="row-fluid">
                            <div className="col-4 offset-4 jumbotron">
                                <h1 className="">{movie.title}</h1>
                                <hr></hr>
                                <h4 className="m-0">Genres</h4>
                                {movie.genres.map((item, key) => (
                                    <h5 className="d-inline mr-1"><span className="badge badge-primary" key={key}>{item.name}</span></h5>
                                ))}
                                <hr></hr>
                                <h4 className="m-0">Résumé</h4>
                                <p className="overview">{movie.overview}</p>
                                <hr></hr>
                                <div className="row text-center">
                                    <div className="col-4">
                                        <p><i className="far fa-thumbs-up"></i> {movie.vote_count}</p>           
                                    </div>
                                    <div className="col-4">
                                        <p><i className="fas fa-star-half-alt"></i> {movie.vote_average}/10</p>
                                    </div>
                                    <div className="col-4">
                                        <p><i className="fas fa-fire"></i>{movie.popularity}</p>
                                    </div>
                                    <img src={POSTER_PATH+'/'+movie.poster_path} className="card-img-top" alt={movie.title}/>
                                </div>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className="row text-center">
                            <div className="col-4 offset-4 jumbotron">
                                <p>Chargement ..</p>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ShowMovie