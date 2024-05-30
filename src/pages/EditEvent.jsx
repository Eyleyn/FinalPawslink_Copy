import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import styles from "./AddEvent.module.css";
import upload_photo from "../assets/imageDog.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import axios from "axios";

const AddEvent = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [imageFile, setImageFile] = useState(null);

  const handleBack = () => {
    navigate("/dashboard"); // Navigate to the login route on logout
  };

  const [imageSrc, setImageSrc] = useState("/image-38@2x.png");

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
  const [textfieldDateTimePickerValue, setTextfieldDateTimePickerValue] =
    useState(new Date("2024-05-28"));
  return (
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
                  src= {back_button}
                />
              </div>
              <p className={styles.addAnEvent}>Edit Event</p>
            </div>
            <div className={styles.container3Container}>
              <div className={styles.container31}>
                <img
                  className={styles.image46Icon}
                  loading="lazy"
                  alt=""
                  src={upload_photo}
                />
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
                <div className={styles.frameParent}>
                  <div className={styles.eventNameParent}>
                    <b className={styles.eventName}>Event Name</b>
                    <textarea 
                      className={styles.textfield}
                      type="text"
                    />
                      
                  
                  </div>
                  <div className={styles.eventDateParent}>
                  <b className={styles.eventDate}>Date and Time</b>
                  <input type="date" className={styles.textfield1}
                  />
    
                  </div>
                  <div className={styles.locationParent}>
                    <b className={styles.location}>Location</b>
                    <textarea
                      className={styles.textfield2}
                      
                      type="text"
                    />
                  </div>
                  <div className={styles.parentEventDetails}>
                    <b className={styles.eventDescription}>Event Description</b>
                    <textarea
                      className={styles.textfield3}
                      
                      type="text"
                      rows={6}
                      cols={27}
                    />
                  </div>
                  <div className={styles.cancelSaveButtonsWrapper}>
                    <div className={styles.cancelSaveButtons}>
                      <button className={styles.button22}>
                        <div className={styles.cancel}>Cancel</div>
                      </button>
                      <button className={styles.button221}>
                        <div className={styles.save}>Save</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </LocalizationProvider>
  );
};

export default AddEvent;
