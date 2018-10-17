import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row, ListGroup, ListGroupItem
} from 'reactstrap';

export default (props) => {
    if (!props.dish) {
        return (
            <div></div>
        );
    }
    return (
        <div>
            <Row>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>{props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">  
                    {props.dish.comments.length >0  && <h4>Comments</h4>}                  
                    {props.dish.comments.map((comment, index) => (
                        <ListGroup>
                            <ListGroupItem >
                            <p>{comment.comment} </p>
                            <p>{comment.author}, {comment.date} </p>
                            </ListGroupItem>
                        </ListGroup>
                    ))}
                </div>
            </Row>
        </div>
    );


}