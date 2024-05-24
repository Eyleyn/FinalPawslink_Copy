import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import cat_image from "../assets/image@2x.png";
import qr_code from "../assets/pen.png";
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { borderRadius, color, display, fontSize, height } from "@mui/system";

const AdoptionData = [
  {
    photo: [cat_image],
    name: "Mimi",
    monthAdopted: "04/04/2024",
    adopterName: "alexander",
    dewormDate: "12/11/2022",
    status: "Alive", 
  },
];
const MonthlyData = [
  {
    month: 'May 2024',
  },
  {
    month: 'June 2024',
  },
  {
    month: 'July 2024',
  },
  {
    month: 'August 2024',
  },
];

const AnimalAdoptionDetails = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adopted-cats'); // This will navigate to Dashboard when called
  };
  const GoviewRequest = () => {
    navigate('/view-user-request'); // This will navigate to Dashboard when called
  };
  const goMessage = () => {
    navigate('/user-message'); // This will navigate to Dashboard when called
  };
  const viewUpdate = () => {
    navigate('/animal-adoptation'); // This will navigate to Dashboard when called
  };
  return(
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
          <div style={styles.SecondMContainer}>
            <img style={styles.topLogoPawslink} src = {top_logo} />
            <div style={styles.ContentContainer}>
              <div style = {styles.buttonContainer}>
                <button style={styles.BackButton} onClick={handleBack}>
                  <img style={styles.keyboardBackspace1} src = {back_button}/>
                </button>
                <b style={styles.CatTextStyle}>
                  Adoption Details
                </b>
              </div>
              <div style={styles.DetailsContainer}>
                {AdoptionData.map((update, index) => (
                  <div key={index}> 
                    <div style={styles.CatContainer}>
                      {update.photo && update.photo.map((photo, idx) => (
                          <img key={idx} src={photo} alt="Uploaded" style={styles.UploadedPhoto} />
                      ))}
                      <div style={styles.AnimalInfo}>
                        <b style={styles.NameStyle}>{update.name}</b>
                        <p style={styles.InfoStyle}>ADOPTED {update.monthAdopted} by {update.adopterName}</p>
                        <b style={styles.StatusStyle}>{update.status}</b>
                        <button style={styles.ViewButtonStyle} onClick={GoviewRequest}>
                          View Request
                        </button>
                        <button style={styles.messageButtonStyle} onClick={goMessage}>
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={styles.CatMonthlyContainer}>
                  <b style={styles.MonthHeader}> MONTH</b>
                  <b style={styles.MonthHeader2}> MONTHLY UPDATE</b>
                  {MonthlyData.map((month, index) => (
                    <div key={index}> 
                      <div style={styles.MonthDisplay}>
                        <p style={styles.MonthStyle}>{month.month}</p>
                        <div style={styles.CatMonthlyUpdateContainer}>
                          <button style={styles.editButton} onClick={viewUpdate}>
                            view update
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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
  },
  topLogoPawslink: {
      width: '200px',
      height: '80px',
      objectFit: 'cover',
      marginLeft: '20px',
  },
  SecondMContainer: {
      width: '75vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: Color.colorWhite,
      flexDirection: 'column',
  },
  ContentContainer:{
      flexDirection: 'column',
      height: '100vh',
      width: '91%',
      marginRight: '150px',
      marginLeft: '50px',
      backgroundColor: Color.colorWhite,
      flex: 1,
      alignItems: 'center',
  },
  CatTextStyle: {
      fontSize: '30px',
      color: Color.colorPalevioletred,
      marginLeft: '5px',
      display: 'inline-block',
      lineHeight: '90px',
      whiteSpace: 'nowrap',
  },

  keyboardBackspace1: {
      width: '44px',
      height: '34px',
      borderColor: Color.colorWhite,
  },
  BackButton: {
      cursor: 'pointer',
      border: '0',
      borderColor: Color.colorWhite,
      width: '54px',
      height: '24px',
      backgroundColor: Color.colorWhite,
      objectFit: 'cover',
  },
  buttonContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      width:  '100px',
      height: '30px',
      backgroundColor: Color.colorWhite,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '20px',
      marginLeft: '20px',
      borderColor: Color.colorWhite,
  },
  DetailsContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '50px'
  },
  CatContainer: {
    width: '350px',
    height: '130px',
    backgroundColor: 'white',
    position: 'absolute',
    marginTop: '30px',
    marginLeft: '30px',
    borderRadius: '10px',
    boxShadow: '1px 1px 5px 1px grey',
  },
  CatMonthlyContainer: {
    width:'400px',
    height: '100%',
    backgroundColor: 'white',
    marginTop: '30px',
    position: 'absolute',
    marginLeft: '400px',
    boxShadow: '1px 1px 5px 1px grey',
    borderRadius: '10px',
  },
  UploadedPhoto: {
    width: '100px',
    height: '100px',
    marginLeft: '10px',
    marginTop: '20px',
  },
  AnimalInfo: {
    width: '220px',
    height: '85px',
    marginLeft: '118px',
    marginTop: '-103px',
    backgroundColor: 'white',
    justifyContent: 'left',
    alignItems: 'left',
    display: 'flex',
    flex: 1,
  },
  NameStyle: {
    fontSize: 20,
    color: Color.colorPalevioletred,
    marginLeft: '10px',
  },
  InfoStyle: {
    fontSize: 14,
    color: 'black',
    marginLeft: '-45px',
    marginTop: '28px',
    whiteSpace: 'nowrap',
  },
  StatusStyle: {
    fontSize: 14,
    color: 'green',
    marginLeft: '-207px',
    marginTop: '49px',
  },
  ViewButtonStyle: {
    cursor: 'pointer',
    width: '100px',
    height: '25px',
    backgroundColor: Color.colorPalevioletred,
    borderColor: 'white',
    borderRadius: '5px',
    flexDirection: 'column',
    fontSize: 12,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    marginTop: '70px',
    marginLeft:'-40px',
  },
  messageButtonStyle:{
    cursor: 'pointer',
    width: '80px',
    height: '25px',
    backgroundColor: Color.colorPalevioletred,
    borderColor: 'white',
    borderRadius: '5px',
    flexDirection: 'column',
    fontSize: 12,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '70px',
    marginLeft:'5px',
  },
  MonthHeader: {
    fontSize: 14,
    color: 'purple',
    marginTop: '20px',
    marginLeft: '20px',
    position: 'absolute',
  },
  MonthHeader2: {
    fontSize: 14,
    color: 'purple',
    marginTop: '20px',
    marginLeft: '205px',
    position: 'absolute',
    whiteSpace: 'nowrap'
  },
  MonthDisplay: {
    width: '50%',
    height: '100%',
    backgroundColor: 'white',
  },
  CatMonthlyUpdateContainer:{
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '200px',
  },
  MonthStyle: {
    fontSize: 15,
    marginLeft: '20px',
    marginTop: '50px',
  },
  editButton: {
    width: '35px',
    height: '35px',
    fontSize: 12,
    textAlign: 'center',
    color: Color.colorPalevioletred,
    marginLeft: '10px',
    marginTop: '-40px',
    borderColor: 'white',
    position: 'absolute',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  }
}

export default AnimalAdoptionDetails
