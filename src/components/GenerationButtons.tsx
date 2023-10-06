import { PokemonContext } from "@/contexts/PokemonContext";
import { generations } from "@/helpers/generations";
import classNames from "classnames";
import React, { useContext } from "react";

const Generations = () => {
	const { activeGeneration, setActiveGeneration } = useContext(PokemonContext);

	/**
	 * This function changes the active generation
	 * @param generationId the generation number of which the pokemons are needed
	 */
	const changeGeneration = (generationId: number) => {
		setActiveGeneration(generationId);
	};

	// This function maps the generation from the generation array
	const mapGenerations = () => {
		return generations.map((generation, generationIndex) => {
			const pageNumber = classNames("generation__item", {
				"generation__item--active": generation === activeGeneration,
			});

			return (
				<li
					key={generationIndex}
					className={pageNumber}
					title={generation.toString()}
					onClick={() => changeGeneration(generation)}
				>
					{generation}
				</li>
			);
		});
	};

	return (
		<div className="generation">
			<h5 className="generation__title">Generations</h5>
			<ul className="generation__list flex flex--center">{mapGenerations()}</ul>
		</div>
	);
};

export default Generations;
