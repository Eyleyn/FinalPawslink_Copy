import React, { useState } from "react";
import styles from "./EditPassword.module.css";
import { useNavigate } from "react-router-dom"; 

const EditPassword = () => {
  const navigate = useNavigate(); 
  const [showSavedMessage, setShowSavedMessage] = useState(false); 
  const handleBack = () => {
    navigate("/dashboard"); 
  };

  const handleSave = () => {
    console.log("Data saved");
    setShowSavedMessage(true); 
    setTimeout(() => setShowSavedMessage(false), 3000); 
  };

  return (
    <div className={styles.editPassword}>
      <img
        className={styles.image23Icon}
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
      <main className={styles.container3Wrapper}>
        <section className={styles.container3}>
          <div className={styles.keyboardBackspace1Parent}>
            <img
              className={styles.keyboardBackspace1}
              loading="lazy"
              onClick={handleBack}
              alt=""
              src="/keyboard-backspace-1@2x.png"
            />
            <div className={styles.editPasswordWrapper}>
              <h1 className={styles.editPassword1}>Edit Password</h1>
            </div>
          </div>
          <div className={styles.container93Wrapper}>
            <form className={styles.container93}>
              <div className={styles.currentPasswordParent}>
                <b className={styles.currentPassword}>Current Password</b>
                <div className={styles.textfield}>
                  <input
                    className={styles.inputText}
                    placeholder="Type your current password..."
                    type="password"
                  />
                </div>
              </div>
              <div className={styles.newPasswordParent}>
                <b className={styles.newPassword}>New Password</b>
                <div className={styles.textfield1}>
                  <input
                    className={styles.inputText1}
                    placeholder="Type your new password..."
                    type="password"
                  />
                </div>
              </div>
              <div className={styles.confirmNewPasswordParent}>
                <b className={styles.confirmNewPassword}>
                  Confirm New Password
                </b>
                <div className={styles.textfield2}>
                  <input
                    className={styles.inputText2}
                    placeholder="Confirm new password..."
                    type="password"
                  />
                </div>
              </div>
              <div className={styles.container93Inner}>
                <div className={styles.button22Parent}>
                  <button className={styles.button22}>
                    <div className={styles.cancel}>Cancel</div>
                  </button>
                  <button type="button" className={styles.button221} onClick={handleSave}>
                    <div className={styles.save}>Save</div>
                    </button>

                </div>
              </div>
            </form>
            
          </div>
        </section>
      </main>
      {/* Notification element */}
      {showSavedMessage && (
        <div className={styles.savedNotification}>Saved!</div>
      )}
    </div>
  );
};

export default EditPassword;
