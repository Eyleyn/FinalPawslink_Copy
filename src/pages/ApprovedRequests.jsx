{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
    About the code:
        Display the approved adopter's request. Request includes all the information of the adopter 
        and basic petting knowledge.
**/}

import { Button } from "@mui/material";
import React from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from 'react-router-dom';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import user_icon from "../assets/rectangle-1@2x.png";
import user_icon2 from "../assets/rectangle-2@2x.png";

import { useEffect, useState } from "react";
import axios from "axios";

const ApprovedRequests = () => {
  const [requestList, setRequestList] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    getRequestList();
  }, []);

  const getRequestList = async () =>{
    try {
      const result = await axios.get(`http://localhost:3030/api/getAdoptionRequest?status=pending`);
      if (result?.data?.data) {
        const requestList = result.data.data;
        const updatedUserList = await Promise.all(requestList.map(async (user) => {
          const animalName = await getAnimalNameById(user.animalId);
          return { ...user, animalName: animalName || 'Unknown' };
        }));
        setRequestList(updatedUserList);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const getAnimalNameById = async (id) => {
    try {
      const result = await axios.get(`http://localhost:3030/api/getanimals`, {
        params: { id }
      });
      const animal = result?.data?.find((animal) => animal._id === id);
      return animal?.mainName || 'Unknown';
    } catch (err) {
      console.log(err);
      return 'Unknown';
    }
  };

  const goToApproved = () => {
    navigate("/approved-request");
  };

  const handleBack = () => {
    navigate('/adoption-requests');
  };

  const viewRequest = () => {
    navigate("/view-request");
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
        <div style={styles.SecondMContainer}>
          <img style={styles.topLogoPawslink} src={top_logo} />
          <div style={styles.EventScreenContainer}>
            <div style={styles.buttonContainer}>
              <button style={styles.BackButton} onClick={handleBack}>
                <img style={styles.keyboardBackspace1} src={back_button} />
              </button>
              <b style={styles.EventTextStyle}>
                Approved Requests
              </b>
            </div>
            <div style={styles.RequestSection}>
              <div style={styles.RequestList}>
                {requestList.map((request, index) => (
                  <div key={request.id}>
                    <div style={styles.RequestListContainer}>
                      <div style={styles.RequestContainer}>
                        <img src={user_icon} alt="Uploaded" style={styles.UploadedPhoto} />
                        <div style={styles.RequestDetails}>
                          <p><b>{request.fname}</b> has been approved to adopt <b>{request.animalName}</b>
                            <div style={styles.ViewButtonContainer}>
                              <button style={styles.ButtonStyle} onClick={viewRequest}>
                                View Request
                              </button>
                            </div>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                ))}
              </div>
              <div style={styles.ArchiveContainer}>
                <div style={styles.archiveTextContainer}>
                  <b style={styles.archiveText}>Archive</b>
                </div>
                <div style={styles.ArchiveButtons}>
                  <button style={styles.ArchiveButtonStyle} onClick={goToApproved}>
                    Approved Requests
                  </button>
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
    FontFamily: FontFamily.epilogueBold,
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
  RequestSection: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '20px',
  },
  RequestList: {
    width: '65%',
    height: '85%',
    overflow: 'auto',
    maxHeight: '100%',
    backgroundColor: 'white',
    marginLeft: '20px',
  },
  ArchiveContainer: {
    width: '30%',
    height: 'auto',
    backgroundColor: Color.colorWhitesmoke,
    marginLeft: '20px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  RequestListContainer: {
    width: '100%',
    height: '80%',
    overflow: 'auto',
    maxHeight: '100%',
  },
  RequestContainer: {
    width: '90%',
    height: '80px',
    backgroundColor: 'white',
    marginLeft: '30px',
    marginTop: '30px',
    borderRadius: '8px',
    boxShadow: '1px 1px 5px 1px grey',
  },
  UserImageContainer: {
    objectFit: 'cover',
  },
  UploadedPhoto: {
    width: '50px',
    height: '50px',
    backgroundColor: 'purple',
    borderRadius: '30px',
    marginLeft: '10px',
    marginTop: '20px',
    objectFit: 'cover',
  },
  RequestDetails: {
    width: '250px',
    height: '30px',
    marginLeft: '75px',
    marginTop: '-55px',
    whiteSpace: 'nowrap',
  },
  ViewButtonContainer: {
    width: '100px',
    height: '30px',
    marginLeft: '335px',
    backgroundColor: 'yellow',
    marginTop: '-25px',
  },
  ButtonStyle: {
    width: '100px',
    height: '30px',
    backgroundColor: Color.colorPalevioletred,
    color: 'white',
    borderRadius: '5px',
    borderColor: 'white',
    fontSize: 11,
    cursor: 'pointer',
  },
  archiveTextContainer: {
    width: '100%',
    height: '50px',
    alignItems: 'center',
    display: 'flex',
    marginBottom: '10px',
  },
  archiveText: {
    fontSize: 30,
    color: 'purple',
  },
  ArchiveButtons: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  ArchiveButtonStyle: {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    borderColor: 'none',
    border: 'none',
    color: Color.colorPalevioletred,
    fontSize: 14,
    textAlign: 'left',
    padding: '5px 0',
  },
};

export default ApprovedRequests;
