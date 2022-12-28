import React, { useState, useEffect } from 'react'
import { View, Image, SafeAreaView, Text, TextInput, TouchableOpacity,
        NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { StyledButton, ButtonText } from '../components/CommonComponents';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadAsync } from 'expo-font';

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
    const [isFontReady, setReady] = useState(false);

    useEffect(() => {
        async function fetchFont(){
            await loadAsync({
                "NotoSansKR-Bold" : require('../assets/fonts/NotoSansKR-Bold.otf'),
                "NotoSansKR-Medium" : require('../assets/fonts/NotoSansKR-Medium.otf')
            });
            setReady(true);     
        }
        fetchFont();
    }, []);

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
        AsyncStorage.setItem("username", inputState.name);
        navigation.navigate('Select');
      };


    return(
        <CenterSafeAreaView>
            <Logo source={require('../assets/images/mainLogo.png')}></Logo>
            {isFontReady && <TitleText>멘도롱주멍</TitleText>}
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
            <StyledButton onPress={handleButton}>
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
    font-family: NotoSansKR-Bold;
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