import styled from 'styled-components';
import { View, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';

export const NextButton = styled(TouchableOpacity)`
    position:absolute;
    bottom: 6%;
    width: 85%;
    height: 7%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    background-color:#FFC000;
    border-radius:20px;
`;

export const NextButtonText = styled(Text)`
    color: #ffffff;
    font-size: 20%;
    font-family: NotoSansKR-Medium;
`;
export const HeaderContainer = styled(View)`
    aling-items:left;
    width:85%
    position:absolute;
    left:7.5%;
    top: 14%;
`
export const HeaderFirstLine = styled(Text)`
    font-size:20%;
    font-family: NotoSansKR-Medium;
`
export const HeaderSecondLine = styled(Text)`
    font-size:20%;
    margin-bottom:2%;
    font-family: NotoSansKR-Medium;
`
export const HeaderThirdLine = styled(Text)`
    font-size:16%;
    font-family:Inter-Medium;
    color:#3E404C;
`
export const ColoredText = styled(Text)`
    color:#78A484;
`

export const Wrapper = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FAF9F9;
`;

export const LogoImage = styled(Image)`

`
export const SearchBox = styled(TouchableOpacity)`
    width: 85%;
    height: 5.5%;
    margin-top: 3%;
    background-color: white;
    justify-content: center;
    border: 2px solid #CDCED6;
    border-radius: 30px;
    padding-left: 3%;
`
export const Dot = styled(View)`
    width: 2.5%;
    height: 20%;
    background: #E1E1E8;
    border-radius: 20px;
    margin-right: 4%;
`
export const SearchContainer = styled(View)`
    width:100%;
    height: 100%;
    flex-direction:row; 
    align-items: center;
`
export const AddressText = styled(Text)`
    font-family: NotoSansKR-Regular;
    font-size: 16rem;
    color: #3E404C;
    width: 83%;
`