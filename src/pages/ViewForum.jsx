{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
    About the code:
        View the forum including the comments in that post.
**/}

import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import user_icon from "../assets/rectangle-2@2x.png";
import commentUser_icon from "../assets/rectangle-1@2x.png";
import comment_icon from "../assets/comment-2.svg";
import bin_icon from "../assets/bin-1.svg";
import upload_photo from "../assets/image-38@3x.png";
import attach_icon from "../assets/attachment.svg";
import add_icon from "../assets/image.svg";
import admin_pic from "../assets/image-29@3x.png";
import emoji_icon from "../assets/emotion-happy.svg";
import send_icon from "../assets/send.svg";
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const PostData = [
    {
        username: '@Jonah',
        postTitle: 'this is a question',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '5 comments',
        datePosted: '03-18-2023',
    },
    
];

const UserComment = [
    {
        username: '@KylieJenner',
        commentContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        timeCommented: '11:45 AM',
    },
    {
        username: '@AsawaNiBillGates',
        timeCommented: '11:45 AM',
        photo: [upload_photo],
    },
    {
        username: '@CatrionGray',
        commentContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        timeCommented: '11:45 AM',
        photo: [upload_photo],
    },
    {
        username: '@CatrionGray',
        commentContent: 'Great, good idea!',
        timeCommented: '11:45 AM',
    },
    {
        username: '@CatrionGray',
        commentContent: 'Great, good idea!',
        timeCommented: '11:45 AM',
        photo: [upload_photo],
    },
];


