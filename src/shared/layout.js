import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import LazyImage from './LazyImage';
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
export const ProjectCardTile = (props) => (
    <span className={cx("card-title", props.className)}>
        {props.title} 
        <a href={props.url} target={'_blank'} className="project-link"><i className="material-icons tiny">open_in_new</i></a>        
        {props.icon && <i className="material-icons right">{props.icon}</i>}
    </span>
)
export const CardImage = (props) => (
    <div className="card-image waves-effect waves-block waves-light">
        <LazyImage imageUrl={props.imageUrl} />
    </div>
)
CardImage.propTypes = {
    imageUrl: PropTypes.string,
}

export const Spinner = (props) =>  (
    <div className={props.className}>
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div><div className="gap-patch">
                <div className="circle"></div>
            </div><div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
    </div>
)