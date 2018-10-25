import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row
} from 'reactstrap';

export default (props) => {
    if (!props.dish) {
        return (
            <div></div>
        );
    }
    return (
        <div className="container">
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
                        <ul className="list-unstyled">
                            <li>
                            <p>{comment.comment} </p>
                            <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                            </li>
                        </ul>
                    ))}
                </div>
            </Row>
        </div>
    );


}