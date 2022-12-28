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
    'Travel'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const TravelScreen = (props: Props) => {
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
                <S.HeaderThirdLine>머무르는 숙소를 추가해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>
            
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
export default TravelScreen;