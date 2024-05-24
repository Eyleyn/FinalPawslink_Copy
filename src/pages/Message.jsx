import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import attach_icon from "../assets/attachment.svg";
import add_icon from "../assets/image.svg";
import user_icon from "../assets/rectangle-1@2x.png";
import admin_pic from "../assets/image-29@3x.png";
import emoji_icon from "../assets/emotion-happy.svg";
import send_icon from "../assets/send.svg";
import { useNavigate } from "react-router-dom";
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";

const UserData = [
    {
        username: "sopepayy",
        message: 'Hello'
    },
    {
        username: "eyleyn",
        message: 'Thank you very much!'
    },
    {
        username: "jonah",
        message: 'I have a complain!!'
    },
];

const UserMessages = [
    {
        username: "jonah",
        sentMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        timeSent: '5 mins ago'
    },
];

const AdminMessages = [
    {
        username: "admin",
        responseMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        timeSent: 'Just now'
    },
];

const MessagesScreen = () =>{
    const navigate = useNavigate(); // Hook for navigation

    const handleBack = () => {
        navigate('/dashboard'); // This will navigate to Dashboard when called
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.SecondMContainer}>
                    <img style={styles.topLogoPawslink} src = {top_logo} />
                    <div style={styles.MessageScreenContainer}>
                        <div style = {styles.buttonContainer}>
                            <button style={styles.BackButton} onClick={handleBack}>
                                <img style={styles.keyboardBackspace1} src = {back_button}/>
                            </button>
                            <b style={styles.MessageTextStyle}>
                                Messages
                            </b>
                        </div>
                        <div style={styles.MessageProperContainer}>
                            {/*left container*/}
                            <div style = {styles.LeftUserContainer}>
                                {UserData.map((user, index) => (
                                    <div key={index}> 
                                        <div style={styles.UserPicFrame}>
                                            <img style={styles.IconLogo} src = {user_icon}/>
                                        </div>
                                        <button style={styles.UsernameContainer}>
                                            <div style={styles.ChatMessageUserContainer}>
                                                <b style={styles.UsernameTxtStyle}> {user.username} </b>
                                            </div>
                                            <div style={styles.ChatMessageContainer}>
                                                <div style={styles.UserMessageTxtStyle}> {user.message} </div>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {/*right container*/}
                            <div style = {styles.RightUserContainer}>
                                <div style={styles.ConversationContainer}>
                                {UserMessages.map((usermsg, index) => (
                                    <div key={index}> 
                                        <div style={styles.UserChatContainer}>
                                            <img style={styles.UserImage} src = {user_icon}/>
                                            <div style={styles.ChatBubble}>
                                                <p style={styles.TextMessageStyle}>{usermsg.sentMessage}</p>
                                            </div>
                                            <div style={styles.AnotherChatBubble}>
                                                <p style={styles.TextMessageStyle}>{usermsg.sentMessage}</p>
                                            </div>
                                            <p style={styles.TimeTxtStyle}>{usermsg.timeSent}</p>
                                        </div>
                                    </div>
                                ))}
                                    <div style={styles.AdminChatContainer}>
                                    {AdminMessages.map((adminmsg, index) => (
                                        <div key={index}>
                                            <img style={styles.AdminImage} src = {admin_pic}/>
                                            <div style={styles.AdminChatBubble}>
                                                <p style={styles.AdminTextMessageStyle}>{adminmsg.responseMessage}</p>
                                            </div>
                                            <p style={styles.TimeAdminTxtStyle}>{adminmsg.timeSent}</p>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                                <div style={styles.TypeContainer}>
                                    <div style={styles.TypeFooterContainer}>
                                        <div style={styles.AddContainer}>
                                            <button style={styles.addButton}>
                                                <img src = {add_icon}/>
                                            </button>
                                        </div>
                                        <div style={styles.AttachContainer}>
                                            <button style={styles.attachButton}>
                                                <img src = {attach_icon}/>
                                            </button>
                                        </div>
                                        <div style={styles.inputContainer}>
                                            <input style={styles.textBoxInput} type="text" name="" id="" 
                                            placeholder="Aa"/>
                                        </div>
                                        <div style={styles.EmojiContainer}>
                                            <button style={styles.emojiButton}>
                                                <img src = {emoji_icon}/>
                                            </button>
                                        </div>
                                        <div style={styles.SendContainer}>
                                            <button style={styles.sendButton}>
                                                <img src = {send_icon}/>
                                            </button>
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
    MessageScreenContainer: {
        flexDirection: 'column',
        height: 'auto',
        width: '91%',
        marginRight: '150px',
        marginLeft: '50px',
        borderRadius: '12px',
        backgroundColor: Color.colorWhitesmoke,
        flex: 1,
        alignItems: 'center',
    },
    MessageTextStyle: {
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
        backgroundColor: Color.colorWhitesmoke,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '20px',
        borderColor: Color.colorWhitesmoke,
    },
    keyboardBackspace1: {
        width: '44px',
        height: '34px',
        borderColor: Color.colorWhite,
    },
    BackButton: {
        cursor: 'pointer',
        border: '0',
        borderColor: Color.colorWhitesmoke,
        width: '54px',
        height: '24px',
        backgroundColor: Color.colorWhitesmoke,
        objectFit: 'cover',
    },
    MessageProperContainer:{
        width: '100%',
        height: 'auto',
    },
    LeftUserContainer: {
        width: '280px',
        height: '500px',
        backgroundColor: Color.colorWhite,
        marginLeft: '50px',
        marginTop: '20px',  
        position: 'absolute', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    IconLogo: {
        width: '40px',
        height: '40px',
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: '30px',
    },
    ChatContainer: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        position: 'absolute',
        marginTop: '20px',
        marginLeft: '10px',
        width: '250px',
        height: '55px',
        borderRadius: '5px',
    },
    UsernameContainer: {
        cursor: 'pointer',
        width: '200px',
        height: '50px',
        marginLeft: '60px',
        marginTop: '6px',
        marginBottom: '10px',
        borderColor: 'none',
        border: 'none',
        backgroundColor: 'white',
    },
    UserPicFrame: {
        width: '40px',
        height: '40px',
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: '30px',
        backgroundColor: 'pink',
        marginTop: '6px',
        marginLeft: '10px'
    },
    RightUserContainer: {
        width: '550px',
        height: '500px',
        backgroundColor: 'white',
        marginLeft: '340px',
        marginTop: '20px',  
        position: 'absolute', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    UsernameTxtStyle:{
        fontSize: 14,
        marginLeft: '10px',
        position: 'absolute',
        marginTop: '5px',
        FontFamily: FontFamily.epilogueBold,
    },
    UserMessageTxtStyle:{
        fontSize: 12,
        marginLeft: '10px',
        position: 'absolute',
        marginTop: '5px',
        FontFamily: FontFamily.epilogueBold,
    },
    ChatMessageUserContainer:{
        width: '180px',
        height: '50%',
        backgroundColor: 'white',
        marginLeft: '5px',
        textAlign: 'left',
        flex: 1,
        alignItems:'left',
    },
    ChatMessageContainer: {
        width: '180px',
        height: '50%',
        backgroundColor: 'white',
        marginLeft: '5px',
        textAlign: 'left',
        alignItems:'left',
        lineHeight: '15px',
        borderBottom: "1px solid rgb(212, 212, 212)",
    },
    TypeContainer: {
        width: '100%',
        height: '70px',
        backgroundColor: Color.colorWhitesmoke,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flex: 1
    },
    ConversationContainer: {
        width: '100%',
        height: '450px',
        backgroundColor: 'white',
        display: 'flex',
        fleX: 1,
        flexDirection: 'column',
    },
    UserChatContainer: {
        width: '550px',
        height: '200px',
        justifyContent: 'left',
        display: 'grid',
        flexDirection: 'column',
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: '27px',
        alignItems: 'left',
    },
    AdminChatContainer: {
        width: '550px',
        height: '100px',
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: '220px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flex: 1
    },
    UserImage: {
        width: '35px',
        height: '35px',
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: '30px',
        marginLeft: '15px',
        marginTop: '20px',
        backgroundColor: 'pink',
    },
    AdminImage: {
        width: '35px',
        height: '35px',
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: '30px',
        marginTop: '10px',
        marginLeft: '460px',
        backgroundColor: Color.colorPalevioletred,
    },
    ChatBubble: {
        width: '400px',
        height: '70px',
        backgroundColor: Color.colorWhitesmoke,
        marginLeft: '60px',
        marginTop: '10px',
        borderRadius: '10px',
    },
    AnotherChatBubble: {
        width: '360px',
        height: '70px',
        backgroundColor: Color.colorWhitesmoke,
        marginLeft: '60px',
        marginTop: '7px',
        borderRadius: '10px',
    },
    AdminChatBubble: {
        width: '400px',
        height: '70px',
        backgroundColor: Color.colorWhitesmoke,
        marginLeft: '50px',
        marginTop: '-10px',
        borderRadius: '10px',
    },
    TextMessageStyle: {
        fontSize: 12,
        color:'gray',
        textAlign: 'left',
        marginLeft: '10px',
        lineHeight: '20px',
    },
    AdminTextMessageStyle: {
        fontSize: 12,
        color:'gray',
        textAlign: 'left',
        marginLeft: '10px',
        lineHeight: '20px',
    },
    TimeTxtStyle: {
        fontSize: 10,
        color:'gray',
        textAlign: 'left',
        marginLeft: '65px',
        lineHeight: '10px',
        marginTop: '3px',
    },
    TimeAdminTxtStyle: {
        fontSize: 10,
        color:'gray',
        textAlign: 'right',
        marginRight: '10px',
        lineHeight: '10px',
        marginTop: '5px',
    },
    TypeFooterContainer:{
        width: '100%',
        height: '50px',
        backgroundColor: 'white',
        flex: 1,
        flexDirection:'row',
        display: 'flex',
        borderRadius: '10px',
    },
    AddContainer:{
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        marginLeft: '5px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    addButton:{
        width: '30px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        backgroundColor: 'white',
    },
    AttachContainer: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    attachButton: {
        width: '30px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        backgroundColor: 'white',
    },
    inputContainer: {
        width: '450px',
        height: '50px',
        backgroundColor :'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'2px',
    },
    textBoxInput: {
        width: '430px',
        height: '30px',
        marginTop: '9px',
        borderRadius: '4px',
        border: '1px',
        marginLeft:'2px',
        borderColor: 'gray',
        backgroundColor: Color.colorWhitesmoke,
    },
    EmojiContainer:{
        width: '50px',
        height: '50px',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.colorWhitesmoke,
    },
    emojiButton: {
        width: '30px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        marginLeft: '-100px',
        backgroundColor: Color.colorWhitesmoke,
    },
    SendContainer: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '-40px',
    },
    sendButton: {
        width: '30px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        backgroundColor: 'white',
    },
    
}

export default MessagesScreen