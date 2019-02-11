import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
export const Section = (props) => (

    <section className={cx("section", { 'white': props.white }, props.containerClassName)}>
        <div className={cx("container", props.className, { 'white-text': !props.white })}>
            {props.children}
        </div>
        { props['leon-ledge'] 
            && 
            <div className="leon-ledge">
                <img src={'/assets/images/leonLedge.png'}/>    
            </div> 
        }
    </section>
)
Section.propTypes = {
    containerClassName: PropTypes.string,
}

export const Row = (props) => (
    <div className="row">
        {props.children}
    </div>
)

export const Col = (props) => (
    <div className={cx("col", props.sizes)}>
        {props.children}
    </div>
)

export const Card = (props) => (
    <div className={cx("card", props.className)}>
        {props.children}        
    </div>
)

export const CardContent = (props) => (
    <div className={cx("card-content", props.className)}>
        {props.children}
    </div>
)

export const CardReveal = (props) => (
    <div className={cx("card-reveal", props.className)}>
        {props.children}
    </div>
)

export const CardTitle = (props) => (
    <span className={cx("card-title", props.className)}>
        {props.title} 
        {props.icon && <i className="material-icons right">{props.icon}</i>}
    </span>
)
export const CardImage = (props) => (
    <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={props.imageUrl} />
    </div>
)
CardImage.propTypes = {
    imageUrl: PropTypes.string,
}