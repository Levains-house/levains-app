import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Local'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const LocalScreen = (props: Props) => {
    const { navigation } = props;
    return(
        <CenterSafeAreaView>
            <Text>Local</Text>
            <StyledButton>
                <ButtonText>로그인</ButtonText>
            </StyledButton>
        </CenterSafeAreaView>
    )
}
const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const StyledButton = styled(TouchableOpacity)`
    width: 225px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;
const ButtonText = styled(Text)`
    // color: #ffffff;
    font-size: 20px;
    // font-family: 'OpenSansHebrew-Light';
`;
export default LocalScreen;