import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Row
} from 'reactstrap';

function RenderDish({ dish }) {
    return (<div className="col-12 col-md-5 m-1">
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    </div>);
}


function RenderComments({ comments }) {
    return (
        <div className="col-12 col-md-5 m-1">
            {comments.length > 0 && <h4>Comments</h4>}
            {comments.map((comment, index) => (
                <ul className="list-unstyled">
                    <li>
                        <p>{comment.comment} </p>
                        <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p>
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default (props) => {
    if (!props.dish) {
        return (
            <div></div>
        );
    }
    return (
        <div className="container">
            <Row>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </Row>
        </div>
    );


}