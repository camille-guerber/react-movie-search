import React from 'react'
import  { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addEntryInHistory } from '../actions/history'

const API_KEY = 'd713318e3cf352af2e666a5ffc69633f'
const API_BASE_URL = 'https://api.themoviedb.org/3/'
const API_LANGUAGE = 'fr-FR'
const API_SEARCH_MOVIE = 'search/movie'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w500'

const mapStateDiProps = (state) => ({
    history: state.history
})

const mapDispatchToProps = (dispatch) => ({
    addEntryInHistory
})

class Movie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie : '',
            results: [],
            isLoaded: false,
        }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.addEntryIntoHistory = this.addEntryIntoHistory.bind(this)
    }

    addEntryIntoHistory(title) {
        this.addEntryIntoHistory(title)
    }

    handleOnChange(e) {
        let value = e.target.value
        value ? this.setState({ movie: value }) : this.setState({ movie: ''})

        fetch(API_BASE_URL+API_SEARCH_MOVIE+'?api_key='+API_KEY+'&query='+encodeURI(value)+'&language='+API_LANGUAGE)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ results: result.results, isLoaded: true})
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({ isLoaded: true})
            }
        )
    }

    render() {
        const { title, results, isLoaded } = this.state
        const { history } = this.props
        const historyGet = history.map((movie, index) => {
            return (
                <li key={index}>{movie.title}</li>
            )
        })
        return (
            <div className="row">
                <div className="col-6 offset-3">
                    <h1>{title}</h1>
                    <input type="text" className="form-control form-control-lg text-center" placeholder="Entrez un titre de film" onChange={this.handleOnChange}></input>
                    
                    { results && isLoaded ?
                        (
                            <div>
                                <hr></hr>
                                {results.length > 1 ?
                                    (
                                        <h3>{results.length} résultats</h3>
                                    ) :
                                    (
                                        <h3>{results.length} résultat</h3>
                                    )
                                }
                                <div className="card-columns">
                                    {
                                        results.map((item, key) => (
                                            <div key={key} className="card">
                                                <img src={POSTER_PATH+'/'+item.poster_path} className="card-img-top" alt={item.title}/>
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.title}</h5>
                                                    <p>{item.vote_count} <i className="far fa-thumbs-up"></i></p>
                                                    <p>{item.vote_average}/10 <i className="fas fa-star-half-alt"></i></p>
                                                    <p className="card-text">{item.overview}</p>
                                                    <p className="card-text"><small className="text-muted">{item.release_date}</small></p>
                                                    <Link to={`/movie/${item.id}`}>Voir</Link>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ) :
                        (
                            <p></p>
                        )
                    }
                </div>
                <div className="col-3">
                    <ul>
                        {historyGet}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateDiProps, mapDispatchToProps)(Movie)
