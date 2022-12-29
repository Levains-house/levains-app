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
            <LocalLogo source={require('../assets/images/localLogo.png')}></LocalLogo>
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
            <SearchBox onPress={() => setModal(true)}>
                <SearchContiner>
                    <Dot></Dot>
                    <AddressText>{address}</AddressText>
                    <LocalLogo source={require('../assets/images/searchIcon.png')}></LocalLogo>
                </SearchContiner>
            </SearchBox>  
            <S.NextButton>
                <S.NextButtonText onPress={handleButton}>다음으로</S.NextButtonText>
            </S.NextButton>
        </S.Wrapper>
    )
}
const CenterSafeAreaView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const LocalLogo = styled(Image)`

`
const SearchBox = styled(TouchableOpacity)`
    width: 85%;
    height: 5.5%;
    margin-top: 3%;
    background-color: white;
    justify-content: center;
    border: 2px solid #CDCED6;
    border-radius: 30px;
    padding-left: 3%;
`
const Dot = styled(View)`
    width: 3%;
    height: 20%;
    background: #E1E1E8;
    border-radius: 20px;
    margin-right: 4%;
`
const SearchContiner = styled(View)`
    width:100%;
    height: 100%;
    flex-direction:row; 
    align-items: center;
`
const AddressText = styled(Text)`
    font-family: NotoSansKR-Regular;
    font-size: 16rem;
    color: #3E404C;
    width: 83%;
`
export default LocalScreen;