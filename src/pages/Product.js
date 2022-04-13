import React from 'react'
import { person } from '../dataDummy'
import {Link} from 'react-router-dom'


function Product() {
  return (
    <div>

        {person.map((item, index) => {
            return (
                
                <p><Link to={`/person/${index}`}>{item.name}</Link></p>
            )
        })}




    </div>
  )
}

export default Product