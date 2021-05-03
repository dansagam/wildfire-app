import loaderspin from './loaderspin.gif'
const Loader = () => {
    return (
        <div className="loader">
            <img src={loaderspin} alt="loading spinner"/>
            <h1>Fetching Event</h1>
        </div>
    )
}

export default Loader
