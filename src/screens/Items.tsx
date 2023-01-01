import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, SafeAreaView, Text, TextInput, TouchableOpacity,
        NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import * as S from '../components/CommonComponents';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import { loadAsync } from 'expo-font';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Start'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const ItemsScreen = (props: Props) => {
    const { navigation } = props;
    const [ userInfo, ]=useRecoilState(userState);
    const [ toggle, setToggle] = useState(true);
    
    const handleButton = () => {
        navigation.navigate('Main');
    };

    return(
        <S.Wrapper>
            <S.HeaderContainer>
                <S.HeaderFirstLine>{userInfo.name}님,</S.HeaderFirstLine>
                <S.HeaderSecondLine>벌써 <S.ColoredText>마지막</S.ColoredText> 단계예요!</S.HeaderSecondLine>
                <S.HeaderThirdLine>교환하고 싶은 물건을 등록해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>
            <ToggleContainer>
                {toggle ? (
                    <>
                    <SelectedButton onPress={()=>setToggle(true)}>
                        <SelectedText>나의 주멍</SelectedText>
                    </SelectedButton>
                    <UnselectedButton onPress={()=>setToggle(false)}>
                        <UnselectedText>너의 주멍</UnselectedText>
                    </UnselectedButton>
                    </>
                ): (
                    <>
                        <UnselectedButton onPress={()=>setToggle(true)}>
                            <UnselectedText>나의 주멍</UnselectedText>
                        </UnselectedButton>
                        <SelectedButton onPress={()=>setToggle(false)}>
                            <SelectedText>너의 주멍</SelectedText>
                        </SelectedButton>
                    </>
                )}                
            </ToggleContainer>
            <BodyContainer>
                {toggle ? (<><Text>나의 주멍</Text></>) : (<><Text>너의 주멍</Text></>)}
            </BodyContainer>



            <S.NextButton onPress={handleButton}>
                <S.NextButtonText>다음으로</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}

const ToggleContainer = styled(View)`
    border: 1px solid #A9ABB8;
    border-radius: 17px;
    width: 70%;
    height: 7.5%;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    margin-top:20%;
`
const SelectedButton = styled(TouchableOpacity)`
    background: #FFC000;
    box-shadow: 7px 0px 15px rgba(69, 133, 237, 0.05);
    border-radius: 15px;
    height: 93%;
    width:49%;
    justify-content:center;
    align-items:center;
`
const SelectedText = styled(Text)`
    font-family:NotoSansKR-Medium;
    font-size: 16%;
    color: #FFFFFF;
`
const UnselectedButton = styled(TouchableOpacity)`
    height: 95%;
    width:49%;
    justify-content:center;
    align-items:center;
`
const UnselectedText = styled(Text)`
    font-family:NotoSansKR-Medium;
    font-size: 16%;
    color: #A9ABB8;
`
const BodyContainer = styled(View)`
    width: 85%;
    height: 60%;
    background-color:#A9ABB8;
    margin-top: 4%;
`

export default ItemsScreen;