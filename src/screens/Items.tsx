import React, { useState, useEffect } from 'react'
import { View, Image, SafeAreaView, Text, TextInput, TouchableOpacity,
        NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
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

const ItemsScreen = (props: Props) => {
    const { navigation } = props;

    const handleButton = () => {
    
        navigation.navigate('Select');
    };


    return(
        <CenterSafeAreaView>
            <Text>Items</Text>
        </CenterSafeAreaView>
    )
}
const CenterSafeAreaView = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #FAF9F9;
`;

export default ItemsScreen;