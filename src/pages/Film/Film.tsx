import { FC } from 'react'
import { useParams } from 'react-router-dom'


const Film : FC = () => {
    const { id } = useParams()

    return (
        <div>Film with ID {id}</div>
    )
}

export default Film