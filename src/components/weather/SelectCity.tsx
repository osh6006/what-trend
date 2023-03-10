import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import Modal from "react-modal";
import useModal from "../../hooks/useModal";
import { City, CityOpts } from "../../util/weather";

interface FormData {
  city: string;
}

export const SelectCity = () => {
  const { searchLocation, addCitytoStorage, getCityFromStorage } = useWeather();
  const navigate = useNavigate();
  const { modalIsOpen, afterOpenModal, closeModal, customStyles, openModal } =
    useModal();
  const [formData, setFormData] = useState<FormData>({
    city: "",
  });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Submit form data
    if (formData.city !== "") {
      addCitytoStorage.mutate({ city: formData.city });
    }
    closeModal();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      city,
    }));
  };

  const cardClick = (e: React.MouseEvent, city: string) => {
    // search start!
    searchLocation.mutate(city, {
      onSuccess: (data: any) => {
        console.log(data[0].name);
        navigate(`/weather/${data[0]?.name}`, {
          state: { latitude: data[0]?.lat, longitude: data[0]?.lon },
        });
      },
    });
  };

  return (
    <div className="mt-10">
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <h2 className="font-bold">Choose City</h2>
        <form className="flex gap-5 p-10" onSubmit={handleFormSubmit}>
          <select
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
          >
            <option selected value="">
              Choose The City
            </option>
            {CityOpts.map((data: City) => (
              <option value={data.city} key={data.city}>
                {data.city}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded-md bg-black px-2 py-2 text-white hover:bg-secondaryBg"
          >
            Choose
          </button>
        </form>
      </Modal>

      <ul className="flex h-[160px] flex-col items-center justify-around gap-3 xl:flex-row">
        {getCityFromStorage?.data.map((el: City, i: number) => (
          <li
            onClick={e => {
              cardClick(e, el.city);
            }}
            className="flex h-full w-full basis-32 cursor-pointer flex-col items-center justify-center rounded-xl border bg-emerald-900 py-2 font-bold text-white transition-all hover:scale-110 xl:w-10 xl:py-0"
            key={i}
          >
            {el.city}
          </li>
        ))}
        <button
          onClick={() => {}}
          className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 text-gray-400 transition-colors hover:border-gray-700 hover:text-gray-700 xl:w-auto xl:px-6 xl:py-5"
        >
          <div className="text-3xl">+</div>
          <div onClick={openModal}>Add City</div>
        </button>
      </ul>
    </div>
  );
};
