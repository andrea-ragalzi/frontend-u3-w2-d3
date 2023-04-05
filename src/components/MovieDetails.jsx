import { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

// dobbiamo recuperare da MovieDetails, un componente montato su una rotta
// dinamica, il valore di movieId, ovvero il parametro indicato nella rotta!

const getDetails = async (movie_imdbID) => {
    const url = `${props.endPoint}${props.myKey}&s=`;
    try {
        let response = await fetch(this.props.source);
        if (response.ok) {
            let data = await response.json()
            console.log(data);
            return data;
        } else {
            console.log('Errore nella chiamata');
        }
    } catch (error) {
        console.log(error);
        console.log('Errore nella chiamata');
    }
}


const MovieDetails = () => {
    const params = useParams()
    console.log('PARAMS OBJECT', params)

    const [movieToShow, setMovieToShow] = useState(null)

    useEffect(() => {
        setMovieToShow(getDetails(props));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} className="text-center my-2">
                    {movieToShow === null ? (
                        <div>LOADING...</div>
                    ) : typeof movieToShow === 'undefined' ? (
                        // <Navigate to="/notfound" />
                        <h2>404 - MOVIE NOT FOUND</h2>
                    ) : (
                        <Card>
                            <Card.Img variant="top" src={movieToShow.image} />
                            <Card.Body>
                                <Card.Title>{movieToShow.name}</Card.Title>
                                <Card.Text>{movieToShow.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default MovieDetails