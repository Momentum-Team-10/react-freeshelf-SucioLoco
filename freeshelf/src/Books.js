import { useState } from 'react'

function Book(props) {
    let { title, author, url, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props

    let [expanded, setExpanded] = useState(false)


    return (
        <div className='book'>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{shortDescription}</p>
            <img src={coverImageUrl} alt="missing image"/>
        </div>

    )
}
export default Book