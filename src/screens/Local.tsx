import React, { useState } from 'react'
import { Image, View, Text, TouchableOpacity, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import * as S from '../components/CommonComponents';
import Postcode from '@actbase/react-daum-postcode';
import Modal from 'react-native-modal'

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
    const [isModal, setModal] = useState(false);
    const [address, setAddress] = useState("도로명주소 검색하기");

    const handleButton = () => {
        navigation.navigate('Items');
      };
    return(
        <S.Wrapper>
            <S.HeaderContainer>
                <S.HeaderFirstLine>{userInfo.name}님,</S.HeaderFirstLine>
                <S.HeaderSecondLine>여정을 위한 <S.ColoredText>두번째</S.ColoredText> 단계예요</S.HeaderSecondLine>
                <S.HeaderThirdLine>주소를 등록해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>
            <S.LogoImage source={require('../assets/images/localLogo.png')}></S.LogoImage>
            <Modal isVisible={isModal}>
                <Postcode
                    style={{ width: 320, height: 320 }}
                    jsOptions={{ animation: true, hideMapBtn: true }}
                    onSelected={data => {
                        setAddress(data.address)
                        setModal(false);
                    } } onError={function (error: unknown): void {
                        throw new Error('Function not implemented.');
                    } }                />
            </Modal>
            <S.SearchBox onPress={() => setModal(true)}>
                <S.SearchContainer>
                    <S.Dot></S.Dot>
                    <S.AddressText>{address}</S.AddressText>
                    <S.LogoImage source={require('../assets/images/searchIcon.png')}></S.LogoImage>
                </S.SearchContainer>
            </S.SearchBox>
            <S.NextButton>
                <S.NextButtonText onPress={handleButton}>다음으로</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}
export default LocalScreen;