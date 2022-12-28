import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import * as S from '../components/CommonComponents';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Local'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const LocalScreen = (props: Props) => {
    const { navigation } = props;
    const [ userInfo, ]=useRecoilState(userState);

    const handleButton = () => {
        navigation.navigate('Items');
      };
    return(
        <CenterSafeAreaView>
            <S.HeaderContainer>
                <S.HeaderFirstLine>{userInfo.name}님,</S.HeaderFirstLine>
                <S.HeaderSecondLine>여정을 위한 <S.ColoredText>두번째</S.ColoredText> 단계예요</S.HeaderSecondLine>
                <S.HeaderThirdLine>주소를 등록해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>
            <LocalLogo source={require('../assets/images/localLogo.png')}></LocalLogo>
            <StyledButton>
            </StyledButton>
            <S.NextButton>
                <S.NextButtonText onPress={handleButton}>다음으로</S.NextButtonText>
            </S.NextButton>
        </CenterSafeAreaView>
    )
}
const CenterSafeAreaView = styled(View)`
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
const LocalLogo = styled(Image)`

`
export default LocalScreen;