{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
      About the code:
          Acts as a dashboard of the adopted dogs and cats list.
**/}

import { useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./AdoptedAnimals.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom


const AdoptedAnimals = () => {

  const navigate = useNavigate();

  const goToAdoptedDogs = () => {
    navigate("/adopted-dogs"); 
  };

  const goToAdoptedCats = () => {
    navigate("/adopted-cats"); 
  };

  const handleBack = () => {
    navigate('/dashboard'); // This will navigate to Dashboard when called
  };

  return (
    <div className={styles.adoptedAnimals}>
      <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      <div className={styles.container4}>
        <div className={styles.keyboardBackspace7}>
          <img
            className={styles.keyboardBackspace1}
            onClick={handleBack}
            alt=""
            src="/keyboard-backspace-1@2x.png"
          />
          <b className={styles.adoptedAnimals1}>Adopted Animals</b>
        </div>
        <div className={styles.container31}>
          <div className={styles.container96}>
            <div className={styles.imagecontainer}>
              <img
                className={styles.image78Icon}
                alt=""
                src="/image-23@2x.png"
                onClick={goToAdoptedCats}
              />
            </div>
            <Button
              className={styles.adoptedCats}
              onClick={goToAdoptedCats}
              disableElevation={true}
              color="secondary"
              size="large"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              adopted cats
            </Button>
          </div>
          <div className={styles.container96}>
            <div className={styles.imagecontainer}>
              <img
                className={styles.image78Icon}
                alt=""
                src="/image-23@2x.png"
                onClick={goToAdoptedDogs}
              />
            </div>
            <Button
              className={styles.adoptedCats}
              disableElevation={true}
              onClick={goToAdoptedDogs}
              color="secondary"
              size="large"
              variant="text"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              adopted dogs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptedAnimals;
