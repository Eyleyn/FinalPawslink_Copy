import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./EditAnimal.module.css";
import top_logo from "../assets/image-23@2x.png";
import { localMachineIpAddress } from "./EventFile";


// Loading component
const Loading = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loadingCircle}></div>
    <div className={styles.loadingText}>Loading</div>
  </div>
);

const EditAnimal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const animal = location.state;
  const { imgUrl, onEditSuccess } = animal;
  const [imageUrl, setImageUrl] = useState(undefined);
  const [loading, setLoading] = useState(false); // Add loading state
  const [imageSrc, setImageSrc] = useState(animal.image || "/image-26@3x.png");
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    _id: animal._id,
    sex: animal.sex || "",
    sterilizationDate: animal.sterilizationDate || "",
    dewormingDate: animal.dewormingDate || "",
    traitsAndPersonality: animal.traitsAndPersonality || "",
    notes: animal.notes || "",
    mainName: animal.mainName || "",
    location: animal.location || "",
    status: animal.status || "",
    age: animal.age || "",
    species: animal.species || "",
    vaccinationDate: animal.vaccinationDate || "",
  });

  useEffect(() => {
    getImageUrl();
  }, []);

  const [updatedAnimal, setUpdatedAnimal] = useState(null);
  const [showSavedMessage, setShowSavedMessage] = useState(false);

  const getImageUrl = async () => {
    await axios
      .get(`http://${localMachineIpAddress}:3030/api/getImageUrl?objectKey=${animal.imgUrl}`)
      .then((result) => {
        console.log(result.data);
        setImageUrl(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchUpdatedAnimal = async () => {
    try {
      const response = await axios.get(`http://${localMachineIpAddress}:3030/api/getanimals?id=${animal.id}`);
      setUpdatedAnimal(response.data);
    } catch (error) {
      console.error("Error fetching updated animal data:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loading indicator

    const data = new FormData();
    if (imageFile) data.append("image", imageFile);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.put(
        `http://${localMachineIpAddress}:3030/api/updateAnimal`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      console.log("Response Data:", response.data);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
      if (onEditSuccess) onEditSuccess();
      //await fetchUpdatedAnimal(); 
      navigate("/dogs");
    } catch (error) {
      console.error("Error uploading data:", error);
    } finally {
      setLoading(false); 
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
    navigate("/dogs");
  };

  return (
    <form onSubmit={handleSubmit}>
      {loading && <Loading />} {/* Show loading indicator */}
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
            <img className={styles.image38Icon} alt="" src={imageUrl} />
            <div className={styles.button19}>
              <input
                type="file"
                id="photo-upload"
                onChange={handleImageChange}
                accept="image/*"
                className={styles.hiddenFileInput}
              />
              <img
                className={styles.dataUploadIcon}
                alt=""
                src="/data-upload@2x.png"
              />
              <label
                htmlFor="photo-upload"
                className={styles.customFileUpload}
              >
                Choose a Photo
              </label>
            </div>

            <div className={styles.fieldContainerSex}>
              <label className={styles.fieldLabelSex}>Sex</label>
              <select
                name="sex"
                className={styles.textfield5}
                value={formData.sex}
                onChange={handleChange}
              >
                <option value="Unknown">N/A</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
            </div>

            <div className={styles.fieldContainerVaccination}>
              <label className={styles.fieldLabelVaccination}>Vaccination Date</label>
              <input
                name="vaccinationDate"
                type="date"
                className={styles.textbox15}
                value={formData.vaccinationDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerSterilization}>
              <label className={styles.fieldLabelSterilization}>Neutering/Spay Date</label>
              <input
                name="sterilizationDate"
                type="date"
                className={styles.textbox16}
                value={formData.sterilizationDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerDeworming}>
              <label className={styles.fieldLabelDeworming}>Deworming Date</label>
              <input
                name="dewormingDate"
                type="date"
                className={styles.textbox151}
                value={formData.dewormingDate}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerTraits}>
              <label className={styles.fieldLabelTraits}>Traits and Personality</label>
              <textarea
                name="traitsAndPersonality"
                placeholder=""
                className={styles.textarea1}
                value={formData.traitsAndPersonality}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerNotes}>
              <label className={styles.fieldLabelNotes}>Notes</label>
              <textarea
                name="notes"
                placeholder=""
                className={styles.textarea11}
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerName}>
              <label className={styles.fieldLabelName}>Name</label>
              <input
                name="mainName"
                placeholder="Name"
                type="text"
                className={styles.textbox13}
                value={formData.mainName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerLoc}>
              <label className={styles.fieldLabelLoc}>Location</label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className={styles.textboxLocation}
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerStatus}>
              <label className={styles.fieldLabelStatus}>Status</label>
              <select
                name="status"
                className={styles.dropdownButton1}
                value={formData.status}
                onChange={handleChange}
              >
                <option value="unknown">N/A</option>
                <option value="owned">Owned</option>
                <option value="on-campus">On Campus</option>
                <option value="adopted">Adopted</option>
                <option value="transient">Transient</option>
                <option value="rainbow bridge">Rainbow Bridge</option>
              </select>
            </div>

            <div className={styles.fieldContainerAge}>
              <label className={styles.fieldLabelAge}>Age</label>
              <input
                name="age"
                type="text"
                placeholder="Age"
                className={styles.textbox131}
                value={formData.age}
                onChange={handleChange}
              />
            </div>

            <div className={styles.fieldContainerSpecies}>
              <label className={styles.fieldLabelSpecies}>Species</label>
              <select
                name="species"
                className={styles.dropdownButton11}
                value={formData.species}
                onChange={handleChange}
              >
                <option value="unknown">N/A</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>

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
        <img className={styles.image23Icon} alt="" src={top_logo} />
      </div>
    </form>
  );
};

export default EditAnimal;
