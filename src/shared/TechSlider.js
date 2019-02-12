import React, { Component } from 'react'
import PropTypes from 'prop-types'

const TechSlider = (props) => {
    return (
        <div className={'tech-section'}>
            <div className={'tech-title'}>Tech</div>
            <div className={'tech-list'}>
            { props.tech.map(t => <div key={t} className={'tech valign-wrapper text-center'}>{t}</div>) }
            </div>
        </div>
    )
}
TechSlider.propTypes = {
    tech: PropTypes.array,
}

export default TechSlider