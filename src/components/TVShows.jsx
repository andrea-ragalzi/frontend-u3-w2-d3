import Gallery from "./Gallery";

const TVShows = (props) => {
    const series1 = 'thriller';
    const series2 = 'silicon%20valley';
    const series3 = 'attack%20on%20titan';
    return (
        <>
            <Gallery title='All time favorite series' source={`${props.url}${series1}`} />
            <Gallery title='Selezione per te di oggi' source={`${props.url}${series2}`} />
            <Gallery title='Serie Anime' source={`${props.url}${series3}`} />
        </>
    )
}

export default TVShows;