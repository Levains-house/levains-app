import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { ColoredText, HeaderContainer, HeaderFirstLine, HeaderSecondLine, HeaderThirdLine } from '../components/CommonComponents';
import * as S from '../components/CommonComponents'

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Select'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const SelectScreen = (props: Props) => {
    const { navigation } = props;

    return(
        <S.Wrapper>
            <HeaderContainer>
                <HeaderFirstLine>만나서 반가워요 :)</HeaderFirstLine>
                <HeaderSecondLine>여정을 위한 <ColoredText>첫번째</ColoredText> 단계예요</HeaderSecondLine>
                <HeaderThirdLine>해당하는 역할을 선택해주세요</HeaderThirdLine>
            </HeaderContainer>
            <ButtonContainer>
                <StyledButton onPress={() => navigation.navigate('Local')}>
                    <Icon source={require('../assets/images/localIcon.png')}></Icon>
                    <ButtonText>제주에</ButtonText>
                    <ButtonText>살아요</ButtonText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('Travel')}>
                <Icon source={require('../assets/images/travelIcon.png')}></Icon>
                    <ButtonText>제주로</ButtonText>
                    <ButtonText>떠나요</ButtonText>
                </StyledButton>
            </ButtonContainer>
        </S.Wrapper>
    )
}
const ButtonContainer = styled(View)`
    flex-direction: row;
    margin-top:160%;
    height:100%;
`
const StyledButton = styled(TouchableOpacity)`
    width: 32%;
    height: 27.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#FFC000;
    margin:2%;
    box-shadow: 0px 0px 20px rgba(69, 133, 237, 0.1);
    border-radius: 20px;
`;
const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 20rem;
    font-family: NotoSansKR-Medium;
`;
const Icon = styled(Image)`
    margin-top:20%;
    margin-bottom:20%;
`
export default SelectScreen;