import React, { useState } from "react";
import top_logo from "../assets/image-23@2x.png";
import back_button from "../assets/keyboard-backspace-1.svg";
import { useNavigate } from 'react-router-dom';
import { Color, FontSize, FontFamily, Border } from "../assets/login/GlobalStyles";

const UserList = [
    {
        name: 'Jonah Bell',
        username: '@Jonah',
        email: 'jonah56@gmail.com',
        password:'1234567890',
        role: 'Admin'
    },
    {
        name: 'Sophia Ferst',
        username: '@sopee',
        email: 'sferst@gmail.com',
        password:'1234567890',
        role: 'User'
    },
    // ... (other users)
];

const UserDatabaseScreen = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dashboard');
    };

    const [users, setUsers] = useState(UserList);
    const [editIndex, setEditIndex] = useState(null);

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleRoleChange = (index, newRole) => {
        const updatedUsers = users.map((user, idx) =>
            idx === index ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        setEditIndex(null);
    };

    return (
        <div style={styles.mainContainer}>
            <div style={styles.mainContentContainer}>
                <div style={styles.SecondMContainer}>
                    <img style={styles.topLogoPawslink} src={top_logo} alt="Pawslink Logo" />
                    <div style={styles.ContentContainer}>
                        <div style={styles.buttonContainer}>
                            <button style={styles.BackButton} onClick={handleBack}>
                                <img style={styles.keyboardBackspace1} src={back_button} alt="Back" />
                            </button>
                            <b style={styles.UserTextStyle}>
                                Users
                            </b>
                        </div>
                        <div style={styles.UserDatabaseContainer}>
                            <div style={styles.UserHeaderName}>
                                <div style={styles.UserHeaderContainer}>
                                    <div style={styles.UserContentContainer}>
                                        <div style={styles.UserTitleHolderContainer}>
                                            <b style={styles.UserHeaderTitle}>
                                                NAME
                                            </b>
                                            <b style={styles.UserHeaderTitle}>
                                                USERNAME
                                            </b>
                                            <b style={styles.UserHeaderTitle}>
                                                EMAIL
                                            </b>
                                            <b style={styles.UserHeaderTitle}>
                                                PASSWORD
                                            </b>
                                            <b style={styles.UserHeaderTitle}>
                                                ROLE
                                            </b>
                                        </div>
                                        <div style={styles.UserTable}>
                                            <div style={styles.UserTableContent}>
                                                {users.map((user, index) => (
                                                    <div key={index}>
                                                        <div style={styles.UserDetails}>
                                                            <div style={styles.UserDisplayContent}>
                                                                <div style={styles.UsertxtDetails}>{user.name}</div>
                                                            </div>
                                                            <div style={styles.UserDisplayContent}>
                                                                <div style={styles.UsertxtDetails}>{user.username}</div>
                                                            </div>
                                                            <div style={styles.UserDisplayContent}>
                                                                <div style={styles.EmailtxtDetails}>{user.email}</div>
                                                            </div>
                                                            <div style={styles.UserDisplayContent}>
                                                                <div style={styles.UserPasstxtDetails}>{user.password}</div>
                                                            </div>
                                                            <div style={styles.UserDisplayContent}>
                                                                {editIndex === index ? (
                                                                    <select
                                                                        value={user.role}
                                                                        onChange={(e) => handleRoleChange(index, e.target.value)}
                                                                        style={styles.dropdown}
                                                                    >
                                                                        <option value="Admin">Admin</option>
                                                                        <option value="User">User</option>
                                                                    </select>
                                                                ) : (
                                                                    <div style={styles.RolesTxtDetails}>{user.role}</div>
                                                                )}
                                                            </div>
                                                            <button style={styles.UserEditButton} onClick={() => handleEdit(index)}>
                                                                Edit
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
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
    },
    topLogoPawslink: {
        width: '200px',
        height: '80px',
        objectFit: 'cover',
        marginLeft: '20px',
    },
    SecondMContainer: {
        width: '75vw',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: Color.colorWhite,
        flexDirection: 'column',
    },
    ContentContainer:{
        flexDirection: 'column',
        height: '100vh',
        width: '91%',
        marginRight: '150px',
        marginLeft: '50px',
        backgroundColor: Color.colorWhite,
        flex: 1,
        alignItems: 'center',
    },
    UserTextStyle: {
        fontSize: '30px',
        color: Color.colorPalevioletred,
        marginLeft: '5px',
        display: 'inline-block',
        lineHeight: '90px',
        FontFamily: "FontFamily.epilogueBold",
    },
    keyboardBackspace1: {
        width: '44px',
        height: '34px',
        borderColor: Color.colorWhite,
    },
    BackButton: {
        cursor: 'pointer',
        border: '0',
        borderColor: Color.colorWhite,
        width: '54px',
        height: '24px',
        backgroundColor: Color.colorWhite,
        objectFit: 'cover',
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        width:  '100px',
        height: '30px',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '20px',
        marginLeft: '20px',
        borderColor: Color.colorWhite,
    },
    UserDatabaseContainer: {
        width:  '100%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
    },
    UserHeaderName: {
        width:  '100px',
        height: '50px',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        marginTop: '-450px',

    },
    UserHeaderTitle: {
        fontSize: 11,
        marginLeft: '-100px',
    },
    UserHeaderContainer: {
        flexDirection: 'column',
        width:  '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        //marginLeft: '40px',
        backgroundColor: Color.colorPalevioletred,
    },
    UserTitleHolderContainer:{
        flexDirection: 'row',
        width:  '100%',
        height: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        //marginLeft: '10px',
        backgroundColor: Color.colorWhite,
    },
    UserContentContainer: {
        flexDirection: 'column',
        width:  '100%',
        height: '100%',
        backgroundColor: Color.colorWhite,
        justifyContent: 'space-evenly',
    },
    UserTable: {
        width: '100%',
        height: '1000%',
        backgroundColor: Color.colorWhite,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    UserTableContent: {
        width: '99%',
        height: '70%',
        flexDirection: 'row',
        display: 'inline-block',
        justifyContent: 'space-evenly',
        backgroundColor: Color.colorWhitesmoke,
        overflow: 'auto',
        maxHeight: '100%'
    },
    bttnFrame: {
        width: '90%',
        height: '90%',
        backgroundColor: Color.colorGray_200,
    },
    UserEditButton: {
        width: '35px',
        height: '39px',
        fontSize: 12,
        textAlign: 'center',
        color: Color.colorPalevioletred,
        marginLeft: '70px',
        justifyContent: 'space-evenly',
        backgroundColor: 'transparent',
        border: 'none',
    },
    imgFrame: {
        width: '10px',
        height: '10px',
        marginTop: '15px',
        marginLeft: '45px'
    }, 
    imageIcon: {
        height: '40px',
        width: '40px',
    },
    UsertxtDetails: {
        overflow: 'hidden',
        FontFamily: FontFamily.epilogueBold,
        fontSize: 14,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '60px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    UserDetails: {
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '20px',
        marginLeft: '20px',
        backgroundColor: Color.colorWhitesmoke,
        position: 'relative',
    },
    RolesTxtDetails: {
        width: '80px',
        height: '20px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '55px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'rgba(144, 238, 144, 0.5)',
        borderRadius: '15px',
        whiteSpace: 'nowrap',
    },
    dropdown: {
        width: '80px',
        height: '20px',
        fontSize: 12,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '55px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: '15px',
        whiteSpace: 'nowrap',
    },
    EmailtxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 14,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '60px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    UserPasstxtDetails: {
        width: '15px',
        height: '15px',
        fontSize: 14,
        FontFamily: FontFamily.epilogueBold,
        textAlign: 'center',
        flexDirection: 'row',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'center',
        marginLeft: '65px',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    UserDisplayContent: {
        width: '150px',
        height: '20px',
        flex: 1,
        display: 'inline-block',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
    },
}
export default UserDatabaseScreen;
