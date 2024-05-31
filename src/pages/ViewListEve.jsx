import React, { forwardRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import dog_image from "../assets/imageDog.png";
import qr_code from "../assets/pen.png";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';

import { useEffect, useState } from "react";
import axios from "axios";

const EventScreen = () => {
    const [viewEventList, setEventList] = useState([]);

    return (
        <div style={styles.mainContainer}>

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
}
export default EventScreen;