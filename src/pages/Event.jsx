{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
      About the code:
          Displays the list of events.
**/}

import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import user_icon from "../assets/rectangle-2@2x.png";
import comment_icon from "../assets/comment-2.svg";
import upload_photo from "../assets/image-38@3x.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import delete_icon from "../assets/E delete.png";
import edit_icon from "../assets/Edit.png";
import { borderColor, borderRadius, color, display, fontSize, height, margin, positions, textAlign } from "@mui/system";

import { useEffect, useState } from "react";
import axios from "axios";
import { localMachineIpAddress } from "./EventFile";

const EventScreen = () => {
    const [eventList, setEvList] = useState([]);

    useEffect(()=>{
        getViewList();
    }, []);

    const getViewList = async () =>{
        await axios.get(`http://localhost:3030/api/getEvent?all=true`)
        .then(result =>{
            console.log(result)
            if(result && result.data && result.data.data){
                setEvList(result.data.data);
            }else{
                setEvList(result.data)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }

    const navigate = useNavigate(); // Hook for navigation


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
                                Events
                            </b>
                        </div>
                        <div style={styles.MainForumContainer}>
                            {eventList.map((event) => {
                                    return (
                                        <EventComponentBox event = {event}/>
                                    );
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EventComponentBox = ({event}) =>{
    const navigate = useNavigate(); // Hook for navigation

    console.log(event);
    const [imgUrl, setImgUrl] = useState("");
    
    useEffect(() =>{
        if(event.contentImgUrl){
            console.log("true")
            getImageUrl()
        }
    },[]);
    const getImageUrl = async () => {
    await axios
      .get(`http://localhost:3030/api/getImageUrl?objectKey=${event.contentImgUrl}`)
      .then((result) => {
        console.log(result.data.data);
        if(result && result.data && result.data.data){
            setImgUrl(result.data.data);
        }else{
            setImgUrl(result.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    };

    const deleteItem = async (event) => {
        try {
          const response = await axios.delete(`http://localhost:3030/api/deleteEvent?_id=${event}`);
        } catch (error) {
          console.error('Error deleting item:', error);
        }
        navigate("/dashboard");
    };

    const handleEdit = (event) => {
        console.log('pressed')
        navigate('/edit-event', { state: { ...event } }); // Navigate to the edit-animal route with dog data
    };

    return (
        <div key={event.id}> 
        <div style={styles.EventContainer}>
            <div style={styles.ImageUploadFrame}>
                <img style={styles.UploadedPhoto} alt="" src={imgUrl.length?imgUrl:""} />
            </div>
            <div style={styles.EventContentContainer}>
                <div style={styles.TitleAndButtonContainer}>
                    <b style={styles.EventTitleTxt}>{event.title}</b>
                    <div style={styles.ButtonContainer}>
                        <button style={styles.EditButtonStyle} onClick={() => handleEdit(event)}>
                            <img style={styles.editIcon} src = {edit_icon}/>
                            Edit
                        </button>
                        <button style={styles.DeleteButtonStyle} onClick={() => deleteItem(event._id)}>
                            <img style={styles.deleteIcon} src = {delete_icon}/>
                            Delete
                        </button>
                    </div>
                    <div style={styles.DateTimePlace}>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                    </div>
                    <div style={styles.EventContent}>
                        <p>{event.content}</p>
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
        marginTop: '10px',
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
        marginLeft: '20px',
        marginTop: '10px',
        overflow: 'hidden',
        position: 'relative',
    },
    UploadedPhoto: {
        width: '100%',
        height: '100%',
        marginLeft: '10px',
        marginTop: '10px',
        position: 'absolute',
        objectFit: 'cover',
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
