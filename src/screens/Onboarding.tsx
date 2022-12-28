import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';

type OnboardingScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Onboarding'
>;

type Props = {
    navigation: OnboardingScreenNavigationProp;
};

const OnboardingScreen = (props: Props) => {
    const { navigation } = props;

    useEffect(() => {
        setTimeout(() => navigation.navigate('Start'), 3000);
    }, [navigation]);

    return (
        <CenterSafeAreaView>
            <Logo source={require('../assets/images/mainLogo.png')}></Logo>
            <Bottomlogo source={require('../assets/images/bottomLogo.png')}></Bottomlogo>
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
    width:15%;
    height: 8%;
    object-fit:cover;
`

const Logo = styled(Image)`

`;

export default OnboardingScreen;
