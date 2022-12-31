import React, { useState } from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputChangeEventData, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import axios from 'axios';
import * as S from '../components/CommonComponents';
import { KAKAO_REST_API_KEY } from "@env";

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Travel'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

interface AddressData  {
    address_name: string,
    place_name: string,
    x: string,
    y: string,
    id: string
}

const TravelScreen = (props: Props) => {
    const { navigation } = props;
    const [ userInfo, ]=useRecoilState(userState);
    const [ places, setPlaces ] = useState<AddressData[]>([]);
    const [ isPlaceReady, setReady ] = useState(false);
    const [ keyword, setKeyword ] = useState("");


    const handleButton = () => {
        navigation.navigate('Items');
    };

    const handleSelect = () => {
        searchAddress;
    };

    const handleKeyword = (e : NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text}  = e.nativeEvent
        setKeyword(text);
      };

    const searchAddress = async () => 
    {
        const url = 'https://dapi.kakao.com/v2/local/search/keyword.json?sort=accuracy&page=1&size=10&category_group_code=AD5&query=제주+'+keyword+'&category_group_code=AD5';
        try{
            setPlaces([]);
            const response = await axios.get(
                url, 
                {
                headers: {
                    'Authorization': KAKAO_REST_API_KEY
                },
                }
            );
            setPlaces(response.data.documents);
            setReady(true);
        } catch (e) {
            console.log(e)
        }
        return(
            <Text>되나 이거</Text>
        )
    }

    const Item = (place_name:string) => {
        <Text>{place_name}</Text>
    }

    const renderItem = (item:AddressData) => {
        <Text>{item.place_name}</Text>
    }

    return(
        <S.Wrapper>
            <>
            <S.HeaderContainer>
                <S.HeaderFirstLine>{userInfo.name}님,</S.HeaderFirstLine>
                <S.HeaderSecondLine>여정을 위한 <S.ColoredText>두번째</S.ColoredText> 단계예요</S.HeaderSecondLine>
                <S.HeaderThirdLine>머무르는 숙소를 추가해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>
            <MapContainer></MapContainer>
            <SearchBox>
                <S.SearchContiner>
                    <S.Dot></S.Dot>
                    <InputBox 
                    onChange={handleKeyword}
                    placeholder='숙소 검색하기'
                    ></InputBox>
                    <TouchableOpacity onPress={searchAddress}>
                        <S.LogoImage source={require('../assets/images/searchIcon.png')}></S.LogoImage>
                    </TouchableOpacity>
                </S.SearchContiner>
            </SearchBox>
            <ResultContainer>

            {/* <FlatList
                data={places}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}
            
            {isPlaceReady ? (places.map((item)=>{
                return(
                    <ResultBox>
                        <Text key={parseInt(item.id)}>{item.place_name}</Text>
                    </ResultBox>
                )
            })):(<Text>아직 안 돼</Text>)
            }
            </ResultContainer>

            <S.NextButton>
                <S.NextButtonText onPress={handleButton}>다음으로</S.NextButtonText>
            </S.NextButton>
            </>
        </S.Wrapper>
    )
}

const InputBox = styled(TextInput)`
    font-family: NotoSansKR-Regular;
    font-size: 16rem;
    color: #3E404C;
    width: 83%;
`
const SearchBox = styled(View)`
    width: 85%;
    height: 5.5%;
    margin-top: 3%;
    background-color: white;
    justify-content: center;
    border: 2px solid #CDCED6;
    border-radius: 30px;
    padding-left: 3%;
`
const ResultContainer = styled(ScrollView)`
    background-color: white;
    width: 85%;
    height: 30%;
`
const MapContainer = styled(View)`
    height: 23%;
    width: 100%;
    background-color: grey;
    margin-top: 37%;
`
const ResultBox = styled(View)`
    height: 50%;
    witdh: 85%;
    background-color: grey;
`
export default TravelScreen;