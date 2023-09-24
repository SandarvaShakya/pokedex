import { generationBaseURI } from '@/constants/constants';
import { PokemonContext } from '@/contexts/PokemonContext';
import { generations } from '@/helpers/generations';
import axios from 'axios';
import classNames from 'classnames';
import React, { useContext, useEffect, useState } from 'react'

const Generations = () => {
    const { setPokemons, activeGeneration, setActiveGeneration } = useContext(PokemonContext)

    /**
     * This function fetches all the pokemons from the selected generation
     * @param generationId the generation nummber of which the pokemons are needed
     */
    const fetchGeneration = async (generationId : number) => {
        try {
            const { data: { pokemon_species } } = await axios.get(`${generationBaseURI}/${generationId}`)
            setPokemons(pokemon_species)
            setActiveGeneration(generationId)
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchGeneration(activeGeneration)
    }, [])

    // This function maps the generation from the generation array
    const mapGenerations = () => {
        return generations.map((generation, generationIndex) => {
            const pageNumber = classNames('generation__item', {
                'generation__item--active' : generation === activeGeneration
            })
            
            return <li 
                    key={ generationIndex } 
                    className={ pageNumber } 
                    title={generation.toString()}
                    onClick={() => fetchGeneration(generation)}
                >
                    { generation } 
                </li>
            
        })
    }

    return (
        <div className='generation'>
            <h5 className='generation__title'>Generations</h5>
            <ul className='generation__list flex flex--center'>
                { mapGenerations() }
            </ul>
        </div>
    )
}

export default Generations