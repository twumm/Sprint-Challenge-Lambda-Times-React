import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const CardsContainerDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = ({ cards }) => {
  return (
    <CardsContainerDiv>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
        cards
          .map((card, index) => (
            <Card
              key={index}
              card={card}
            />
          )
        )    
      }
    </CardsContainerDiv>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array.isRequired
}

export default Cards;