import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import cat_image from "../assets/image@2x.png";
import qr_code from "../assets/pen.png";
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const catsData = [
  {
    name: "Bingo",
    sterilization: 'SPAYED',
    age: "3",
    vaccinationDate: "08/01/2021",
    dewormDate: "12/11/2022",
    status: "ADOPTED",
    neuterspayDate: "30/01/2023"
  },
  {
    name: "Boyplen",
    age: "1",
    sterilization: 'SPAYED',
    vaccinationDate: "26/08/2020",
    dewormDate: "14/08/2022",
    status: "ADOPTED",
    neuterspayDate: "28/10/2021"
  },
  {
      name: "Betty",
      age: "2",
      sterilization: 'SPAYED',
      vaccinationDate: "26/08/2020",
      dewormDate: "14/08/2022",
      status: "ADOPTED",
      neuterspayDate: "28/10/2021"
  },
  {
      name: "Blep",
      age: "1",
      sterilization: 'SPAYED',
      vaccinationDate: "26/08/2020",
      dewormDate: "14/08/2022",
      status: "ADOPTED",
      neuterspayDate: "28/10/2021"
  },
];
const AdoptedCats = () => {

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/adopted-animals'); // This will navigate to Dashboard when called
  };

  const viewAdopted = () => {
    navigate('/animal-adoption-details'); // This will navigate to Dashboard when called
  };
  return (
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
                            Adopted Cats
                        </b>
                    </div>
                    <div style={styles.DatabaseContainer}>
                        <div style={styles.HeaderName}>
                            <div style = {styles.HeaderContainer}>
                                <div style={styles.CatContentContainer}>
                                    <div style = {styles.TitleHolderContainer}>
                                        <b style={styles.HeaderTitle}>
                                            NAME
                                        </b>
                                        <b style={styles.HeaderTitle}>
                                            STATUS
                                        </b>
                                        <b style={styles.HeaderTitle}>
                                            STERILIZATION
                                        </b>
                                        <b style={styles.HeaderTitle}>
                                            AGE
                                        </b>
                                        <b style={styles.HeaderTitle}>
                                            DEWORM DATE
                                        </b>
                                        <b style={styles.HeaderTitle}>
                                            VACCINATION
                                        </b>
                                    </div>                                
                                    {/* DOG DATABASE HERE */}
                                    <div style = {styles.CatTable}>
                                        <div style = {styles.CatTableContent}>
                                            {catsData.map((cat, index) => (
                                                <div key={index}> 
                                                    <div style = {styles.imgFrame}>
                                                        <img style={styles.imageIcon} src={cat_image} />
                                                    </div>
                                                    <div style = {styles.CatDetails}> 
                                                    <div style = {styles.DisplayContent}>
                                                            <div style={styles.txtDetails}> {cat.name} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <div style={styles.statusTxtDetails}> {cat.status} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <div style={styles.LoctxtDetails}> {cat.sterilization} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <div style={styles.agetxtDetails}> {cat.age} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <div style={styles.dewormtxtDetails}> {cat.dewormDate} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <div style={styles.vaxtxtDetails}> {cat.vaccinationDate} </div>
                                                        </div>
                                                        <div style = {styles.DisplayContent}>
                                                            <button style={styles.editButton} onClick={viewAdopted}>
                                                                View
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
        whiteSpace: 'nowrap'
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
    DatabaseContainer: {
        width:  '100%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
    },
    HeaderName: {
        width:  '100px',
        height: '50px',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginTop: '-450px',

    },
    HeaderTitle: {
        fontSize: 11,
        margin: '-20px',
        marginLeft:'-5px',
    },
    HeaderContainer: {
        flexDirection: 'column',
        width:  '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginLeft: '10px',
        backgroundColor: Color.colorPalevioletred,
    },
    TitleHolderContainer:{
        flexDirection: 'row',
        width:  '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginLeft: '-10px',
        backgroundColor: Color.colorWhite,
    },
    CatContentContainer: {
        flexDirection: 'column',
        width:  '100%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
    },
    CatTable: {
        width: '100%',
        height: '1000%',
        backgroundColor: Color.colorWhite,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    CatTableContent: {
        width: '99%',
        height: '70%',
        overflow: 'auto',
        maxHeight: '100%',
        flexDirection: 'row',
        display: 'inline-block',
        backgroundColor: Color.colorWhitesmoke,
    },
    bttnFrame: {
        width: '90%',
        height: '90%',
        backgroundColor: Color.colorGray_200,
    },
    editButton: {
        width: '45px',
        height: '25px',
        fontSize: 12,
        textAlign: 'center',
        color: 'white',
        marginLeft: '220px',
        justifyContent: 'space-evenly',
        borderColor: Color.colorPalevioletred,
        backgroundColor: Color.colorPalevioletred,
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    imgFrame: {
        width: '5px',
        height: '5px',
        marginTop: '15px',
        marginLeft: '35px'
    }, 
    imageIcon: {
        height: '40px',
        width: '40px',
    },
    txtDetails: {
        overflow: 'hidden',
        FontFamily: FontFamily.epilogueBold,
        fontSize: 12,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '80px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    LoctxtDetails: {
      overflow: 'hidden',
      FontFamily: FontFamily.epilogueBold,
      color: Color.colorPalevioletred,
      fontSize: 12,
      textAlign: 'center',
      flexDirection: 'row',
      flex: 1,
      display: 'inline-block',
      justifyContent: 'center',
      marginLeft: '120px',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      whiteSpace: 'nowrap',
  },
    DogDetails: {
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '20px',
        marginLeft: '5px',
    },
    statusTxtDetails: {
        width: '70px',
        height: '20px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '70px',
        marginTop: '-2px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(144, 238, 144, 0.5)',
        borderRadius: '15px',
        whiteSpace: 'nowrap',
    },
    agetxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '150px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    dewormtxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '160px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    vaxtxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '220px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    DisplayContent: {
        width: '90px',
        height: '20px',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'space-evenly',
        marginLeft: '15px',
        alignItems: 'center',
        flexDirection: 'row',
    },
}

export default AdoptedCats