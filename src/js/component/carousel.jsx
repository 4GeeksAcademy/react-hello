import React from 'react';
import Card from './card';

const Carousel = () => {
 
  const cardData = [
    { id: 1, title: 'Card 1', text: 'Some text for card 1', image: '../../src/img/puppy.png' },
    { id: 2, title: 'Card 2', text: 'Some text for card 2', image: '../../src/img/puppy.png' },
    { id: 3, title: 'Card 3', text: 'Some text for card 3', image: '../../src/img/puppy.png' },
    { id: 4, title: 'Card 4', text: 'Some text for card 4', image: '../../src/img/puppy.png' },
  ];

  return (
    <div className='d-flex justify-content-around' >
        <div className="carousel  justify-content-between d-md-flex">
        {cardData.map((card) => (
            <Card key={card.id} title={card.title} text={card.text} image={card.image} />
        ))}
        </div>
    </div>
  );
};

export default Carousel;
