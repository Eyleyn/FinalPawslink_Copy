{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
    About the code:
        Displays the list of forum posted by the users. Post includes title, post content and/or pictures. Admin are able to delete post that 
        is not related to animals.
**/}

import React from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import user_icon from "../assets/rectangle-2@2x.png";
import comment_icon from "../assets/comment-2.svg";
import upload_photo from "../assets/image-38@3x.png";
import { useNavigate } from 'react-router-dom';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";

import { useEffect, useState } from "react";
import axios from "axios";

const ForumScreen = () => {
    const [forumList, setForumList] = useState([])

    useEffect(()=>{
        getForumList();
    }, []);

    const getForumList = async () =>{
        await axios.get(`http://localhost:3030/api/getForumEntry?all=true`)
        .then(result =>{
            console.log(result)
            if(result && result.data && result.data.data){
                setForumList(result.data.data);
            }else{
                setForumList(result.data)
            }
        })
        .catch(err =>{
            console.log(err)
        })
    }
    const navigate = useNavigate();

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
                            {forumList.map((post) => {
                                return (
                                    <ForumComponent post={post} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ForumComponent = ({post}) =>  {
    const navigate = useNavigate();

    const handleView = (post) => {
        navigate('/view-forum', { state: { ...post } });
    }

    const [entryImageURL, setImgURL] = useState("");

    useEffect(() => {
        if(post.entryImageURL){
            console.log("true")
            getImageURL()
        }
    },[]);

    const getImageURL = async () => {
        await axios
            .get(`http://localhost:3030/api/getImageUrl?objectKey=${post.entryImageURL}`)
            .then((result) => {
                console.log(result.data.data);
                if(result && result.data && result.data.data){
                    setImgURL(result.data.data);
                }
                else{
                    setImgURL(result.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div key={post.id} style={styles.ForumContainer}>
            <div style={styles.ScrollablePostContainer}>
                <div style={styles.PostContainer}>
                    <div style={styles.imgFrame}>
                        <img style={styles.imageIcon} src={user_icon} alt="User Icon" />
                        <p style={styles.UsernameTxtStyle}>{post.username}</p>
                    </div>
                    <div style={styles.TxtContainer}>
                        <div style={styles.TitleStyle}>
                            <b style={styles.TitleText}>{post.title}</b>
                        </div>
                        <div style={styles.PostStyle}>
                            <p style={styles.PostTxtStyle}>{post.content}</p>
                        </div>
                        <div style={styles.ImageUploadFrame}>
                            <img style={styles.UploadedPhoto} alt="" src={entryImageURL.length?entryImageURL:""} />
                        </div>
                        <div style={styles.BottomPostStyle}>
                            <div style={styles.CommentIconContainer}>
                                <img style={styles.Comment} src={comment_icon} alt="Comment Icon" />
                            </div>
                            <p style={styles.CommentText}>{post.commentNum}</p>
                            <p style={styles.DateText}>{post.datePosted}</p>
                            <div style={styles.ViewButtonContainer} onClick={() => handleView(post)}>
                                <button style={styles.ViewButton}>
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
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
