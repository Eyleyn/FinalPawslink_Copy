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

const EventData = [
    {
        photo: [event1],
        eventTitle: 'Emotional Support Furries',
        eventDate: 'May 28, 2024 | 4:30 PM | CDH',
        eventContent: ' "Emotional Support Furries" is a cozy campus event where students can unwind with campus dogs during exams. Its a pause for cuddles and playtime with furry friends who bring unconditional love and support. Need a stress break or miss your pet? Join us for some pawsitive vibes to boost your exam spirits!',
    },
    {
        photo: [upload_photo],
        eventTitle: 'Paws & Relax',
        eventDate: 'May 21, 2024 | 3:00 PM | TLRC',
        eventContent: ' "Take a paws from studying and join us for a relaxing session with our therapy dogs! This calming event is perfect for students needing a little love and comfort during exam time. Let our friendly dogs wag away your worries with their joyous energy. Its the ideal way to recharge and smile, right here on campus. Snacks, pets, and smiles guaranteed! Support Furries" is a cozy campus event where students can unwind with campus dogs during exams. Its a pause for cuddles and playtime with furry friends who bring unconditional love and support. Need a stress break or miss your pet? Join us for some pawsitive vibes to boost your exam spirits!',
    },
    {
        photo: [event2],
        eventTitle: 'Kitty Cuddle Corner',
        eventDate: 'April 29, 2024 | 2:00 PM | TLRC',
        eventContent: ' This delightful event invites students to snuggle with our adorable campus cats, offering a furry escape from exam stress. Feel the stress melt away as you pet and play with our gentle felines. Its a meow-velous way to find joy and relaxation amidst the exam craze. Join us for a dose of kitty cuddles and leave with your heart full and spirits lifted!'
    },
    {
        photo: [event2],
        eventTitle: 'Kitty Cuddle Corner Part 2',
        eventDate: 'April 29, 2024 | 2:00 PM | TLRC',
        eventContent: ' This delightful event invites students to snuggle with our adorable campus cats, offering a furry escape from exam stress. Feel the stress melt away as you pet and play with our gentle felines. Its a meow-velous way to find joy and relaxation amidst the exam craze. Join us for a dose of kitty cuddles and leave with your heart full and spirits lifted!'
    },
];

const EventScreen = () =>{
    const navigate = useNavigate(); // Hook for navigation

    const handleBack = () => {
        navigate('/dashboard'); // This will navigate to Dashboard when called
    };

    const gotoEditEvent = () => {
        navigate('/edit-event'); // This will navigate to Dashboard when called
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
                                Events
                            </b>
                        </div>
                        <div style={styles.MainForumContainer}>
                            {EventData.map((event, index) => (
                                <div key={index}> 
                                    <div style={styles.EventContainer}>
                                        <div style={styles.ImageUploadFrame}>
                                            {event.photo && event.photo.map((photo, idx) => (
                                                <img key={idx} src={photo} alt="Uploaded" style={styles.UploadedPhoto} />
                                            ))}
                                        </div>
                                        <div style={styles.EventContentContainer}>
                                            <div style={styles.TitleAndButtonContainer}>
                                                <b style={styles.EventTitleTxt}>{event.eventTitle}</b>
                                                <div style={styles.ButtonContainer}>
                                                    <button style={styles.EditButtonStyle} onClick={gotoEditEvent}>
                                                        <img style={styles.editIcon} src = {edit_icon}/>
                                                        Edit
                                                    </button>
                                                    <button style={styles.DeleteButtonStyle}>
                                                        <img style={styles.deleteIcon} src = {delete_icon}/>
                                                        Delete
                                                    </button>
                                                </div>
                                                <div style={styles.DateTimePlace}>
                                                    <p>{event.eventDate}</p>
                                                </div>
                                                <div style={styles.EventContent}>
                                                    <p>{event.eventContent}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
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
    MainForumContainer: {
        width: '90%',
        height: '80%',
        alignItems: 'center',
        overflow: 'auto',
        maxHeight: '100%',
        display: 'grid',
        flex: 1,
        justifyContent: 'column',
        marginLeft: '45px',
        marginTop: '20px',
        backgroundColor: 'white',
        borderRadius: '6px'
    },
    EventContainer: {
        width: '94%',
        height: '150px',
        borderRadius: '5px',
        borderColor: 'gray',
        border: '10px',
        backgroundColor: 'white',
        marginLeft: '20px',
        marginTop: '20px',
        flex: 1,
        display: 'grid',
        boxShadow: '1px 1px 5px 1px grey',
    },
    ImageUploadFrame: {
        width: '160px',
        height: '120px',
        borderRadius: '5px',
        borderColor: Color.colorWhitesmoke,
        backgroundColor: Color.colorWhitesmoke,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20px',
        marginTop: '10px',
        objectFit: 'cover'
    },
    UploadedPhoto: {
        width: '140px',
        height: '100px',
        objectFit: 'cover',
        marginLeft: '10px',
        marginTop: '10px',
        objectFit: 'cover'
    },  
    EventContentContainer: {
        width: '550px',
        height: '120px',
        backgroundColor: 'white',
        marginLeft: '200px',
        marginTop: '-130px',
    },
    TitleAndButtonContainer: {
        width: '540px',
        height: '40px',
        backgroundColor: 'white',
        marginTop: '5px',
        display: 'inline-block',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    EventTitleTxt: {
        fontSize: 22,
        color: 'purple',
        marginLeft: '2px',
    },
    editIcon: {
        width: '12px',
        height: '12px',
        marginTop: '2px',
        marginRight: '2px',
    },

    EditButtonStyle: {
        cursor: 'pointer',
        width: '56px',
        height: '25px',
        backgroundColor: Color.colorPalevioletred,
        borderColor: 'white',
        borderRadius: '5px',
        flexDirection: 'column',
        fontSize: 12,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIcon: {
        width: '12px',
        height: '12px',
        marginTop: '2px',
        marginRight: '2px',
    },
    DeleteButtonStyle: {
        cursor: 'pointer',
        width: '65px',
        height: '25px',
        backgroundColor: Color.colorWhite,
        borderRadius: '5px',
        borderColor: 'white',
        flexDirection: 'column',
        fontSize: 12,
        color: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonContainer: {
        width: '170px',
        height: '25px',
        marginLeft: '400px',
        marginTop:'-24px',
    },
    DateTimePlace: {
        fontSize:10,
        color: 'gray',
        marginTop:'-8px',
        marginLeft: '5px',
    },
    EventContent: {
        width:'525px',
        height: '80px',
        fontSize: 11,
        marginTop:'-2px',
        marginLeft: '5px',
        textAlign: 'justify',
    }
}
export default EventScreen