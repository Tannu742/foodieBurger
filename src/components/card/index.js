import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

const FoodieCard = ({ img, title, para, btn }) => {
    return (
        <div className='orderBurger col'>
            <Card>
                <Card.Img className='orderImg' variant="top" src={img} />
                <Card.Body className='text-center'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{para}</Card.Text>
                    <Button className='orderBtn' variant="primary">{btn}</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FoodieCard;