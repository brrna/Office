import { useEffect, useState } from "react";
import { View } from "react-native";
import MyGif from "../myGif/MyGif";

const MyTimer = ({gif, gifIndex}) => {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
        return() => clearInterval(timer);
    })

    return(
        <View>
            {seconds % 15 < 10 ? (
                <MyGif gif={gif} gifIndex={gifIndex} />
            ) : null}
        </View>
    )
}

export default MyTimer;