import React, { useState, useEffect } from 'react'
import { View, Image, SafeAreaView, Text, TextInput, TouchableOpacity,
        NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/RootStackParamList';
import styled from 'styled-components';
import * as S from '../components/CommonComponents';
import { useRecoilState } from 'recoil';
import { userState } from '../atoms/userState';
import { loadAsync } from 'expo-font';

type LoginScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Start'
>;

type Props = {
    navigation: LoginScreenNavigationProp;
};

const MainScreen = (props: Props) => {
    const { navigation } = props;
    const [ userInfo, ]=useRecoilState(userState);
    const [ toggle, setToggle] = useState(true);
    
    const handleButton = () => {
        navigation.navigate('Main');
    };

    return(
        <S.Wrapper>
            <Text>main</Text>
        </S.Wrapper>
    )
}

export default MainScreen;