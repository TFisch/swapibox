import React from 'react';
import App from '../components/App/App.js'
import { getOpeningScrawl, cleanHomeworld, cleanSpecies, cleanPlanetData } from '../components/Helper/Helper.js'

export const fetchScrawl = async () => {
  const randomNumber = Math.floor(Math.random() * 6 + 1)
  let resolvedScrawl
  try {
    const response = await fetch(`https://swapi.co/api/films/${randomNumber}/`)
    const data = await response.json()
    return resolvedScrawl = await getOpeningScrawl(data)

  } catch (error) {
    // throw (new Error('Error fetching scrawl'))
    console.log(error.message);
  }
}

export const fetchPeopleData = async () => {
  let allPeople
  try {
    const response = await fetch(`https://swapi.co/api/people/`)
    const data = await response.json()
    const peopleData = await cleanHomeworld(data)
    return allPeople = await cleanSpecies(peopleData)
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchHomeWorld = async (planet) => {
  let homeworld
  try {
    const response = await fetch(planet)
    const data = await response.json()
    return homeworld = await data.name
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchPopulation = async (planet) => {
  let population
  try {
    const response = await fetch(planet)
    const data = await response.json()
    return population = await data.population
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchSpecies = async (peopleData) => {
  let species
  try {
    const response = await fetch(peopleData)
    const data = await response.json()
    return species = await data.name
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchPlanetData = async () => {
  let allPlanets
  try {
    const response = await fetch('https://swapi.co/api/planets/')
    const data = await response.json()
    const planetData = await cleanPlanetData(data)



  } catch (error) {
    console.log(error.message)
  }
}

export const fetchResidents = async (residentLinks) => {
  let fetchPlanetResidents
  const residents = residentLinks.reduce(async (residentNames, resident) => {
    const response = await fetch(resident)
    const residentList = await response.json()
    return residentNames = {'residents': residentList.name}
  }, {})
  console.log(residents)
}






