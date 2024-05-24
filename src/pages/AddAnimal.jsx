import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditAnimal.module.css";

const AddAnimal = () => {
  const [imageSrc, setImageSrc] = useState("/image-38@2x.png");
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const [vaccinationDate, setVaccinationDate] = useState(""); // Corrected state variable name
  const [neuterSpayDate, setNeuterSpayDate] = useState(""); // Corrected state variable name
  const [dewormingDate, setDewormingDate] = useState(""); // Corrected state variable name
  const navigate = useNavigate();

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

  const handleSave = () => {
    console.log("Data saved");
    console.log("Vaccination Date:", vaccinationDate);
    console.log("Neuter/Spay Date:", neuterSpayDate);
    console.log("Deworming Date:", dewormingDate);
    setShowSavedMessage(true); // Display the saved message
    setTimeout(() => setShowSavedMessage(false), 3000); // Hide the message after 3 seconds
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
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
              style={{ display: "none" }}
              onChange={handleImageChange}
              accept="image/*"
            />
            <img
              className={styles.dataUploadIcon}
              alt=""
              src="/data-upload@2x.png"
            />
          </div>
          <div className={styles.dropdownButton12}>
            <b className={styles.name}>Sex</b>
            <select className={styles.textfield5}>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          <div className={styles.textbox15}>
            <input type="date" className={styles.textfield} value={vaccinationDate}
              onChange={(e) => setVaccinationDate(e.target.value)}/>
            <b className={styles.vaccinationDate}>Vaccination Date</b>
          </div>
          <div className={styles.textbox16}>
            <input type="date" className={styles.textfield} value={neuterSpayDate}
              onChange={(e) => setNeuterSpayDate(e.target.value)}/>
            <b className={styles.vaccinationDate}>Neuter/Spay Date</b>
          </div>
          <div className={styles.textbox151}>
            <input type="date" className={styles.textfield} value={dewormingDate}
              onChange={(e) => setDewormingDate(e.target.value)} />
            <b className={styles.vaccinationDate}>Deworming Date</b>
          </div>
          <div className={styles.textarea1}>
            <b className={styles.traitsAndPersonality}>
              Traits and Personality
            </b>
            <textarea
              className={styles.textfield3}
              defaultValue={`

              `}
            />
          </div>
          <div className={styles.textarea11}>
            <b className={styles.traitsAndPersonality}>Notes</b>
            <textarea
              className={styles.textfield3}
              defaultValue={`

              `}
            />
          </div>
          <div className={styles.textbox13}>
            <b className={styles.name}>Name</b>
            <input
              type="text"
              className={styles.textfield5}
              defaultValue=" "
            />
          </div>
          <div className={styles.textboxLocation}>
            <b className={styles.name}>Location</b>
            <input
              type="text"
              className={styles.textfield5}
              defaultValue=" "
            />
          </div>
          <div className={styles.dropdownButton1}>
            <b className={styles.name}>Status</b>
            <select className={styles.textfield6}>
              <option value="Owned">Owned</option>
              <option value="On-Campus">On Campus</option>
              <option value="Adopted">Adopted</option>
            </select>
          </div>
          <div className={styles.textbox131}>
            <b className={styles.name}>Age</b>
            <input type="text" className={styles.textfield5} defaultValue="" />
          </div>
          <div className={styles.dropdownButton11}>
            <b className={styles.name}>Specie</b>
            <select className={styles.textfield5}>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>
          {/* Save and Cancel Buttons */}
          <div className={styles.button22}>
            <div className={styles.save} onClick={handleSave}>
              Save
            </div>
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
  );
};

export default AddAnimal;
