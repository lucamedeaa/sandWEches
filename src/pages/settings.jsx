import React, { useState } from "react";
import { Grid } from "@nextui-org/react";
import UserPicture from "./../components/profilePicture";
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

  return (
    <Grid.Container style={{ height: "100vh", width: "88vw" }}>
      <Grid xs={6} justify="center">
        <Grid.Container style={{ display: "flex", justifyContent: "center" }}>
          <Grid xs={12}>
            <UserPicture text="Giulio Chiozzi" />
          </Grid>
          <Grid xs={12}>
            <DisableTextField
              placeholder="chiozzi.giulio@iisviolamarchesini.edu.it"
              width="25vw"
              height="6.5vh"
            />
          </Grid>
          <Grid xs={12}>
            <IconButton
              icon={TrashCan}
              text="Delete Account"
              height="6.5vh"
              width="25vw"
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
          <Grid xs={12}>
            <IconButton
              icon={Modify}
              text="Change Password"
              height="6.5vh"
              width="25vw"
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
          <Grid xs={12}>
            <IconButton
              icon={Book}
              text="Terms and Conditions"
              height="6.5vh"
              width="25vw"
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
          <Grid xs={12}>
            <IconButton
              icon={Eye}
              text="Privacy Policy"
              height="6.5vh"
              width="25vw"
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
