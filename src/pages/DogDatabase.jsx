import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import dog_image from "../assets/imageDog.png";
import qr_code from "../assets/pen.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';


const dogsData = [
    {
      mainName: "Ampon",
      age: "3",
      sex: 'F',
      species: 'Dog',
      location: 'CDH',
      sterilizationDate: "08/01/2021",
      dewormingDate: "12/11/2022",
      status: "ON CAMPUS",
      neuterspayDate: "30/01/2023",
      traitsAndPersonality: "None",
      notes: "None"
    },
    {
      mainName: "Bella",
      age: "1",
      species: 'Dog',
      location: 'CUB',
      sterilizationDate: "26/08/2020",
      dewormingDate: "14/08/2022",
      status: "ON CAMPUS",
      neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Betty",
        age: "2",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Blythe",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Box 1",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Brownie",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Butterscotch",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Carrot Cake",
        age: "1",
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021",
        species: 'Dog',
    },
    {
        mainName: "CM",
        age: "1",
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        species: 'Dog',
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Data",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Ducky",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Four",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Iska",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Jewel",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Cassy",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Saki",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Ligaya",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Maan",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Mama Caramel",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Mathilda",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Mikay",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Milo",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Mimi",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Molly",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Odette",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Oliver",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Paquito Sr.",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Isko",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Puppy",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Putot",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Scar",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Caramel",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Trixie",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
    {
        mainName: "Yeye",
        age: "1",
        species: 'Dog',
        location: 'CDH',
        sterilizationDate: "26/08/2020",
        dewormingDate: "14/08/2022",
        status: "ON CAMPUS",
        neuterspayDate: "28/10/2021"
    },
  ];
  const DogDatabaseScreen = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleBack = () => {
        navigate('/dashboard'); // This will navigate to Dashboard when called
    };

    const handleEdit = (dog) => {
        navigate('/edit-animal', { state: { ...dog } }); // Navigate to the edit-animal route with dog data
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.SecondMContainer}>
                    <img style={styles.topLogoPawslink} src={top_logo} />
                    <div style={styles.ContentContainer}>
                        <div style={styles.buttonContainer}>
                            <button style={styles.BackButton} onClick={handleBack}>
                                <img style={styles.keyboardBackspace1} src={back_button} />
                            </button>
                            <b style={styles.DogTextStyle}>
                                Dogs
                            </b>
                        </div>
                        <div style={styles.DatabaseContainer}>
                            <div style={styles.HeaderName}>
                                <div style={styles.HeaderContainer}>
                                    <div style={styles.DogContentContainer}>
                                        <div style={styles.TitleHolderContainer}>
                                            <b style={styles.HeaderTitle}>
                                                NAME
                                            </b>
                                            <b style={styles.HeaderTitle}>
                                                STATUS
                                            </b>
                                            <b style={styles.HeaderTitle}>
                                                LOCATION
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
                                            <b style={styles.HeaderTitle}>
                                                NEUTER/SPAY
                                            </b>
                                            <div style={styles.QrCodeHeader}>
                                                <b style={styles.QRCodeTitle}>
                                                    QR CODE
                                                </b>
                                            </div>
                                        </div>
                                        <div style={styles.DogTable}>
                                            <div style={styles.DogTableContent}>
                                                {dogsData.map((dog, index) => {
                                                    return (
                                                        <div key={dog.id}>
                                                            <div style={styles.imgFrame}>
                                                                <img style={styles.imageIcon} src={dog_image} />
                                                            </div>
                                                            <div style={styles.DogDetails}>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.txtDetails}> {dog.mainName} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.statusTxtDetails}> {dog.status} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.txtDetails}> {dog.location} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.agetxtDetails}> {dog.age} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.dewormtxtDetails}> {dog.dewormingDate} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.vaxtxtDetails}> {dog.sterilizationDate} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent}>
                                                                    <div style={styles.neutxtDetails}> {dog.neuterspayDate} </div>
                                                                </div>
                                                                <div style={styles.DisplayContent} onClick={() => handleEdit(dog)}>
                                                                    <button style={styles.editButton} onClick={() => handleEdit(dog)}>
                                                                        Edit
                                                                    </button>
                                                                </div>
                                                                <div style={styles.DisplayContent} onClick={() =>
                                                                    navigate("/qr-code-download", {state: dog.name})
                                                                }>
                                                                    <img style={styles.qrcodeStyle} src={qr_code} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
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
    );
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
    },
    topLogoPawslink: {
        width: '200px',
        height: '80px',
        objectFit: 'cover',
        marginLeft: '20px',
    },
    SecondMContainer: {
        width: '75vw',
        height: 'auto',
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
    DogTextStyle: {
        fontSize: '30px',
        color: Color.colorPalevioletred,
        marginLeft: '5px',
        display: 'inline-block',
        lineHeight: '90px',
        FontFamily: "FontFamily.epilogueBold",
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
        fontSize: 10,
        margin: '-20px',
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
        marginLeft: '10px',
        backgroundColor: Color.colorWhite,
    },
    DogContentContainer: {
        flexDirection: 'column',
        width:  '100%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
    },
    DogTable: {
        width: '100%',
        height: '1000%',
        backgroundColor: Color.colorWhite,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    DogTableContent: {
        width: '100%',
        height: '70%',
        overflow: 'auto',
        maxHeight: '100%',
        flexDirection: 'row',
        display: 'inline-block',
        justifyContent: 'space-evenly',
        backgroundColor: Color.colorWhitesmoke,
    },
    bttnFrame: {
        width: '90%',
        height: '90%',
        backgroundColor: Color.colorGray_200,
    },
    editButton: {
        width: '40px',
        height: '29px',
        fontSize: 12,
        textAlign: 'center',
        color: Color.colorWhite,
        marginLeft: '100px',
        justifyContent: 'space-evenly',
        borderColor: 'white',
        borderRadius: '5px',
        backgroundColor: Color.colorPalevioletred,
        border: 'none',
        cursor: 'pointer',
    },
    imgFrame: {
        width: '5px',
        height: '5px',
        marginTop: '15px',
        marginLeft: '15px'
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
        marginLeft: '60px',
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
        marginLeft: '55px',
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
        marginLeft: '60px',
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
        marginLeft: '42px',
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
        marginLeft: '70px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    neutxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '95px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    DisplayContent: {
        width: '90px',
        height: '20px',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
    DisplayContentQR: {
        width: '90px',
        height: '20px',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '80px',
    },
    QrCodeHeader: {
        width: '60px',
        height: '20px',
        marginLeft: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'center',
    },
    QRCodeTitle:{
        fontSize: 10,
        marginLeft: '20px',
        whiteSpace: 'nowrap'
    },
    qrcodeStyle: {
        width: '15px',
        height: '15px',
        marginLeft: '100px',
        cursor: 'pointer',
    },
    QrCodeHeader: {
        marginLeft: '10px',
    },
    QRCodeTitle: {
        fontSize: '10px',
    }
}
export default DogDatabaseScreen