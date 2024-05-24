import React from "react";
import { useNavigate } from 'react-router-dom';
import Pawslink_logo from "../assets/image-29@3x.png";
import logo1 from '../assets/image-27@3x.png';
import logo2 from '../assets/image-26@3x.png';
import logo3 from '../assets/image-25@3x.png';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";

const LogInScreen = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleSignIn = () => {
        navigate('/dashboard'); // This will navigate to Dashboard when called
    };


    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.leftContainer}>
                    <div style={styles.leftContentContainer}>
                        <div style={styles.siginTextContainer}>
                            <p style={styles.signInText}>Sign in</p>
                        </div>
                        <div style={styles.inputContainer}>
                            <div style={styles.inputOuterContainer}>
                                <div style={styles.inputInnerContainer}>
                                    <input
                                        style={styles.textInput}
                                        type="text"
                                        placeholder="admin"
                                    />
                                </div>
                            </div>
                            <div style={styles.inputOuterContainer}>
                                <div style={styles.inputInnerContainer}>
                                    <input
                                        style={styles.textInput}
                                        type="password"
                                        placeholder="enter password"
                                    />
                                </div>
                            </div>
                        </div>
                        <div style={styles.bottomContainer}>
                            <div style={styles.bottomContentContainer}>
                                <div style={styles.bottomLeftContent}>
                                    <input type="checkbox" />
                                    <p style={styles.remeberMeText}>Remember me</p>
                                </div>
                                <div style={styles.bottomRightContent}>
                                    <a style={styles.forgotText} href="#">Forgot password?</a>
                                </div>
                            </div>
                            <div>
                            <button style={styles.siginButton} onClick={handleSignIn}>
                                <div style={styles.siginText}>Sign in</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={styles.rightContainer}>
                    <div style={styles.logoPawslinkContainer}>
                        <img style={styles.image29Icon} src={Pawslink_logo} alt="Pawslink Logo" />
                    </div>
                    <div>
                        <i style={styles.inPartnershipWith}>in partnership with</i>
                    </div>
                    <div style={styles.rightBottomContainer}>
                        <img style={styles.image25Icon} src={logo1} alt="Logo 1" />
                        <img style={styles.image26Icon} src={logo2} alt="Logo 2" />
                        <img style={styles.image27Icon} src={logo3} alt="Logo 3" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    mainContainer:{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: Color.colorWhitesmoke
    },
    mainContentContainer:{
        width: '75vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row'
    },
    leftContainer:{
        display: 'flex',
        width: '60%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        width: '40%',
        height: '100%',
        backgroundColor:Color.colorPalevioletred,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    leftContentContainer:{
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: '45%',
    },
    siginTextContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        width: '100%',
    },
    signInText: {
        textTransform: 'capitalize',
        fontSize: 20,
        lineHeight: 26,
        fontFamily: [FontFamily.epilogueBold, 'Arial'],
        color: Color.colorGray_100,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
        height: '40%',
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputOuterContainer:{
        height: '40%',
        width: '100%',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputInnerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        width: '100%',
        height: '100%',
        backgroundColor: "#DCDCDC",
        borderRadius: 5,
    },
    textInput:{
        backgroundColor: 'transparent',
        border: 'none',
        width: '100%',
        height: "100%"
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '30%',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContentContainer:{
        width: '80%',
        height: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    bottomLeftContent: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: "50%",
        alignItems: 'center',
        height: '30%'
    },
    bottomRightContent:{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '50%',
        height: '30%',
    },
    siginButton: {
        cursor: 'pointer',
        border: 'none',
        padding: '10px 20px', // Add padding to give text some room
        backgroundColor: Color.colorPalevioletred,
        boxShadow: '0 0 2px rgba(210, 98, 138, 0.12), 0 8px 17px rgba(210, 98, 138, 0.15)',
        borderRadius: '4px', // As previously defined
        overflow: 'visible', // Change to visible to ensure text is not cut off
        width: 'auto', // Change to auto to accommodate text based on its length
        height: 'auto', // Adjust height accordingly to fit content
        display: 'inline-block' // Ensures button respects the width/height of its content
    },
    
    siginText: {
        fontSize: '18px',
        lineHeight: '26px',
        fontFamily: FontFamily.interRegular,
        color: Color.colorWhite,
        textAlign: 'center'
    },
    
    
    remeberMeText: {
       // lineHeight: 22,
        fontSize: 12,
    },
    forgotText:{
        lineHeight: '22px',
        color: Color.colorPalevioletred,
        textAlign: 'right',
        display: 'inline-block',
        fontSize: 14,
    },
    logoPawslinkContainer: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '80%',
        flexDirection: 'column',
        marginTop: '90px',
    },
    image29Icon: {
        width: '220px',
        height: '200px',
    },
    rightBottomContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '80%',
        height: '20%',
        marginBottom: '150px',
        flexDirection: 'row',
    },
    image25Icon: {
        width: '80px',
        height: '80px',
    },
    image26Icon: {
        width: '80px',
        height: '80px',
    },
    image27Icon: {
        width: '90px',
        height: '90px',
    },
    inPartnershipWith: {
        justifyContent: 'center',
        display: 'inline-block',
        color: Color.colorWhite,
        lineHeight: '74px'
    },
    label: {
        fontSize: 10,
    }
}
export default LogInScreen