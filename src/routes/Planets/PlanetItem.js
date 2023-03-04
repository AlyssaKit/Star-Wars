import React from 'react'
import planet from '../../data/planets.json'
import { Link, useParams } from 'react-router-dom'

function PlanetItem() {
    const { planetItem } = useParams()
    const  planetItemData = planet[planetItem]
    function filmprint (){
        const filmLinks = []
        for (let i = 0; i < planetItemData.films.length; i++) {
            filmLinks.push(
                <li key={i}>
                    <Link to={planetItemData.films[i]} className="bodyLink">{planetItemData.films[i]}</Link>
                </li>
            )
        }
        return filmLinks
    }
    function residentPrint (){
        const residentLinks = []
        for (let i = 0; i < planetItemData.residents.length; i++) {
            residentLinks.push(
                <li key={i}>
                    <Link to={planetItemData.residents[i]} className="bodyLink">{planetItemData.residents[i]}</Link>
                </li>
            )
        }
        return residentLinks
    }
        if(planetItemData === undefined){
            return (
                <div>
                    <h1>Error 404</h1>
                    <h2>Planet not found</h2>
                </div>
            )
        }else{
            return (
                <>
                    <div>
                        <h2>{planetItemData.name}</h2>
                        <h3>Rotation Period:</h3>
                        <p>{planetItemData.rotation_period}</p>
                        <h3>Orbital Period:</h3>
                        <p>{planetItemData.orbital_period}</p>
                        <h3>Diameter:</h3>
                        <p>{planetItemData.diameter}</p>
                        <h3>Climate:</h3>
                        <p>{planetItemData.climate}</p>
                        <h3>Gravity:</h3>
                        <p>{planetItemData.gravity}</p>
                        <h3>Terrain:</h3>
                        <p>{planetItemData.terrain}</p>
                        <h3>Surface Water:</h3>
                        <p>{planetItemData.surface_water}</p>
                        <h3>Population:</h3>
                        <p>{planetItemData.population}</p>
                        <h3>Residents:</h3>
                        <ul>
                            {residentPrint()}
                        </ul>
                        <h3>Films:</h3>
                        <ul>
                            {filmprint()}
                        </ul>
                    </div>
                </>
    )
        }
}

export default PlanetItem