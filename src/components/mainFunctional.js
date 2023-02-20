// Sometimes it takes a while to load the page
import React, { useState, useEffect } from "react";

import starwars from "../APIs/starwars";
import Column from "./Column";
import Modal from "./Modal";

import "../styles/mainFunctional.css";

function MainFunctional() {
  const [input, setInput] = useState("");

  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [currentOpenItem, setCurrentOpenItem] = useState(undefined);

  const [blurBg, setBlurBg] = useState("data");

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSearch = () => {
    setPeople(people.filter((item) => item.name.toLowerCase().includes(input)));
    setPlanets(
      planets.filter((item) => item.name.toLowerCase().includes(input))
    );
    setStarships(
      starships.filter((item) => item.name.toLowerCase().includes(input))
    );
  };

  const refresh = () => {
    window.location.reload();
  };

  const handleSort = () => {
    setPeople(
      [...people].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
    );
    setPlanets(
      [...planets].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
    );
    setStarships(
      [...starships].sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      })
    );
  };

  const handleDelete = (index, table) => {
    switch (table) {
      case "people":
        setPeople(people.filter((item) => item !== people.at(index)));
        break;
      case "planets":
        setPlanets(planets.filter((item) => item !== planets.at(index)));
        break;
      case "starships":
        setStarships(starships.filter((item) => item !== starships.at(index)));
        break;
      default:
        break;
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    starwars.getPeople().then((response) => {
      setPeople(response);
    });
    starwars.getPlanets().then((response) => {
      setPlanets(response);
    });
    starwars.getStarships().then((response) => {
      setStarships(response);
    });
  }, []);

  return (
    <div className="app">
      <div className="search-field">
        <input
          className="input"
          onChange={handleChange}
          type="text"
          id="search"
          value={input}
          maxLength="100"
          placeholder="Type anything to search ..."
        />

        <div className="search-field__tool">
          <button className="btn-special" onClick={handleSearch}>
            Search
          </button>
          {/* Refresh to clear input & reload data  */}
          <button className="btn-special" onClick={refresh}>
            Refresh
          </button>
          {/* Sort by name  */}
          <button className="btn-special" onClick={handleSort}>
            Sort
          </button>
        </div>
      </div>

      {showModal ? (
        <Modal
          currentOpenItem={currentOpenItem}
          toggleModal={toggleModal}
          setBlurBg={setBlurBg}
        />
      ) : null}

      {/* Display data */}
      <div className={blurBg}>
        <div className="data-column">
          <div className="data-column__title">People</div>
          {people.length > 0 ? (
            <Column
              toggleModal={toggleModal}
              table={people}
              name="people"
              handleDelete={handleDelete}
              setCurrentOpenItem={setCurrentOpenItem}
              setBlurBg={setBlurBg}
            />
          ) : (
            <h3>No results found</h3>
          )}
        </div>
        <div className="data-column">
          <div className="data-column__title">Planets</div>
          {planets.length > 0 ? (
            <Column
              toggleModal={toggleModal}
              table={planets}
              name="planets"
              handleDelete={handleDelete}
              setCurrentOpenItem={setCurrentOpenItem}
              setBlurBg={setBlurBg}
            />
          ) : (
            <h3>No results found</h3>
          )}
        </div>
        <div className="data-column">
          <div className="data-column__title">Star Ships</div>
          {starships.length > 0 ? (
            <Column
              toggleModal={toggleModal}
              table={starships}
              name="starships"
              handleDelete={handleDelete}
              setCurrentOpenItem={setCurrentOpenItem}
              setBlurBg={setBlurBg}
            />
          ) : (
            <h3>No results found</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainFunctional;
