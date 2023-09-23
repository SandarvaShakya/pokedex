import { Type } from '@/interfaces/Pokemon'
import React from 'react'

const PokemonType = ({ type }: Type) => {
    return (
        <div className='type'>{ type.name }</div>
    )
}

export default PokemonType