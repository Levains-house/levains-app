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
            <Modal isVisible={isModal}>
                <Postcode
                    style={{ width: 320, height: 320 }}
                    jsOptions={{ animation: true, hideMapBtn: true }}
                    onSelected={data => {
                        alert(JSON.stringify(data));
                        setModal(false);
                    } } onError={function (error: unknown): void {
                        throw new Error('Function not implemented.');
                    } }                />
            </Modal>
            <TouchableOpacity onPress={() => setModal(true)}>
                    <Text>주소찾기</Text>
            </TouchableOpacity>  
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
const LocalLogo = styled(Image)`

`
export default LocalScreen;