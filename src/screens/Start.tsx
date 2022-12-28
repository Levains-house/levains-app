import React from 'react'
import { View, Image, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { StyledButton, ButtonText } from '../components/CommonComponents';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Start'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const StartScreen = (props: Props) => {
    const { navigation } = props;
    return(
        <CenterSafeAreaView>
            <Logo source={require('../assets/images/mainLogo.png')}></Logo>
            <TitleText>멘도롱주멍</TitleText>
            <InputContainer>
            <InputBoxContainer>
                <InputBox placeholder='닉네임을 입력해주세요'></InputBox>
            </InputBoxContainer>
            <InputBoxContainer>
                <InputBox placeholder='카카오톡 오픈채팅방 URL을 입력해주세요'></InputBox>
            </InputBoxContainer>
            </InputContainer>
            <StyledButton onPress={() => navigation.navigate('Select')}>
                <ButtonText>따듯한 여정 시작하기</ButtonText>
            </StyledButton>
        </CenterSafeAreaView>
    )
}
const Logo = styled(Image)`
`;
const TitleText = styled(Text)`
    margin-top:3%;
    margin-bottom:3%;
    color: #FFC000;
    font-size:22%;
`
const CenterSafeAreaView = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FAF9F9;
`;

const InputContainer = styled(View)`
    align-items:center;
    width: 100%;
`
const InputBoxContainer = styled(View)`
    width:85%;
    height:16%;
    background-color:white;
    justify-content: center;
    margin-top:3%;
    border-radius: 10px;
    border: 0.5px solid #CDCED6;
`
const InputBox = styled(TextInput)`
    padding-left:5%;
`
export default StartScreen;