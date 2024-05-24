import { Button } from "@mui/material";
import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import user_icon from "../assets/rectangle-1@2x.png";
import user_icon2 from "../assets/rectangle-2@2x.png";
import delete_icon from "../assets/E delete.png";
import edit_icon from "../assets/Edit.png";
import { borderColor, borderRadius, color, display, fontSize, height, margin, positions, textAlign } from "@mui/system";

const RequestData = [
  {
    photo: [user_icon],
    username: 'sopeepay',
    animalToAdopt: 'Paquito Jr.',
  },
  {
    photo: [user_icon2],
    username: 'ellaine',
    animalToAdopt: 'Butterscotch',
  },
  {
    photo: [user_icon],
    username: 'joannah',
    animalToAdopt: 'Butterscotch',
  },

]
const AdoptionRequests = () => {

    const navigate = useNavigate();

    const goToApproved = () => {
        navigate("/approved-request"); 
      };

    const goToADeclined = () => {
        navigate("/declined-request");
    };

    const viewRequest = () => {
      navigate("/view-request");
  };

    const handleBack = () => {
        navigate('/dashboard'); // This will navigate to Dashboard when called
    };

  return (
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
                    Adoption Requests
                  </b>
                </div>
                <div style={styles.RequestList}>
                  {RequestData.map((request, index) => (
                    <div key={index}> 
                      <div style={styles.RequestListContainer}>
                        <div style={styles.RequestContainer}>
                          {request.photo && request.photo.map((photo, idx) => (
                            <img key={idx} src={photo} alt="Uploaded" style={styles.UploadedPhoto} />
                          ))}
                          <div style={styles.RequestDetails}>
                            <p><b>{request.username}</b> wants to adopt <b>{request.animalToAdopt}</b>
                            <div style={styles.ViewButtonContainer}>
                              <button style={styles.ButtonStyle} onClick={viewRequest}>
                                View Request
                              </button>
                            </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={styles.ArchiveContainer}>
                  <div style={styles.archiveTextContainer}>
                    <b style={styles.archiveText}>Archive</b>
                  </div>
                  <div style={styles.ArchiveButtons}>
                    <button style={styles.ArchiveButtonStyle} onClick={goToApproved}>
                      Approved Requests
                    </button>
                    <button style={styles.ArchiveButtonStyle} onClick={goToADeclined}>
                      Declined Requests
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

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
      flexDirection: 'row',
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
  RequestList: {
    width: '65%',
    height: '85%',
    overflow: 'auto',
    maxHeight: '100%',
    backgroundColor: 'white',
    marginLeft: '20px',
    marginTop:'20px',
  },
  ArchiveContainer: {
    width: '30%',
    height: '350px',
    backgroundColor: Color.colorWhitesmoke,
    marginLeft: '640px',
    marginTop:'-505px',
  },
  RequestListContainer: {
    width: '100%',
    height: '80%',
    overflow: 'auto',
    maxHeight: '100%',
  },
  RequestContainer: {
    width: '90%',
    height: '80px',
    backgroundColor: 'white',
    marginLeft: '30px',
    marginTop: '30px',
    borderRadius: '8px',
    boxShadow: '1px 1px 5px 1px grey',
  },
  UserImageContainer: {
    objectFit: 'cover',
  },
  UploadedPhoto: {
    width: '50px',
    height: '50px',
    backgroundColor: 'purple',
    borderRadius: '30px',
    marginLeft: '10px',
    marginTop: '20px',
    objectFit: 'cover',
  },
  RequestDetails: {
    width: '250px',
    height: '30px',
    marginLeft: '75px',
    marginTop: '-55px',
  },
  ViewButtonContainer: {
    width: '100px',
    height: '30px',
    marginLeft: '335px',
    backgroundColor: 'yellow',
    marginTop: '-25px',
  },
  ButtonStyle: {
    width: '100px',
    height: '30px',
    backgroundColor: Color.colorPalevioletred,
    color: 'white',
    borderRadius: '5px',
    borderColor: 'white',
    fontSize: 11,
    cursor: 'pointer',
  },
  archiveTextContainer:{
    width: '100px',
    height: '50px',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    marginLeft: '10px',
    marginTop: '10px',
  },
  archiveText: {
    fontSize: 30,
    color: 'purple',
  },
  ArchiveButtons:{
    width: '250px',
    height: '100px',
    marginLeft: '10px',
    flexDirection: 'column',
    display: 'grid',
    cursor: 'pointer',
  },
  ArchiveButtonStyle: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderColor: 'none',
    border: 'none',
    color: Color.colorPalevioletred,
    fontSize: 14,
    textAlign: 'left',
  },
}
export default AdoptionRequests;