import React from 'react'
import { useParams } from 'react-router-dom'
import { person } from '../dataDummy'


function DetailPerson() {
    const params = useParams()
    const index = params.id

  return (
    <div>

        <p>
            {person[index].name}
        </p>

    </div>
  )
}

export default DetailPerson