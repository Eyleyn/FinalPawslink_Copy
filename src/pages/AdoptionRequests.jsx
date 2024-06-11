{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
      About the code:
          Display all the list of adoption requests. Request includes the user's name and the name of the animal that the user wants to adopt.
          This screen also ables the admin to view the request, approve and decline that request.
**/}

import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from 'react-router-dom';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";
import user_icon from "../assets/rectangle-1@2x.png";
import axios from "axios";

const AdoptionRequests = () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([]);

  const goToApproved = () => {
    navigate("/approved-request");
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const viewRequest = (requestId) => {
    navigate(`/view-request`);
  };

  useEffect(() => {
    getUserList();
  }, []);

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

  const getUserList = async () => {
    try {
      const result = await axios.get(`http://localhost:3030/api/getAdoptionRequest?all=true`);
      if (result?.data?.data) {
        const userList = result.data.data;
        const updatedUserList = await Promise.all(userList.map(async (user) => {
          const animalName = await getAnimalNameById(user.animalId);
          return { ...user, animalName: animalName || 'Unknown' };
        }));
        setUserList(updatedUserList);
      }
    } catch (err) {
      console.log(err);
    }
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
              <b style={styles.EventTextStyle}>Adoption Requests</b>
            </div>
            <div style={styles.RequestSection}>
              <div style={styles.RequestList}>
                {userList.map((request) => (
                  <div key={request.id}>
                    <div style={styles.RequestListContainer}>
                      <div style={styles.RequestContainer}>
                        <img src={user_icon} alt="Uploaded" style={styles.UploadedPhoto} />
                        <div style={styles.RequestDetails}>
                          <p>
                            <b>{request.fname}</b> wants to adopt <b>{request.animalName}</b>
                            <div style={styles.ViewButtonContainer}>
                              <button style={styles.ButtonStyle} onClick={() => viewRequest()}>
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
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
  },
  ArchiveButtonStyle: {
    width: '200px',
    height: '40px',
    backgroundColor: Color.colorPalevioletred,
    color: 'white',
    borderRadius: '5px',
    borderColor: 'white',
    fontSize: 14,
    cursor: 'pointer',
    marginBottom: '10px',
  },
};

export default AdoptionRequests;

