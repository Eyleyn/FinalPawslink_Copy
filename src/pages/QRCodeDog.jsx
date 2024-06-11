{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
    About the code:
        Generates the QR Code for the animals using its ID.
**/}

import React, { useRef } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate, useLocation } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import { Color, FontFamily } from "../assets/login/GlobalStyles";

const DownloadQR = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const qrRef = useRef();

  const handleBack = () => {
    navigate("/dogs");
  };

  const downloadQRCode = () => {
    toPng(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${location.state.dogName}-QRCode.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Failed to generate QR code image', err);
      });
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
        <div style={styles.SecondMContainer}>
          <img style={styles.topLogoPawslink} src={top_logo} alt="Top Logo" />
          <div style={styles.EventScreenContainer}>
            <div style={styles.buttonContainer}>
              <button style={styles.BackButton} onClick={handleBack}>
                <img style={styles.keyboardBackspace1} src={back_button} alt="Back" />
              </button>
              <b style={styles.EventTextStyle}>
                QR Code Download
              </b>
            </div>
            <div style={styles.qrContainer}>
              <div ref={qrRef}>
                <QRCode value={location.state} size={256} />
              </div>
              <button style={styles.downloadButton} onClick={downloadQRCode}>
                Download QR Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
    flexDirection: 'column',
    backgroundColor: Color.colorWhite,
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
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    alignItems: 'center',
  },
  EventTextStyle: {
    fontSize: '30px',
    color: Color.colorPalevioletred,
    marginLeft: '5px',
    display: 'inline-block',
    lineHeight: '90px',
    fontFamily: FontFamily.epilogueBold,
    whiteSpace: 'nowrap',
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
  qrContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  downloadButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: Color.colorWhite,
    backgroundColor: Color.colorPalevioletred,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default DownloadQR;
