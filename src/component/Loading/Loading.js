import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Loading(props) {

    // styling
    const Loading = styled.div`
    border: ${props.width}px solid ${props.bgcolor};
    border-radius: 50%;
    border-top: ${props.width}px solid ${props.color};
    width: ${props.dimension}px;
    height: ${props.dimension}px;
    -webkit-animation: spin ${props.speed}s linear infinite;
    animation: spin ${props.speed}s linear infinite;
    @keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    `
    return (
        <Loading />
    )

}

// PropType

Loading.propTypes = {
    color: PropTypes.string,
    speed: PropTypes.number,
    bgcolor: PropTypes.string,
    dimension: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

// default PropTypes

Loading.defaultProps = {
    color: "blue",
    speed: 2,
    bgcolor: '#fafafa',
    dimension: 30,
    width: 5
}
