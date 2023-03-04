import React from 'react'
import people from '../../data/people.json'
import { Link, useParams } from 'react-router-dom'

function PeopleItem() {
    const { peopleItem } = useParams()
    const  peopleItemData = people[peopleItem]
    function filmprint (){
        const filmLinks = []
        for (let i = 0; i < peopleItemData.films.length; i++) {
            filmLinks.push(
                <li key={i}>
                    <Link to={peopleItemData.films[i]} className="bodyLink">{peopleItemData.films[i]}</Link>
                </li>
            )
        }
        return filmLinks
    }
    if(peopleItemData === undefined){
        return (
            <div>
                <h1>Error 404</h1>
                <h2>Person not found</h2>
            </div>
        )
    }else{
        return (
        <>
            <div>
                <h2>{peopleItemData.name}</h2>
                <h3>Height:</h3>
                <p>{peopleItemData.height}</p>
                <h3>Mass:</h3>
                <p>{peopleItemData.mass}</p>
                <h3>Hair Color:</h3>
                <p>{peopleItemData.hair_color}</p>
                <h3>Eye Color:</h3>
                <p>{peopleItemData.eye_color}</p>
                <h3>Birth Year:</h3>
                <p>{peopleItemData.birth_year}</p>
                <h3>Gender:</h3>
                <p>{peopleItemData.gender}</p>
                <h3>Homeworld:</h3>
                <Link to={peopleItemData.homeworld} className="bodyLink">{peopleItemData.homeworld}</Link>
                <h3>Films:</h3>
                <ul>
                    {filmprint()}
                </ul>
            </div>
        </>
        )
    }
}

export default PeopleItem