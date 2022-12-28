import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { ColoredText, HeaderContainer, HeaderFirstLine, HeaderSecondLine, HeaderThirdLine } from '../components/CommonComponents';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Select'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const SelectScreen = (props: Props) => {
    const { navigation } = props;
    const [userInfo, ] = useRecoilState(userState);
    
    // <Text>{userInfo.name}</Text>
    // <Text>{userInfo.url}</Text>

    return(
        <CenterSafeAreaView>
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
        </CenterSafeAreaView>
    )
}
const CenterSafeAreaView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FAF9F9;
`;
const ButtonContainer = styled(View)`
    flex-direction: row;
    margin-top:190%;
    // width:100%;
    height:100%;
`
const StyledButton = styled(TouchableOpacity)`
    width: 32%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    // margin-top: 30px;
    background-color:#FFC000;
    margin:2%;
    box-shadow: 0px 0px 20px rgba(69, 133, 237, 0.1);
    border-radius: 20px;
`;
const ButtonText = styled(Text)`
    color: #ffffff;
    font-size: 20rem;
    // font-family: 'OpenSansHebrew-Light';
    margin-bottom: 5%;
`;
const Icon = styled(Image)`
    margin-top:20%;
    margin-bottom:30%;
`
export default SelectScreen;