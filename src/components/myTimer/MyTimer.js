import { useContext, useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import createStyles from "./MyTimerStyles";
import { TimerContext } from "../../context/TimerContext";

const MyTimer = ({ gif }) => {

    let { theme } = useContext(ThemeContext);
    let { seconds, gifIndex } = useContext(TimerContext);

    const styles = createStyles(theme);

    const [showText, setShowText] = useState(false);
    const [finish, setFinish] = useState(false);

    useEffect(() => {
        if (seconds % 15 < 10) {
            setShowText(false);
            setFinish(false);
        } else if (seconds % 15 >= 10 && seconds % 15 < 15) {
            setShowText(true);
            setFinish(false);
        } else if (seconds % 15 === 0) {
            setFinish(true);
            setShowText(false);
        }
    }, [seconds])

    return (
        <View>
            {seconds % 15 < 10 ? (
                <Image source={gif[gifIndex]} style={styles.gif} />
            ) : showText ? (
                <View style={styles.textView}><Text style={styles.text}>DİNLEN</Text></View>
            ) : finish ? (
                <Text>BİTTİ</Text>
            ) : null}
        </View>
    )
}

export default MyTimer;