import React, { useState } from "react";
import { Grid } from "@nextui-org/react";
import IconButton from "./../components/iconButton";
import DisableTextField from "./../components/disabledTextField";
import DeleteAccount from "./../components/modal/deleteAccountModal";
import ChangePassword from "./../components/modal/changePasswordModal";
import TermsAndConditions from "./../components/modal/termsConditionModal";
import PrivacyPolicy from "./../components/modal/privacyPolicyModal";
import TrashCan from "/trashcan.svg";
import Modify from "/modify.svg";
import Eye from "/eye.svg";
import Book from "/book.svg";

const Settings = () => {
  const [showDeleteAccount, setShowDeleteAccount] = useState(false);
  const [showChange, setShowChange] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const nameSurname = `${localStorage.getItem("name")} ${localStorage.getItem(
    "surname"
  )}`;
  const email = localStorage.getItem("email");

  return (
    <Grid.Container style={{ height: "100vh", width: "88vw" }}>
      <Grid xs={6}>
        <Grid.Container>
          <Grid
            xs={12}
            justify="center"
            style={{
              marginTop: "12vh",
            }}
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
              height={150}
            />
          </Grid>
          <Grid xs={12} justify="center">
            <h1
              style={{
                color: "black",
                fontSize: "2.5vh",
                fontWeight: "lighter",
                height: "0px",
              }}
            >
              {nameSurname}
            </h1>
          </Grid>
          <Grid
            xs={12}
            justify="center"
            style={{
              marginBottom: "5vh",
            }}
          >
            <DisableTextField placeholder={email} height="4vh" width="20vw" />
          </Grid>
          <Grid xs={12} justify="center">
            <IconButton
              icon={TrashCan}
              text="Delete Account"
              height="5.5vh"
              width="20vw"
              iconSize={35}
              onPress={() => setShowDeleteAccount(true)}
            />
            <DeleteAccount
              show={showDeleteAccount}
              close={() => setShowDeleteAccount(false)}
              height="95vh"
              width="43vw"
            />
          </Grid>
          <Grid xs={12} justify="center">
            <IconButton
              icon={Modify}
              text="Change Password"
              height="5.5vh"
              width="20vw"
              iconSize={35}
              onPress={() => setShowChange(true)}
            />
            <ChangePassword
              show={showChange}
              close={() => setShowChange(false)}
              height="95vh"
              width="43vw"
            />
          </Grid>
          <Grid xs={12} justify="center">
            <IconButton
              icon={Book}
              text="Terms and Conditions"
              height="5.5vh"
              width="20vw"
              iconSize={35}
              onPress={() => setShowTerms(true)}
            />
            <TermsAndConditions
              show={showTerms}
              close={() => setShowTerms(false)}
              height="95vh"
              width="43vw"
            />
          </Grid>
          <Grid
            xs={12}
            justify="center"
            style={{
              marginBottom: "12vh",
            }}
          >
            <IconButton
              icon={Eye}
              text="Privacy Policy"
              height="5.5vh"
              width="20vw"
              iconSize={35}
              onPress={() => setShowPrivacy(true)}
            />
            <PrivacyPolicy
              show={showPrivacy}
              close={() => setShowPrivacy(false)}
              height="95vh"
              width="43vw"
            />
          </Grid>
        </Grid.Container>
      </Grid>
      <Grid
        xs={6}
        style={{
          backgroundImage: `url("/settings_background.png")`,
          backgroundSize: "101% 101%",
        }}
      ></Grid>
    </Grid.Container>
  );
};

export default Settings;
