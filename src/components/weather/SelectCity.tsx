import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useWeather from "../../hooks/useWeather";
import Modal from "react-modal";
import useModal from "../../hooks/useModal";
import { City, CityOpts } from "../../util/weather";

interface FormData {
  city: string;
}

export const SelectCity = () => {
  const {
    searchLocation,
    addCitytoStorage,
    getCityFromStorage,
    removeCityFromStorage,
  } = useWeather();
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
            <option value="">Choose The City</option>
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
              cardClick(e, el?.city);
            }}
            className="relative flex h-full w-full basis-32 cursor-pointer flex-col items-center justify-center rounded-xl border bg-black py-2 font-bold text-white transition-all hover:scale-110 hover:bg-secondaryBg xl:w-10 xl:py-0"
            key={i}
          >
            {el?.city}
            <button
              className="absolute top-2 right-1 p-2 "
              onClick={() => removeCityFromStorage.mutate(el?.city)}
            >
              <IoMdClose className="h-7 w-7" />
            </button>
          </li>
        ))}
        <button
          onClick={openModal}
          className="flex h-full w-full flex-col items-center justify-center rounded-xl border-2 text-gray-400 transition-colors hover:border-gray-700 hover:text-gray-700 xl:w-auto xl:px-6 xl:py-5"
        >
          <div className="text-3xl">+</div>
          <div>Add City</div>
        </button>
      </ul>
    </div>
  );
};