const ViewForumScreen = () =>{
    const navigate = useNavigate(); // Hook for navigation

    const goToForum= () => {
        navigate("/forum"); 
    };
    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.SecondMContainer}>
                <img style={styles.topLogoPawslink} src = {top_logo} />
                <div style={styles.ViewForumScreenContainer}>
                    <div style = {styles.buttonContainer}>
                        <button style={styles.BackButton} onClick={goToForum}>
                        <img style={styles.keyboardBackspace1} src = {back_button}/>
                        </button>
                        <div style={styles.TextContainer}>
                            <b style={styles.ForumTextStyle}>
                                View Post
                            </b>
                        </div>
                    </div>
                    <div style={styles.ViewContainer}>
                        <div style={styles.PostContainer}>
                        {PostData.map((post, index) => (
                            <div key={index}> 
                                <div style={styles.ContentPostContainer}>
                                    <div style = {styles.imgFrame}>
                                        <img style={styles.imageIcon} src={user_icon} />
                                        <p style={styles.UsernameTxtStyle}>{post.username}</p>
                                    </div>
                                    <div style={styles.ContentContainer}>
                                        <img style={styles.binIcon} src={bin_icon} />
                                        <div style={styles.TitleStyle}>
                                            <b style={styles.TitleText}>{post.postTitle}</b>
                                        </div>
                                        <div style={styles.PostStyle}>
                                            <p style={styles.PostTxtStyle}>{post.postContent}</p>
                                        </div>
                                        <div style={styles.CommentContainer}> 
                                            <button style={styles.RepliesTxt}>
                                                Replies (5)
                                            </button>
                                            <div style = {styles.CommentMainContainer}>
                                            {UserComment.map((comment, index) => (
                                                <div key={index}> 
                                                    <div style={styles.UserCommentContainer}>
                                                        <img style={styles.CommenterProfile} src={commentUser_icon} />
                                                        <div style={styles.commentContentContainer}>
                                                            <div style={styles.UserandTimeContainer}>
                                                                <b style={styles.UsernameTxtStyle}>{comment.username}</b>
                                                                <p style={styles.TimeCommentedStyles}>{comment.timeCommented}</p>
                                                            </div>
                                                            <div style={styles.RepliesContainer}>
                                                                <p style={styles.CommentText}>{comment.commentContent}</p>
                                                                {comment.photo && comment.photo.map((photo, idx) => (
                                                                    <img key={idx} src={photo} alt="Uploaded" style={styles.UploadedPhoto} />
                                                                ))}
                                                                <div style={styles.ButtonReply}>
                                                                    <button style={styles.CommentReplyButton}>
                                                                        Reply
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                            <div style={styles.InputCommentContainer}>
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
    ViewForumScreenContainer:{
        flexDirection: 'column',
        height: '100%',
        width: '91%',
        marginRight: '150px',
        marginLeft: '50px',
        borderRadius: '12px',
        backgroundColor: Color.colorWhitesmoke,
        flex: 1,
        alignItems: 'center',
    },
    ForumTextStyle: {
        fontSize: '30px',
        color: Color.colorPalevioletred,
        marginLeft: '5px',
        display: 'inline-block',
        marginTop: '5px',
        FontFamily: FontFamily.epilogueBold,
        whiteSpace: 'nowrap',
    },
    TextContainer: {
        width: '100px',
        height: '50px',
        position: 'absolute',
        marginLeft: '50px',
        marginTop: '-45px'
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
        marginTop: '20px',
        backgroundColor: 'none',    
        objectFit: 'cover',
    },
    ViewContainer: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
        display: 'grid',
        flex: 1,    
        flexDirection: 'column',
        marginLeft: '45px',
        marginTop: '10px',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
    PostContainer: {
        width: '90%',
        height: '120px',
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        borderShadow: '5px',
        marginLeft: '40px',
        marginTop: '-400px',
        boxShadow: '1px 1px 5px 1px grey',
    },
    ContentPostContainer: {
        width: '95%',
        height: '120px',
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'column',
        borderShadow: '5px',
        marginLeft: '18px',
        display: 'grid',
    },
    imgFrame: {
        width: '10px',
        height: '10px',
        lineHeight: '5px',
        marginLeft: '30px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'grid'
    }, 
    imageIcon: {
        height: '60px',
        width: '60px',
        backgroundColor: 'pink',
        borderRadius: '60px',
        marginTop: '15px',
    },
    UsernameTxtStyle: {
        fontSize: 11,
        color: 'black',
        textAlign: 'left',
        lineHeight: '1px',
        marginLeft: '2px',
        marginTop: '20px'
    },
    UserandTimeContainer: {
        backgroundColor: 'white',
        width: 'auto',
        height: 'auto',
        display: 'flex',
        flex: 1,
        lineHeight: '5px'

    },
    ContentContainer: {
        height: '100px',
        width: '90%',
        backgroundColor: 'white',
        marginLeft: '74px',
        marginTop: '1px',
        flexDirection: 'column',
    },
    TitleStyle: {
        height: '30px',
        width: '98%',
        backgroundColor: 'white',
        marginLeft: '10px',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        display: 'inline-block'
    },
    PostStyle:{
        height: '59px',
        width: '95%',
        backgroundColor: 'white',
        marginLeft: '10px',
        marginTop: '-8px',
    },
    TitleText:{
        fontSize: 18,
        marginTop: '20px',
        color: 'purple',
    },
    PostTxtStyle: {
        fontSize: 14,
    },
    binIcon: {
        height: '20px',
        width: '20px',
        marginLeft: '600px',
        marginTop: '1px',
        position: 'absolute'
    },
    CommentContainer: {
        width: '56%',
        height: '60%',
        marginTop:'14px',
        marginLeft: '-92px',
        backgroundColor: Color.colorWhitesmoke,
        flexDirection: 'column',
        position: 'absolute',
    },
    RepliesTxt: {
        cursor: 'pointer',
        fontSize: 12,
        backgroundColor: 'white',
        border: 'none',
        borderShadow: 'none'
    },
    CommentMainContainer: {
        width: '99%',
        height: '70%',
        backgroundColor: 'white',
        marginLeft: '3px',
        marginTop: '4px',
        overflow: 'auto',
        maxHeight: '100%',
        flexDirection: 'column',
        display: 'grid',
        position: 'absolute'
    },
    UserCommentContainer: {
        width: '99%',
        height: '70%',
        backgroundColor: 'white',
        marginLeft: '3px',
        marginTop: '10px',
        lineHeight: '10px',
    },
    CommenterProfile: {
        width: '40px',
        height: '40px',
        borderRadius: '30px',
        backgroundColor: 'purple',
        marginLeft: '10px',
        marginTop: '10px',
    },
    commentContentContainer: {
        width: 'auto',
        height: 'auto',
        marginTop:'-60px',
        marginLeft: '70px',
    },
    TimeCommentedStyles: {
        fontSize: 8,
        marginLeft: '15px',
        marginTop: '18px',
    },
    RepliesContainer: {
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        marginTop: '-12px',
    },
    CommentText: {
        fontSize: 13,
    },
    ButtonReply: {
        width: 'auto',
        height: 'auto',
        marginTop: '5px',
        marginLeft: '5px',
    },
    CommentReplyButton: {
        cursor: 'pointer',
        width: '50px',
        height: '20px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: 11,
    },
    UploadedPhoto: {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    },
    InputCommentContainer:{
        marginTop: '20px',
        width: 'auto',
        height: 'auto',
        backgroundColor: 'white',
        marginTop: '270px',
        justifyContent: 'center',
        display: 'flex',
        flex: 1,
        flexDirection: 'row'
    },
    TypeFooterContainer: {
        marginTop: '8px',
        width: '100%',
        height: '75px',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'space-evenly',
        display: 'flex',
        flex:1
    },
    AddContainer:{
        width: '20px',
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
        width: '25px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        backgroundColor: 'white',
    },
    AttachContainer: {
        width: '20px',
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
        width: '650px',
        height: '50px',
        backgroundColor :'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'2px',
    },
    textBoxInput: {
        width: '630px',
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
    },
    emojiButton: {
        width: '30px',
        height: '25px',
        border: 'none',
        marginTop: '5px',
        marginLeft: '-100px',
        backgroundColor: 'white',
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

export default ViewForumScreen
