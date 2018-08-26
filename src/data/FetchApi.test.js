import React from 'react';
import { fetchScrawl, 
        fetchPeopleData, 
        fetchVehicleData, 
        fetchResidents, 
        fetchPlanetData,
        fetchSpecies } from './FetchApi';
import { shallow } from 'enzyme';
import { cleanVehicles } from '../components/Helper/Helper.js';
import { MockData, 
        mockFilms, 
        mockVehicles, 
        mockResidentLinks, 
        mockResidentNames,
        mockPlanets, } 
        from './MockData';
import { fetchSpecies } from '../components/App/__mocks__/FetchApi';
// import { fetchPlanetData } from '../components/App/__mocks__/FetchApi';

describe('fetchScrawl', () => {

  it.skip('Should invoke fetch with the correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFilms)
    }))
    const expected = 'https://swapi.co/api/films/1/'
    const url = `https://swapi.co/api/films/1/`
    fetchScrawl(url)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  })
});

describe('fetchPeopleData', () => {

  it('Should invoke fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(MockData.people)
    }))
    const url = `https://swapi.co/api/people/`
    fetchPeopleData();
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('Should return an object', async () => {
    const result = await fetchPeopleData()
    expect(result).toEqual(MockData.people)
  });
})

// describe('fetchResidents', () => {

//   it('Should return an array', async () => {
//     const result = await fetchResidents(mockResidentLinks)
//     expect(result).toEqual(mockResidentNames)
//   });
// })

describe('fetchPlanetData', () => {
  it('should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPlanets)
    }))

    const url = 'https://swapi.co/api/planets/'
    fetchPlanetData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })
  it('Should retun an object of planet data', async () => {
    const result = await fetchPlanetData()
    expect(result).toEqual(mockPlanets)
  })
})

describe('fetchSpecies', () => {
  it('should invoke fetch with the correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(MockData.people)
    }))
    fetchSpecies()

  })
})


describe('fetchVehicleData', () => {

  it('Should invoke fetch with correct parameters', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockVehicles)
    }))

    const url = `https://swapi.co/api/vehicles/`
    fetchVehicleData()
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('Should return an object of vehicle data', async () => {
    const expected = await cleanVehicles(mockVehicles)
    const result = await fetchVehicleData()
    expect(result).toEqual(expected)
  })
})