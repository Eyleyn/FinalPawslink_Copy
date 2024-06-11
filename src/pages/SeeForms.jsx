{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
    About the code:
        Enables the admin to view the forms such as Adoption form and Approval form that is sent to the user if they want 
        to adopt an animal.
**/}

import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import user_icon from "../assets/rectangle-2@2x.png";
import comment_icon from "../assets/comment-2.svg";
import upload_photo from "../assets/image-38@3x.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import event1 from "../assets/imageDog.png";
import event2 from "../assets/image@2x.png";
import delete_icon from "../assets/E delete.png";
import edit_icon from "../assets/Edit.png";
import { borderColor, borderRadius, color, display, fontSize, height, margin, positions, textAlign } from "@mui/system";

const SeeForms = () => {

  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate("/dashboard"); 
  };

  const goToAdoptionForm = () => {
    navigate("/see-adoption-form")
  }

  const goToApprovalForm = () => {
    navigate("/view-form-approval")
  }

  return(
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
        <div style={styles.SecondMContainer}>
          <img style={styles.topLogoPawslink} src = {top_logo} />
          <div style={styles.EventScreenContainer}>
            <div style = {styles.buttonContainer}>
              <button style={styles.BackButton} onClick={handleBack}>
                <img style={styles.keyboardBackspace1} src = {back_button}/>
              </button>
              <b style={styles.EventTextStyle}>
                See Forms
              </b>
            </div>
            <div style={styles.PhotoContainer}>
              <div style={styles.Form1}>
                <img style={styles.Form1Pic} src = {upload_photo}></img>
                <b style={styles.TxtButtonStyle} onClick={goToAdoptionForm}>ADOPTION FORM</b>
              </div>
              <div style={styles.Form2}>
                <img style={styles.Form2Pic} src = {event1}></img>
                <b style={styles.TxtButtonStyle} onClick={goToApprovalForm}>APPROVAL FORM</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const styles = {
  mainContainer:{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems : 'center',
      justifyContent: 'center',
      backgroundColor: Color.colorWhitesmoke,
  },
  mainContentContainer:{
      width: '75vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      borderRadius: '10px',
      backgroundColor: Color.colorWhitesmoke,
  },
  SecondMContainer: {
      width: '75vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Color.colorWhite,
      flexDirection: 'column',
  },
  topLogoPawslink: {
      width: '200px',
      height: '80px',
      objectFit: 'cover',
      marginLeft: '20px',
  },
  EventScreenContainer: {
      flexDirection: 'column',
      height: '70%',
      width: '91%',
      marginRight: '150px',
      marginLeft: '50px',
      borderRadius: '12px',
      backgroundColor:  Color.colorWhitesmoke,
      flex: 1,
      alignItems: 'center',
  },
  EventTextStyle: {
      fontSize: '30px',
      color: Color.colorPalevioletred,
      marginLeft: '5px',
      display: 'inline-block',
      lineHeight: '90px',
      FontFamily: FontFamily.epilogueBold,
      whiteSpace: 'nowrap',
  },
  buttonContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      width:  '100px',
      height: '30px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '20px',
      marginLeft: '20px',
      borderColor: 'none',
      backgroundColor: Color.colorWhitesmoke,
  },
  keyboardBackspace1: {
      width: '44px',
      height: '34px',
      borderColor: 'none',
  },
  BackButton: {
      cursor: 'pointer',
      border: '0',
      borderColor: 'none',
      width: '54px',
      height: '24px',
      backgroundColor: 'none',    
      objectFit: 'cover',
  },
  PhotoContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: 'white',
    marginLeft: '50px',
    marginTop: '20px',
    flexDirection: 'row',
  },
  Form1: {
    width: '25%',
    height: '60%',
    backgroundColor: 'white',
    marginLeft: '50px',
    marginTop: '20px',
    position: 'absolute',
  },
  Form2: {
    width: '25%',
    height: '60%',
    backgroundColor: 'white',
    marginLeft: '450px',
    marginTop: '20px',
    position: 'absolute',
  },
  Form1Pic: {
    width: '320px',
    height: '320px',
    objectFit: 'cover',
    marginLeft: '12px',
    marginTop: '15px',
  },
  Form2Pic: {
    width: '320px',
    height: '320px',
    objectFit: 'cover',
    marginLeft: '12px',
    marginTop: '15px',
  },
  TxtButtonStyle: {
    fontSize: 18,
    color: Color.colorPalevioletred,
    marginLeft: '10px',
    cursor: 'pointer',
  }
}
export default SeeForms;
