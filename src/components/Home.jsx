import Gallery from "./Gallery";

const Home = (props) => {
    return (
        < section >
            <Gallery title='Trending Now' source={`${props.url}${'jurassic%20park'}`} />
            <Gallery title='Watch It Again' source={`${props.url}${'dungeons%20dragons'}`} />
            <Gallery title='New Releases' source={`${props.url}${'star%20wars'}`} />
        </section >
    )
}

export default Home;