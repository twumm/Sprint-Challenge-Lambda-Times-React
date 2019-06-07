import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const CardHeadlineDiv = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const CardAuthorDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const CardImgContainerDiv = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img {
    width: 40px;
  }
`;

const Card = ({ card }) => {
  return (
    <CardDiv>
      <CardHeadlineDiv>{card.headline}</CardHeadlineDiv>
      <CardAuthorDiv>
        <CardImgContainerDiv>
          <img src={card.img} alt="Article" />
        </CardImgContainerDiv>
        <span>By {card.author}</span>
      </CardAuthorDiv>
    </CardDiv>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
  })
}

export default Card;
