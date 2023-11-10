import '../styles/movies.css';


const containersMovies = (props) => {
    return (
        <section className='container__movies'>
            <h1 className='container__titulo'>peliculas</h1>
            <div className='container__peliculas'>
                {props.children} 
            </div>
        </section>

)
}

export default containersMovies
