import React from 'react'
import '../sass/components/button.scss'

function Button(props) {
    const {type, content} = props
    return (
        <button className={type}>{content}</button>
    )
}

export default Button
