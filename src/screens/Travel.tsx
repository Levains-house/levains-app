import React, { useEffect, useState } from 'react'
import { FlatList, Image, View, Text, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputChangeEventData, ScrollView, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import axios from 'axios';
import * as S from '../components/CommonComponents';
import { KAKAO_REST_API_KEY } from "@env";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Travel'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

interface AddressData  {
    road_address_name: string,
    place_name: string,
    x: string,
    y: string,
    id: string
}

interface Cord {
    latitude: number,
    longitude: number
}

interface MarkerValue {
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

const TravelScreen = (props: Props) => {
    const { navigation } = props;
    const [ userInfo, ]=useRecoilState(userState);
    const [ places, setPlaces ] = useState<AddressData[]>([]);
    const [ isPlaceReady, setReady ] = useState(false);
    const [ keyword, setKeyword ] = useState("");
    const [ cords, Setcords ] = useState<Cord[]>([]);

    const handleButton = () => {
        navigation.navigate('Items');
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
    }

    const handelCord = (cord:Cord) => {
        Setcords((oldArray) => [...oldArray, cord])
    }

    // useEffect(() => {
    //     console.log(cords)
    // }, [cords]);

    return(
        <S.Wrapper>
            <>
            <S.HeaderContainer>
                <S.HeaderFirstLine>{userInfo.name}님,</S.HeaderFirstLine>
                <S.HeaderSecondLine>여정을 위한 <S.ColoredText>두번째</S.ColoredText> 단계예요</S.HeaderSecondLine>
                <S.HeaderThirdLine>머무르는 숙소를 추가해주세요.</S.HeaderThirdLine>
            </S.HeaderContainer>

            <MapContainer>
                <MapView
                    style={{width:'100%', height:'100%'}}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 33.3784564531332,
                        longitude: 126.550600157083,
                        latitudeDelta: 0.45,
                        longitudeDelta: 0.1,
                    }}
                >
                    {cords.map((marker, index)=>(
                        <Marker
                            key = {index}
                            coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
                            image={require('../assets/images/mapMarker.png')}
                        />
                    ))}
                </MapView>
            </MapContainer>
            

            <SearchBox>
                <S.SearchContainer>
                    <S.Dot></S.Dot>
                    <InputBox 
                    onChange={handleKeyword}
                    placeholder='숙소 검색하기'
                    ></InputBox>
                    <TouchableOpacity onPress={searchAddress}>
                        <S.LogoImage source={require('../assets/images/searchIcon.png')}></S.LogoImage>
                    </TouchableOpacity>
                </S.SearchContainer>
            </SearchBox>
            <ResultContainer>
            {isPlaceReady && <FlatList
                data={places}
                renderItem={ 
                    ({item}) => 
                    (
                    <ResultBox>
                        <MarkerImage source={require('../assets/images/marker.png')}></MarkerImage>
                        <TextContainer>
                            <PlaceText>{item.place_name}</PlaceText>
                            <AddressText>{item.road_address_name}</AddressText>
                        </TextContainer>
                        <ChoiceButton onPress={()=>{handelCord({latitude:parseFloat(item.y), longitude:parseFloat(item.x)})}}>
                            <ChoiceText>선택</ChoiceText>
                        </ChoiceButton>
                    </ResultBox>
                    )}
                keyExtractor={ (item: AddressData) => item.id}
            />}
            </ResultContainer>
            <S.NextButton>
                <S.NextButtonText onPress={handleButton}>다음으로</S.NextButtonText>
            </S.NextButton>
            </>
        </S.Wrapper>
    )
}
const MapContainer = styled(View)`
    height: 23%;
    width: 100%;
    background-color: grey;
    margin-top: 37%;
`
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
const ResultContainer = styled(View)`
    height: 40%;
    margin-bottom: 20%;
`
const ResultBox = styled(View)`
    margin-vertical: 1.5%;
    background: #FFFFFF;
    border: 1px solid #E1E1E8;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    padding-top: 3.5%;
    padding-bottom: 3.5%;
`
const MarkerImage = styled(Image)`
    margin-left:6%;
`
const TextContainer = styled(View)`
    margin-left: 4%;
    margin-right: 10%;
`
const PlaceText = styled(Text)`
    font-family: NotoSansKR-Regular;
    font-size: 16%;
    color: #3E404C;
`
const AddressText = styled(Text)`
    font-family: NotoSansKR-Regular;
    font-size: 14%;
    color: #CDCED6;
`
const ChoiceButton = styled(TouchableOpacity)`
    position: absolute;
    right: 7%;
    border: 0.3px solid #CDCED6;
    border-radius: 20px;    
    align-items:center;
    height: 55%;
    width: 11%;
    justify-content: center;
`
const ChoiceText = styled(Text)`
    font-size: 12%;
    font-family: NotoSansKR-Regular;
    color: #A9ABB8;
`
export default TravelScreen;