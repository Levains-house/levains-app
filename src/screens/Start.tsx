import React, { useState } from 'react'
import { View, Image, Text, TextInput, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import * as S from '../components/CommonComponents';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Start'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const StartScreen = (props: Props) => {
    const { navigation } = props;
    const [inputState, setInputState] = useState({ name: "", url: "" });
    const [, setText] = useRecoilState(userState);

    const handleInputName = (e : NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text}  = e.nativeEvent
        setInputState({
            ...inputState,
            name: text,
        });
    };

    const handleInputUrl = (e : NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text}  = e.nativeEvent
        setInputState({
          ...inputState,
          url: text,
        });
      };

      const handleButton = () => {
        setText({name: inputState.name, url: inputState.url});
        navigation.navigate('Select');
      };


    return(
        <S.Wrapper>
            <Logo source={require('../assets/images/mainLogo.png')}></Logo>
            <TitleText>멘도롱주멍</TitleText>
            <InputContainer>
            <InputBoxContainer>
                <InputBox 
                    onChange={handleInputName}
                    placeholder='닉네임을 입력해주세요'
                ></InputBox>
            </InputBoxContainer>
            <InputBoxContainer>
                <InputBox 
                    onChange={handleInputUrl}
                    placeholder='카카오톡 오픈채팅방 URL을 입력해주세요'
                ></InputBox>
            </InputBoxContainer>
            </InputContainer>
            <S.NextButton onPress={handleButton}>
                <S.NextButtonText>따듯한 여정 시작하기</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}
const Logo = styled(Image)`
`;
const TitleText = styled(Text)`
    margin-top:3%;
    margin-bottom:3%;
    color: #FFC000;
    font-size:22rem;
    font-family: NotoSansKR-Bold;
`

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
    font-family: NotoSansKR-Regular;
`
export default StartScreen;