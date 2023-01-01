import React, { useState } from "react";
import { Button, Text } from "react-native";
import ImagePicker from "react-native-image-picker";

const MyItemsPage = () => {
    
    const handleImage = () => {
        const option = {
            title: 'Select Image',
        }   
        const [img, setImage] = useState("");

    }

    return(
        <>
            <Text>나의 주멍</Text>
        </>
    )
}

export default MyItemsPage;