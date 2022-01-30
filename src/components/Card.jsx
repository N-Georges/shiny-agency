import React from 'react';
import PropTypes from 'prop-types'
import DefaultPicture from '../assets/starlord.png'
import styled from 'styled-components';

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight: bold;
`

const CardImage = styled.img`
    height: 80px;
    width: 90px;
    border-radius: 50%;
`

const Card = ({label, picture, title}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 15 }}>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <span>{title}</span>
        </div>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    title: '',
    label: '',
    picture: DefaultPicture,

}

export default Card;