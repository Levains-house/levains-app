import React, { useEffect } from "react";
import { Image, SafeAreaView } from "react-native";
import styled from "styled-components";

const LoadingScreen = () => {
  return (
    <CenterSafeAreaView>
      <Logo source={require("../assets/images/mainLogo.png")}></Logo>
      <Bottomlogo
        source={require("../assets/images/bottomLogo.png")}
      ></Bottomlogo>
    </CenterSafeAreaView>
  );
};

const CenterSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Bottomlogo = styled(Image)`
  position: absolute;
  bottom: 2%;
  width: 15%;
  height: 8%;
  object-fit: cover;
`;

const Logo = styled(Image)``;

export default LoadingScreen;
