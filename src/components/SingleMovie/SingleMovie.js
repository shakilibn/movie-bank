import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = (props) => {
    const {id, title, poster_path} = props.movie;
    return (
        <div className="col-md-3 my-3 mx-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                <Card.Body>
                    <div className="text-center">
                        <Card.Title>{title}</Card.Title>
                        <Button as={Link} to={`/movie/${id}`} variant="primary">Go somewhere</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleMovie;