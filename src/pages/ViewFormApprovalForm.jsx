{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
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
import { space } from "postcss/lib/list";

const ViewFormApprovalForm = () => {

  const navigate = useNavigate(); 

  const handleBack = () => {
    navigate("/see-forms"); 
  };

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
                Approval Form
              </b>
            </div>
            <div style={styles.PhotoContainer}>
              <div style={styles.FormContainer}>
                <div style={styles.NameContainer}>
                  <b style={styles.Header}>New name of animal</b>
                  <input
                    style={styles.textInput}
                    type="text"
                    placeholder=""
                  />
                </div>
                <div style={styles.NameContainer}>
                  <b style={styles.Header1}>Date Adopted</b>
                  <input
                    style={styles.textInput}
                    type="text"
                    placeholder=""
                  />
                </div>
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
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  FormContainer:{
    position: 'absolute',
    width: '400px',
    height: '200px',
    backgroundColor: 'green',
    marginLeft: '200px',
    marginTop: '100px',
  },
  NameContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  Header: {
    fontSize: 16,
    color: 'purple',
    marginLeft: '-60px',
  },
  Header1: {
    fontSize: 16,
    color: 'purple',
    marginLeft: '-105px',
  },
  textInput:{
    width: '200px',
    height: '30px',
  },
  ButtonContainer: {
    width: '170px',
    height: '25px',
    marginLeft: '120px',
    marginTop:'10px',
  },
  ApproveButtonStyle: {
    cursor: 'pointer',
    width: '76px',
    height: '30px',
    backgroundColor: Color.colorPalevioletred,
    borderColor: 'gray',
    borderRadius: '5px',
    flexDirection: 'column',
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5px',
  },
  DeclineButtonStyle: {
    cursor: 'pointer',
    width: '76px',
    height: '30px',
    backgroundColor: Color.colorWhite,
    borderColor: 'pink',
    borderRadius: '5px',
    flexDirection: 'column',
    fontSize: 16,
    color: Color.colorPalevioletred,
    justifyContent: 'center',
    alignItems: 'center',
  },
}
export default ViewFormApprovalForm;
