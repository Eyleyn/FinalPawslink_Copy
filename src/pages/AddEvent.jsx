{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
**/}

import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import styles from "./AddEvent.module.css";
import upload_photo from "../assets/image-38@3x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { localMachineIpAddress } from "./EventFile";

const AddEvent = () => {
  const [eventDate, setEventDate] = useState(""); 
  const [imageFile, setImageFile] = useState(null);
  const [formData, setFormData] = useState({
    content: "",
    title: "",
    location: "",
    date: "",
  });
  const [showSavedMessage, setShowSavedMessage] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = new FormData();
    data.append("image", imageFile);
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
  
    console.log("Form Data Entries:", Object.fromEntries(data.entries()));

    try {
      const response = await axios.post(`http://localhost:3030/api/addEvent`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response Data:", response.data);
      setShowSavedMessage(true);
      setTimeout(() => setShowSavedMessage(false), 3000);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };
  
  const handleBack = () => {
    navigate("/dashboard");
  };

  const [imageSrc, setImageSrc] = useState(upload_photo);

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

  return (
    <form onSubmit={handleSubmit}>
      <LocalizationProvider>
        <div className={styles.addEvent}>
          <img
            className={styles.image23Icon}
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
          <main className={styles.container3Wrapper}>
            <section className={styles.container3}>
              <div className={styles.childContainer}>
                <div className={styles.keyboardBackspace1Wrapper}>
                  <img
                    className={styles.keyboardBackspace1}
                    onClick={handleBack}
                    loading="lazy"
                    alt=""
                    src={back_button}
                  />
                </div>
                <p className={styles.addAnEvent}>Add an Event</p>
              </div>
              <div className={styles.container3Container}>
                <div className={styles.container31}>
                  <img
                    className={styles.image46Icon}
                    loading="lazy"
                    alt=""
                    src={imageSrc}
                  />
                  <div className={styles.button19}>
                    <input 
                      type="file"
                      id="photo-upload"
                      onChange={handleImageChange}
                      accept="image/*"
                      style={{ display: 'none' }}
                      value={formData.contentImgUrl}
                    />
                    <label htmlFor="photo-upload" className={styles.chooseAPhoto}>
                      Choose a Photo
                    </label>
                    <img
                      className={styles.dataUploadIcon}
                      alt=""
                      src="/data-upload@2x.png"
                    />
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.eventNameParent}>
                      <b className={styles.eventName}>Event Name</b>
                      <textarea 
                        className={styles.textfield}
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.eventDateParent}>
                      <b className={styles.eventDate}>Date</b>
                      <input 
                        type="date" 
                        className={styles.textfield1} 
                        value={formData.date}
                        onChange={handleChange} 
                        name="date"
                      />
                    </div>
                    <div className={styles.locationParent}>
                      <b className={styles.location}>Location</b>
                      <textarea
                        className={styles.textfield2}
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.parentEventDetails}>
                      <b className={styles.eventDescription}>Event Description</b>
                      <textarea
                        className={styles.textfield3}
                        name="content"
                        rows={6}
                        cols={27}
                        value={formData.content}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.cancelSaveButtonsWrapper}>
                      <div className={styles.cancelSaveButtons}>
                        <button className={styles.button22} type="button" onClick={handleBack}>
                          <div className={styles.cancel}>Cancel</div>
                        </button>
                        <button className={styles.button221} type="submit">
                          <div className={styles.save}>Save</div>
                        </button>
                      </div>
                      {showSavedMessage && (
                        <div className={styles.savedNotification}>Saved!</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </LocalizationProvider>
    </form>
  );
};

export default AddEvent;
