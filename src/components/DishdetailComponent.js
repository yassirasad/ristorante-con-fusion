import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function renderDish(dish) {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle><strong>{dish.name}</strong></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function renderComments(comments) {
    if(comments === null)
        return(<div></div>)
    
    comments = comments.map(c => {
        return(
            <li key={c.id}>
                <p>{c.comment}</p>
                <p> -- {c.author}, &nbsp;
                    {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                      }).format(new Date(c.date))
                    }
                </p>
            </li>
        );            
    });

    return(
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">{comments}</ul>
        </div>
    );
}


function DishDetail(props) {
    if(props.dish == null)
        return(<div></div>);
    else
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(props.comments)}
                    </div>
                </div>
            </div>
        );
}

export default DishDetail;