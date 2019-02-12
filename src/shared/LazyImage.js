import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from './layout';

function LazyImage (props) {
    
    const [loading, setLoading] = useState(true)
    const [image, setImage] = useState(null)
    
    useEffect(()=>{
        let image = new Image()
        image.src = props.imageUrl
        image.onload = imageLoaded
        setImage(image)

    }, [])

    const imageLoaded = (event) => {
        setLoading(false)
    }
    if(loading)
        return (<Spinner className={'valign-wrapper image-preloader'} />)

    return <img src={image.src} />
}

LazyImage.propTypes = {
    imageUrl: PropTypes.string,
}

export default LazyImage