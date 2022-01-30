import { Link } from "react-router-dom";
import React, { Component } from 'react'
import styled from "styled-components";

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        color: black;
    }
`

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <StyledLink to="/">Acceuil</StyledLink>
                    <StyledLink to="/survey/1">Questionnaire</StyledLink>
                    <StyledLink to="/freelances">Profils</StyledLink>
                </nav>
            </div>
        )
    }
}
