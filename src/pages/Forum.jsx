import React from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import user_icon from "../assets/rectangle-2@2x.png";
import comment_icon from "../assets/comment-2.svg";
import upload_photo from "../assets/image-38@3x.png";
import { useNavigate } from 'react-router-dom';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";

const PostData = [
    {
        username: '@Jonah',
        postTitle: 'this is a question',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '5 comments',
        datePosted: '03-18-2023',
    },
    {
        username: '@SophiaDe1st',
        postTitle: 'this is a question',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '20 comments',
        datePosted: '03-18-2023',
    },
    {
        username: '@Ellien',
        postTitle: 'this is a question?',
        postContent: 'Its nice, he is so cute',
        comments: '3 comments',
        datePosted: '03-18-2023',
        photo: [upload_photo],
    },
    {
        username: '@HeyItsMe',
        postTitle: '#GoodDay',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '3 comments',
        datePosted: '03-18-2023',
    },
    {
        username: '@HeyItsMe',
        postTitle: '#GoodDay',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '3 comments',
        datePosted: '03-18-2023',
    },
    {
        username: '@HeyItsMe',
        postTitle: '#GoodDay',
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        comments: '3 comments',
        datePosted: '03-18-2023',
    },
];

const ForumScreen = () => {
    const navigate = useNavigate();

    const viewForum = () => {
        navigate("/view-forum");
    }

    const handleBack = () => {
        navigate('/dashboard');
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.SecondMContainer}>
                    <img style={styles.topLogoPawslink} src={top_logo} alt="Pawslink Logo" />
                    <div style={styles.ForumScreenContainer}>
                        <div style={styles.buttonContainer}>
                            <button style={styles.BackButton} onClick={handleBack}>
                                <img style={styles.keyboardBackspace1} src={back_button} alt="Back" />
                            </button>
                            <b style={styles.ForumTextStyle}>
                                Forum
                            </b>
                        </div>
                        <div style={styles.MainForumContainer}>
                            {PostData.map((post, index) => (
                                <div key={index} style={styles.ForumContainer}>
                                    <div style={styles.ScrollablePostContainer}>
                                        <div style={styles.PostContainer}>
                                            <div style={styles.imgFrame}>
                                                <img style={styles.imageIcon} src={user_icon} alt="User Icon" />
                                                <p style={styles.UsernameTxtStyle}>{post.username}</p>
                                            </div>
                                            <div style={styles.TxtContainer}>
                                                <div style={styles.TitleStyle}>
                                                    <b style={styles.TitleText}>{post.postTitle}</b>
                                                </div>
                                                <div style={styles.PostStyle}>
                                                    <p style={styles.PostTxtStyle}>{post.postContent}</p>
                                                </div>
                                                <div style={styles.ImageUploadFrame}>
                                                    {post.photo && post.photo.map((photo, idx) => (
                                                        <img key={idx} src={photo} alt="Uploaded" style={styles.UploadedPhoto} />
                                                    ))}
                                                </div>
                                                <div style={styles.BottomPostStyle}>
                                                    <div style={styles.CommentIconContainer}>
                                                        <img style={styles.Comment} src={comment_icon} alt="Comment Icon" />
                                                    </div>
                                                    <p style={styles.CommentText}>{post.comments}</p>
                                                    <p style={styles.DateText}>{post.datePosted}</p>
                                                    <div style={styles.ViewButtonContainer} onClick={viewForum}>
                                                        <button style={styles.ViewButton}>
                                                            View
                                                        </button>
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
    )
}

const styles = {
    mainContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.colorWhitesmoke,
    },
    mainContentContainer: {
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
    ForumScreenContainer: {
        flexDirection: 'column',
        height: '70%',
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
        lineHeight: '90px',
        FontFamily: FontFamily.epilogueBold,
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        width: '100px',
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
        height: '70%',
        alignItems: 'center',
        overflow: 'auto',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '45px',
        marginTop: '10px',
        backgroundColor: Color.colorWhitesmoke,
        borderRadius: '6px',
        padding: '10px', // Added padding for better spacing
    },
    ForumContainer: {
        width: '100%',
        backgroundColor: Color.colorWhite,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px', // Added margin for separation
        padding: '10px', // Added padding inside each container
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Added shadow for better separation
    },
    ScrollablePostContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
    },
    PostContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: '15px',
        display: 'flex',
        padding: '10px',
    },
    imgFrame: {
        width: '50px',
        height: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        marginRight: '10px',
    },
    imageIcon: {
        height: '50px',
        width: '50px',
        backgroundColor: 'pink',
        borderRadius: '60px',
    },
    UsernameTxtStyle: {
        fontSize: 10,
        color: 'gray',
        textAlign: 'center',
        lineHeight: '1px',
    },
    TxtContainer: {
        flex: 1,
        backgroundColor: Color.colorWhite,
    },
    TitleStyle: {
        height: 'auto',
        backgroundColor: 'white',
        textAlign: 'left',
        marginBottom: '5px',
    },
    PostStyle: {
        height: 'auto',
        backgroundColor: 'white',
        marginBottom: '10px',
    },
    TitleText: {
        fontSize: 18,
    },
    PostTxtStyle: {
        fontSize: 14,
    },
    BottomPostStyle: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
    },
    CommentText: {
        fontSize: 11,
        marginLeft: '5px',
    },
    DateText: {
        fontSize: 11,
        marginLeft: '15px',
    },
    CommentIconContainer: {
        width: '20px',
        height: '20px',
        backgroundColor: Color.colorWhite,
        marginLeft: '5px',
    },
    Comment: {
        width: '20px',
        height: '20px',
    },
    ViewButtonContainer: {
        width: '50px',
        height: '20px',
        marginLeft: 'auto',
    },
    ViewButton: {
        fontSize: 10,
        color: 'white',
        backgroundColor: Color.colorPalevioletred,
        width: '50px',
        height: '20px',
        border: 'none',
        borderRadius: '3px',
    },
    UploadedPhoto: {
        marginTop: '10px',
        width: '120px',
        height: '120px',
        objectFit: 'cover',
    },
    ImageUploadFrame: {
        width: '100%',
        objectFit: 'cover',
        marginBottom: '10px',
    }
}

export default ForumScreen;
