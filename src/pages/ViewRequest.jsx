import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import IDupload from "../assets/rectangle-2@2x.png";
import { Color, FontFamily } from "../assets/login/GlobalStyles";

const ViewRequest = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Access route parameter
  const [requestDetails, setRequestDetails] = useState(null);

  const goToApproved = () => {
    navigate("/approved-request");
  };

  const goToDeclined = () => {
    navigate("/declined-request");
  };

  const handleBack = () => {
    navigate('/adoption-requests');
  };

  useEffect(() => {
    if (id) {
      console.log(id)
      fetchRequestDetails(id); // Fetch request details using the ID
    } else {
      console.error('No ID found in route params');
    }
  }, [id]);

  const fetchRequestDetails = async (requestId) => {
    try {
      const result = await axios.get(`http://localhost:3030/api/getAdoptionRequest/${requestId}`);
      console.log(result.data)
      setRequestDetails(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  const approveRequest = async (requestId) => {
    try {
      await axios.put("http://localhost:3030/api/updateAdoptionRequest", {
        _id: requestId,
        approve: true
      });
      goToApproved();
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
              <b style={styles.EventTextStyle}>User Request</b>
            </div>
          </div>
          <div style={styles.UserInformationContainer}>
            {requestDetails ? (
              <>
                <div style={styles.BasicInfo}>
                  <b style={styles.HeaderStyle}>Basic Info</b>
                  <div style={styles.FnameToFBContainer}>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>First name</b>
                      <div style={styles.InputContainer}>{requestDetails.fname}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Last name</b>
                      <div style={styles.InputContainer}>{requestDetails.lname}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Age</b>
                      <div style={styles.InputContainer}>{requestDetails.age}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Student?</b>
                      <div style={styles.InputContainer}>{requestDetails.student}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Contact Number</b>
                      <div style={styles.InputContainer}>{requestDetails.contactNumber}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Email Address</b>
                      <div style={styles.InputContainer}>{requestDetails.email}</div>
                    </div>
                    <div style={styles.SubHeaderTextStyle}>
                      <b>Facebook</b>
                      <div style={styles.InputContainer}>{requestDetails.facebookLink}</div>
                    </div>
                  </div>
                </div>
                <div style={styles.AddressesContainer}>
                  <div style={styles.SubHeaderTextStyle}>
                    <b>Complete Home Address</b>
                    <div style={styles.InputContainer}>{requestDetails.completeHomeAddress}</div>
                  </div>
                  <div style={styles.SubHeaderTextStyle}>
                    <b>Current Home Address</b>
                    <div style={styles.InputContainer}>{requestDetails.completeCurrentAddress}</div>
                  </div>
                </div>
                <div style={styles.PetHistory}>
                  <b style={styles.HeaderStyle}>Pet History</b>
                  <div style={styles.SubHeaderTextStyle}>
                    <b>No. of pets</b>
                    <div style={styles.InputContainer}>{requestDetails.numberOfPets}</div>
                  </div>
                  <div style={styles.SubHeaderTextStyle}>
                    <b>Had a pet before?</b>
                    <div style={styles.InputContainer}>{requestDetails.hadPetsBefore}</div>
                  </div>
                  <div style={styles.SubHeaderTextStyle}>
                    <b>What happened to it?</b>
                    <div style={styles.InputContainer}>{requestDetails.whatHappenedToPet}</div>
                  </div>
                </div>
                <div style={styles.IDContainer}>
                  <b style={styles.HeaderStyle}>ID</b>
                  <img src={IDupload} alt="Uploaded" style={styles.UploadedPhoto} />
                </div>
                <div style={styles.ButtonContainer}>
                  <button style={styles.ButtonStyle} onClick={() => approveRequest(requestDetails.id)}>
                    Approve
                  </button>
                  <button style={styles.ButtonStyle} onClick={goToDeclined}>
                    Decline
                  </button>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

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
      width: '91%',
      height: '100%',
      marginRight: '150px',
      marginLeft: '50px',
      borderRadius: '12px',
      backgroundColor:  Color.colorWhite,
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
      width:  '10%',
      height: '50%',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginTop: '20px',
      marginLeft: '20px',
      borderColor: 'none',
      backgroundColor: Color.colorWhite,
  },
  keyboardBackspace1: {
      width: '44px',
      height: '34px',
      borderColor: 'none',
      backgroundColor: 'white',   
  },
  BackButton: {
      cursor: 'pointer',
      border: '0',
      borderColor: 'none',
      width: '54px',
      height: '24px',
      backgroundColor: 'white',    
      objectFit: 'cover',
  },
  UserInfomationContainer: {
    width: '90%',
    height: '100%',
    backgroundColor: 'white',
    marginLeft: '55px',
    marginTop: '-50px',
  },
  BasicInfo: {
    width: '95%',
    height: '30px',
    backgroundColor: 'white',
    marginLeft: '25px',
    marginTop: '30px',
  },
  PetHistory: {
    width: '55%',
    height: '150px',
    backgroundColor: 'white',
    marginLeft: '25px',
    marginTop: '-5px',
  },  
  Accomodation: {
    marginLeft: '10px',
    marginTop: '-5px',
  },
  AccomodationContainer: {
    width: '45%',
    height: '150px',
    backgroundColor: 'white',
    marginLeft: '486px',
    marginTop: '-150px',
  },
  HeaderStyle: {
    fontSize: 24,
    color: Color.colorPalevioletred,
    textAlign: 'left',
  },
  FnameToFBContainer: {
    width: '95%',
    height: '60px',
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: '25px',
    marginTop: '1px',
  },
  fnameContainer: {
    width: '100px',
    height: '30px',
    fontSize: 12,
  },
  SubHeaderTextStyle: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '20px',
    marginTop: '10px',
  },
  SubHeaderTextStyle2: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '160px',
    marginTop: '10px',
  },
  SubHeaderTextStyle3: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '300px',
    marginTop: '10px',
  },
  SubHeaderTextStyle4: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '360px',
    marginTop: '10px',
  },
  SubHeaderTextStyle5: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '430px',
    marginTop: '10px',
  },
  SubHeaderTextStyle6: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '560px',
    marginTop: '10px',
  },
  SubHeaderTextStyle7: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '705px',
    marginTop: '10px',
  },
  textInput: {
    fontSize: 12,
    marginLeft: '2px',
    height: '20px',
    marginLeft: '-1px',
    width: '130px',
    borderRadius: '2px',
    borderColor: 'grey',
    border: '1px',
  },
  textInputAddress: {
    fontSize: 12,
    marginLeft: '2px',
    height: '20px',
    marginLeft: '-1px',
    width: '360px',
    borderRadius: '2px',
    borderColor: 'grey',
    border: '1px',
  },
  textInputAge: {
    fontSize: 12,
    marginLeft: '2px',
    height: '20px',
    marginLeft: '-1px',
    width: '50px',
    borderRadius: '2px',
    borderColor: 'none',
    border: 'none',
  },
  InputContainer: {
    marginLeft: '-1px',
    width: '60px',
    height: '40px',
  },
  AddressesContainer: {
    width: '95%',
    height: '60px',
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: '25px',
    marginTop: '1px',
  },
  LowerSubHeaderTextStyle: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-100px',
    marginTop: '30px',
  },
  LowerSubHeaderTextStyle2: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-10px',
    marginTop: '30px',
  },
  LowerSubHeaderTextStyle3: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '160px',
    marginTop: '30px',
  },
  LowerSubHeaderTextStyle4: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-100px',
    marginTop: '80px',
  },
  LowerSubHeaderTextStyle5: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '70px',
    marginTop: '80px',
  },
  LowerSubHeaderTextStyle6: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '250px',
    marginTop: '80px',
  },
  LowerRightSubHeaderTextStyle: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-150px',
    marginTop: '40px',
  },
  LowerRightSubHeaderTextStyle1: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-150px',
    marginTop: '90px',
  },
  LowerRightSubHeaderTextStyle2: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '10px',
    marginTop: '90px',
  },
  OthersContainer: {
    width: '95%',
    height: '250px',
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: '25px',
    marginTop: '-10px',
  },
  OtherRightSubHeaderTextStyle: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '-60px',
    marginTop: '40px',
  },
  OtherRightSubHeaderTextStyle2: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '160px',
    marginTop: '40px',
  },
  OtherRightSubHeaderTextStyle3: {
    display: 'inline-block',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    fontSize: 14,
    color: 'purple',
    textAlign: 'left',
    marginLeft: '160px',
    marginTop: '100px',
  },
  IDVerification: {
    width: '25%',
    height: '250px',
    backgroundColor: 'white',
    position: 'absolute',
    marginLeft: '486px',
    marginTop: '-250px',
  },
  IDUploadVer: {
    width: '300px',
    height: '150px',
    marginLeft: '5px',
    marginTop: '5px',
  },
  ButtonContainer: {
    width: '170px',
    height: '25px',
    marginLeft: '200px',
    marginTop:'20px',
  },
  ApproveButtonStyle: {
    cursor: 'pointer',
    width: '76px',
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
  DeclineButtonStyle: {
    cursor: 'pointer',
    width: '76px',
    height: '25px',
    backgroundColor: Color.colorWhite,
    borderColor: 'white',
    borderRadius: '5px',
    flexDirection: 'column',
    fontSize: 12,
    color: Color.colorPalevioletred,
    justifyContent: 'center',
    alignItems: 'center',
},
}
export default ViewRequest