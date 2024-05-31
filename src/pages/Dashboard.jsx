import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import top_logo from "../assets/image-23@2x.png";
import {
  Color,
  FontSize,
  FontFamily,
  Border,
} from "../assets/login/GlobalStyles";
import AdoptedAnimals from "./AdoptedAnimals";

const DashboardScreen = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogout = () => {
    navigate("/"); // Navigate to the login route on logout
  };

  const navigateToDogs = () => {
    navigate("/dogs"); // Path to the DogDatabase component
  };

  const navigateToCats = () => {
    navigate("/cats"); // Path to the CatDatabase component
  };

  const addAnAnimal = () => {
    navigate("/add-animal"); 
  };

  const viewTheEvents= () => {
    navigate("/view-event");
  };

  const addAnEvent= () => {
    navigate("/add-event"); 
  };

  const adoptRequests= () => {
    navigate("/adoption-requests"); 
  };

  const seeAdopted= () => {
    navigate("/adopted-animals"); 
  };

  const seeForms= () => {
    navigate("/see-forms"); 
  };

  const passwordEdit= () => {
    navigate("/edit-password"); 
  };

  const adminHistory= () => {
    navigate("/admin-log"); 
  };

  const userMessage= () => {
    navigate("/user-message"); 
  };
  const goToForum= () => {
    navigate("/forum"); 
  };
  const userList= () => {
    navigate("/user-list"); 
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.mainContentContainer}>
        <div style={styles.SecondMContainer}>
          <img
            style={styles.topLogoPawslink}
            src={top_logo}
            alt="Pawslink Logo"
          />
          <div style={styles.ContentContainer}>
            <b style={styles.controlCenterText}>Control Center</b>
            <div style={styles.buttonContentContainer}>
              {/* Existing buttons and containers for other sections */}
              <div style={styles.buttonContainer1}>
                <b style={styles.animalDatabaseText}>Animal Database</b>
                <div style={styles.buttonAnimalDB}>
                  <button style={styles.DogButton} onClick={navigateToDogs}>
                    Dogs
                  </button>
                  <button style={styles.CatButton} onClick={navigateToCats}>
                    Cats
                  </button>
                  <button style={styles.AddButton} onClick={addAnAnimal}>+ Add Animal</button>
                </div>
              </div>
              <div style={styles.buttonContainer2}>
                <b style={styles.animalDatabaseText}>Events</b>
                <div style={styles.buttonAnimalDB}>
                  <button style={styles.DogButton} onClick={viewTheEvents}>View Events</button>
                  <button style={styles.AddButton} onClick={addAnEvent}>+ Add an Event</button>
                </div>
              </div>
              <div style={styles.buttonContainer3}>
                <b style={styles.animalDatabaseText}>Adoption</b>
                <div style={styles.buttonAnimalDB}>
                  <button style={styles.DogButton} onClick={adoptRequests}>Adoption Requests</button>
                  <button style={styles.DogButton} onClick={seeAdopted}>Adopted Animals</button>
                  <button style={styles.DogButton} onClick={seeForms}>See Forms</button>
                </div>
              </div>
            </div>
            <div style={styles.SecButtonContainer}>
              <div style={styles.RowSecButtons}>
                <div style={styles.buttonContainer3}>
                  <b style={styles.animalDatabaseText}>User Help</b>
                  <div style={styles.buttonAnimalDB}>
                    <button style={styles.DogButton} onClick={userMessage}>Messages</button>
                    <button style={styles.DogButton} onClick={goToForum}>Forum</button>
                    <button style={styles.DogButton} onClick={userList}>User List</button>
                  </div>
                </div>
                <div style={styles.buttonContainer3}>
                  <b style={styles.animalDatabaseText}>Admin Settings</b>
                  <div style={styles.buttonAnimalDB}>
                    <button style={styles.DogButton} onClick={passwordEdit}>Edit Password</button>
                    <button style={styles.DogButton} onClick={adminHistory}>Admin Log</button>
                    <button style={styles.AddButton} onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
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
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorWhitesmoke,
  },
  mainContentContainer: {
    width: "75vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  },
  topLogoPawslink: {
    width: "200px",
    height: "80px",
    objectFit: "cover",
    marginLeft: "20px",
  },
  SecondMContainer: {
    width: "75vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    flexDirection: "column",
  },
  ContentContainer: {
    flexDirection: "column",
    height: "100vh",
    width: "91%",
    marginRight: "150px",
    marginLeft: "50px",
    backgroundColor: Color.colorWhitesmoke,
    flex: 1,
    alignItems: "center",
  },
  controlCenterText: {
    fontSize: "24px",
    color: Color.colorPalevioletred,
    marginLeft: "50px",
    display: "inline-block",
    lineHeight: "90px",
    FontFamily: "FontFamily.epilogueBold",
  },
  buttonContainer1: {
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    width: "250px",
    height: "230px",
    marginLeft: "50px",
  },
  buttonContainer2: {
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    width: "250px",
    height: "230px",
    marginLeft: "50px",
  },
  buttonContainer3: {
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    width: "250px",
    height: "230px",
    marginLeft: "50px",
  },
  buttonContentContainer: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  animalDatabaseText: {
    marginLeft: "20px",
    fontSize: 14,
    FontFamily: FontFamily.epilogueBold,
    lineHeight: "50px",
    color: "purple",
  },
  buttonAnimalDB: {
    flexDirection: "column",
    display: "flex",
    width: "210px",
    height: "120px",
    marginLeft: "20px",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-evenly",
  },
  DogButton: {
    borderRadius: 5,
    backgroundColor: Color.colorPalevioletred,
    width: "180px",
    height: "39px",
    fontSize: 12,
    textAlign: "center",
    color: Color.colorWhite,
    borderColor: Color.colorWhite,
  },
  CatButton: {
    borderRadius: 5,
    backgroundColor: Color.colorPalevioletred,
    width: "180px",
    height: "39px",
    fontSize: 12,
    textAlign: "center",
    color: Color.colorWhite,
    boxShadow: "2px",
    borderColor: Color.colorWhite,
  },
  AddButton: {
    borderRadius: 5,
    backgroundColor: Color.colorWhite,
    width: "180px",
    height: "39px",
    fontSize: 12,
    textAlign: "center",
    color: Color.colorPalevioletred,
    borderColor: Color.colorWhite,
  },
  SecButtonContainer: {
    height: "50vh",
    width: "100%",
    marginTop: "20px",
    flexDirection: "column",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
  },
  RowSecButtons: {
    flexDirection: "row",
    display: "flex",
    flexWrap: "wrap",
    alignContent: "space-between",
    height: "50vh",
    width: "100%",
  },
};

export default DashboardScreen;
