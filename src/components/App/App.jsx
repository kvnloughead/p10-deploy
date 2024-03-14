import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { coordinates, APIkey } from "../../utils/constants";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const handleAddButton = () => {
    setActiveModal("add-garment");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  const [selectecdCard, setSelecetedCard] = useState("");
  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelecetedCard(card);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterData = filterWeatherData(data);
        setWeatherData(filterData);
      })
      .catch(console.error);
  });

  const [selectedWeather, setSelectedWeather] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedWeather(event.target.id);
    setIsChecked(event.target.checked);
  };

  const inputClassName = (id) =>
    isChecked && selectedWeather === id
      ? "modal__radio-inputs_checked"
      : "modal__radio-inputs";
  const labelClassName = (id) =>
    isChecked && selectedWeather === id
      ? "modal__label modal__label-radio_checked"
      : "modal__label modal__label-radio";

  return (
    <div className="page">
      <div className="page__section">
        <Header onAddButton={handleAddButton} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        title="New garment"
        buttonText="Add garment"
        activeModal={activeModal}
        closeActiveModal={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="modal__input"
            autoComplete="enabled"
          />
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image
          <input
            type="text"
            id="imageUrl"
            placeholder="Image URL"
            className="modal__input"
          />
        </label>
        <fieldset className="modal__radio-buttons">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="Hot" className={labelClassName("Hot")}>
            <input
              type="radio"
              id="Hot"
              name="weatherType"
              className={inputClassName("Hot")}
              checked={selectedWeather === "Hot"}
              onChange={handleRadioChange}
              required
            />
            Hot
          </label>
          <label htmlFor="Warm" className={labelClassName("Warm")}>
            <input
              type="radio"
              id="Warm"
              name="weatherType"
              className={inputClassName("Warm")}
              checked={selectedWeather === "Warm"}
              onChange={handleRadioChange}
              required
            />
            Warm
          </label>
          <label htmlFor="Cold" className={labelClassName("Cold")}>
            <input
              type="radio"
              id="Cold"
              name="weatherType"
              className={inputClassName("Cold")}
              checked={selectedWeather === "Cold"}
              onChange={handleRadioChange}
              required
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      {selectecdCard ? (
        <ItemModal
          activeModal={activeModal}
          card={selectecdCard}
          closeActiveModal={closeActiveModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
