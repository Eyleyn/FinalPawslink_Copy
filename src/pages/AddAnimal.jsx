import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditAnimal.module.css";
//import Form, { input, IForm } from "react-metaforms";

const AddAnimal = () => {
  const [imageSrc, setImageSrc] = useState("/image-38@2x.png");
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
    setShowSavedMessage(true);
    setTimeout(() => setShowSavedMessage(false), 3000);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.editAnimal}>
        <div className={styles.container3}>
          <b className={styles.animalInfo}>Animal Info</b>
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
              />
              <img
                className={styles.dataUploadIcon}
                alt=""
                src="/data-upload@2x.png"
              />
            </div>
            <input
              name="sex"
              label="Sex"
              type="select"
              className={styles.textfield5}
              options={[
                { value: "M", label: "Male" },
                { value: "F", label: "Female" },
              ]}
            />
            <input
              name="vaccinationDate"
              label="Vaccination Date"
              type="date"
              className={styles.textbox15}
            />
            <input
              name="neuterSpayDate"
              label="Neuter/Spay Date"
              type="date"
              className={styles.textbox16}
            />
            <input
              name="dewormingDate"
              label="Deworming Date"
              type="date"
              className={styles.textbox151}
            />
            <input
              name="traitsAndPersonality"
              label="Traits and Personality"
              type="textarea"
              className={styles.textarea1}
            />
            <input
              name="notes"
              label="Notes"
              type="textarea"
              className={styles.textarea11}
            />
            <input
              name="name"
              label="Name"
              type="text"
              className={styles.textbox13}
            />
            <input
              name="location"
              label="Location"
              type="text"
              className={styles.textboxLocation}
            />
            <input
              name="status"
              label="Status"
              type="select"
              className={styles.dropdownButton1}
              options={[
                { value: "Owned", label: "Owned" },
                { value: "On-Campus", label: "On Campus" },
                { value: "Adopted", label: "Adopted" },
              ]}
            />
            <input
              name="age"
              label="Age"
              type="text"
              className={styles.textbox131}
            />
            <input
              name="specie"
              label="Specie"
              type="select"
              className={styles.dropdownButton11}
              options={[
                { value: "Dog", label: "Dog" },
                { value: "Cat", label: "Cat" },
              ]}
            />
            {/* Save and Cancel Buttons */}
            <div className={styles.button22}>
              <button type="submit" styles = {styles.button22}>
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


export default AddAnimal;

