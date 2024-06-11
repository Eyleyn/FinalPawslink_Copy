{/**PROPERTY OF: 
                Banes, Ellaine
                Calugas, Jonathan
                Cantiller, Sophia Feona
                BS in Computer Science - IV
                June 2024
     About the code:
         Enable the admin to view the list of events.
**/}

import styles from "./ViewEvents.module.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const ViewEvents = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBack = () => {
    navigate("/dashboard"); // Navigate to the login route on logout
  };

  return (
    <div className={styles.viewEvents}>
      <img
        className={styles.image23Icon}
        loading="lazy"
        alt=""
        src="/image-23@2x.png"
      />
      <main className={styles.container3Wrapper}>
        <section className={styles.container3}>
          <div className={styles.keyboardBackspaceParent}>
            <div className={styles.keyboardBackspace}>
              <img
                className={styles.keyboardBackspace1}
                onClick={handleBack}
                loading="lazy"
                alt=""
                src="/keyboard-backspace-1@2x.png"
              />
            </div>
            <h1 className={styles.events}>events</h1>
          </div>
          <div className={styles.container3Container}>
            <div className={styles.container31}>
              <div className={styles.container3Inner}>
                <div className={styles.container35Parent}>
                  <div className={styles.container35}>
                    <img
                      className={styles.image45Icon}
                      loading="lazy"
                      alt=""
                      src="/image-45@2x.png"
                    />
                    <div className={styles.frameParent}>
                      <div className={styles.emotionalSupportFurriesParent}>
                        <div className={styles.emotionalSupportFurries}>
                          <div
                            className={styles.emotionalSupportFurriesWrapper}
                          >
                            <h1 className={styles.emotionalSupportFurries1}>
                              Emotional Support Furries
                            </h1>
                          </div>
                          <div className={styles.mayPMCDH}>
                            <button className={styles.button21}>
                              <div className={styles.editWrapper}>
                                <img
                                  className={styles.editIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/Edit.png"
                                />
                              </div>
                              <div className={styles.edit}>Edit</div>
                            </button>
                          </div>
                          <div className={styles.button22Wrapper}>
                            <button className={styles.button22}>
                              <div className={styles.eDeleteWrapper}>
                                <img
                                  className={styles.eDeleteIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/E delete.png"
                                />
                              </div>
                              <div className={styles.delete}>Delete</div>
                            </button>
                          </div>
                        </div>
                        <div className={styles.may282024}>
                          May 28, 2024 | 4:30 PM | CDH
                        </div>
                      </div>
                      <div className={styles.emotionalSupportFurries2}>
                        "Emotional Support Furries" is a cozy campus event where
                        students can unwind with campus dogs during exams. It's
                        a pause for cuddles and playtime with furry friends who
                        bring unconditional love and support. Need a stress
                        break or miss your pet? Join us for some pawsitive vibes
                        to boost your exam spirits!
                      </div>
                    </div>
                  </div>
                  <div className={styles.container351}>
                    <img
                      className={styles.image45Icon1}
                      loading="lazy"
                      alt=""
                      src="/image-45-1@2x.png"
                    />
                    <div className={styles.frameGroup}>
                      <div className={styles.frameContainer}>
                        <div className={styles.pawsRelaxParent}>
                          <h1 className={styles.pawsRelax}>{`Paws & Relax`}</h1>
                          <div className={styles.may212024}>
                            May 21, 2024 | 3:00 PM | TLRC
                          </div>
                        </div>
                        <div className={styles.frameWrapper}>
                          <div className={styles.button21Parent}>
                            <button className={styles.button211}>
                              <div className={styles.editContainer}>
                                <img
                                  className={styles.editIcon1}
                                  loading="lazy"
                                  alt=""
                                  src="/edit.svg"
                                />
                              </div>
                              <div className={styles.edit1}>Edit</div>
                            </button>
                            <button className={styles.button221}>
                              <div className={styles.eDeleteContainer}>
                                <img
                                  className={styles.eDeleteIcon1}
                                  loading="lazy"
                                  alt=""
                                  src="/e-delete.svg"
                                />
                              </div>
                              <div className={styles.delete1}>Delete</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.takeAPaws}>
                        Take a paws from studying and join us for a relaxing
                        session with our therapy dogs! This calming event is
                        perfect for students needing a little love and comfort
                        during exam time. Let our friendly dogs wag away your
                        worries with their joyous energy. It's the ideal way to
                        recharge and smile, right here on campus. Snacks, pets,
                        and smiles guaranteed!
                      </div>
                    </div>
                  </div>
                  <div className={styles.container352}>
                    <img
                      className={styles.image45Icon2}
                      loading="lazy"
                      alt=""
                      src="/image-45-2@2x.png"
                    />
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.kittyCuddleCornerParent}>
                          <h1 className={styles.kittyCuddleCorner}>
                            Kitty Cuddle Corner
                          </h1>
                          <div className={styles.april292024}>
                            April 29, 2024 | 2:00 PM | TLRC
                          </div>
                        </div>
                        <div className={styles.frameWrapper1}>
                          <div className={styles.button21Group}>
                            <button className={styles.button212}>
                              <div className={styles.editFrame}>
                                <img
                                  className={styles.editIcon2}
                                  loading="lazy"
                                  alt=""
                                  src="/edit.svg"
                                />
                              </div>
                              <div className={styles.edit2}>Edit</div>
                            </button>
                            <button className={styles.button222}>
                              <div className={styles.eDeleteFrame}>
                                <img
                                  className={styles.eDeleteIcon2}
                                  loading="lazy"
                                  alt=""
                                  src="/e-delete.svg"
                                />
                              </div>
                              <div className={styles.delete2}>Delete</div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className={styles.thisDelightfulEvent}>
                        This delightful event invites students to snuggle with
                        our adorable campus cats, offering a furry escape from
                        exam stress. Feel the stress melt away as you pet and
                        play with our gentle felines. It's a meow-velous way to
                        find joy and relaxation amidst the exam craze. Join us
                        for a dose of kitty cuddles and leave with your heart
                        full and spirits lifted!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.container22}>
                <div className={styles.container22Child} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ViewEvents;
