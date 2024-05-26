import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./EditAnimal.module.css";

const EditAnimal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dog = location.state;

  const [imageSrc, setImageSrc] = useState(dog.image || "/image-26@3x.png");
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    sex: dog.sex || "",
    sterilizationDate: dog.sterilizationDate || "",
    dewormingDate: dog.dewormingDate || "",
    traitsAndPersonality: dog.traitsAndPersonality || "",
    notes: dog.notes || "",
    mainName: dog.mainName || "",
    location: dog.location || "",
    status: dog.status || "",
    age: dog.age || "",
    species: dog.species || "",
    vaccinationDate: dog.vaccinationDate || "",
  });
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    if (imageFile) data.append("image", imageFile);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.put(`http://localhost:3030/api/addAnimal/${dog.id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response Data:", response.data);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    navigate("/dog-database");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.editAnimal}>
        <div className={styles.container3}>
          <b className={styles.animalInfo}>Edit Animal</b>
          <img
            className={styles.keyboardBackspace1}
            onClick={handleCancel}
            alt=""
            src="/keyboard-backspace-1@2x.png"
          />
          <div className={styles.container31}>
            <img className={styles.image38Icon} alt="" src={imageSrc} />
            <div className={styles.button19}>
              <label htmlFor="photo-upload" className={styles.chooseAPhoto}>
                Choose a Photo
              </label>
              <input
                type="file"
                id="photo-upload"
                onChange={handleImageChange}
                accept="image/*"
                className={styles.chooseAPhoto}
              />
              <img
                className={styles.dataUploadIcon}
                alt=""
                src="/data-upload@2x.png"
              />
            </div>
            <select
              name="sex"
              className={styles.textfield5}
              value={formData.sex}
              onChange={handleChange}
            >
              <option value="">Unknown</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>

            <input
              name="vaccinationDate"
              type="date"
              className={styles.textbox15}
              value={formData.vaccinationDate}
              onChange={handleChange}
            />
            <input
              name="sterilizationDate"
              type="date"
              placeholder="Neuter/Spay Date"
              className={styles.textbox16}
              value={formData.sterilizationDate}
              onChange={handleChange}
            />
            <input
              name="dewormingDate"
              type="date"
              className={styles.textbox151}
              value={formData.dewormingDate}
              onChange={handleChange}
            />
            <textarea
              name="traitsAndPersonality"
              placeholder="Traits and Personality"
              className={styles.textarea1}
              value={formData.traitsAndPersonality}
              onChange={handleChange}
            />
            <textarea
              name="notes"
              placeholder="Notes"
              className={styles.textarea11}
              value={formData.notes}
              onChange={handleChange}
            />
            <input
              name="mainName"
              placeholder="Name"
              type="text"
              className={styles.textbox13}
              value={formData.mainName}
              onChange={handleChange}
            />
            <input
              name="location"
              type="text"
              placeholder="Location"
              className={styles.textboxLocation}
              value={formData.location}
              onChange={handleChange}
            />
            <select
              name="status"
              className={styles.dropdownButton1}
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Owned">Owned</option>
              <option value="On-Campus">On Campus</option>
              <option value="Adopted">Adopted</option>
              <option value="Transient">Transient</option>
            </select>
            <input
              name="age"
              type="text"
              placeholder="Age"
              className={styles.textbox131}
              value={formData.age}
              onChange={handleChange}
            />
            <select
              name="species"
              className={styles.dropdownButton11}
              value={formData.species}
              onChange={handleChange}
            >
              <option value="Unknown">Unknown</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
            <div className={styles.button22}>
              <button type="submit" className={styles.save}>
                Save
              </button>
            </div>
            <div className={styles.button221}>
              <div className={styles.cancel} onClick={handleCancel}>
                Cancel
              </div>
            </div>
            {showSavedMessage && (
              <div className={styles.savedNotification}>Saved!</div>
            )}
          </div>
        </div>
        <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      </div>
    </form>
  );
};

export default EditAnimal;
