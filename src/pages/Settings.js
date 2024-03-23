import { Text, SafeAreaView, View, FlatList, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import MyOption from "../components/myOption/MyOption";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import option from "../options_data.json"

function Settings() {

    let {theme} = useContext(ThemeContext);

    const styles = createStyles(theme);
    const [data, setData] = useState(option);

    const renderOption = ({ item }) => <MyOption option={ item } />
    const keyExtractor = item => item.id.toString()

    return (
        <SafeAreaView
            style={styles.container}>

            <Text
                style={styles.header}>
                Ayarlar</Text>

            <View style={styles.options}>
                <FlatList
                    data={data}
                    renderItem={renderOption}
                    keyExtractor={keyExtractor} />
            </View>

        </SafeAreaView>
    )
}

const createStyles = (theme) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background
        },
        header: {
            fontSize: hp(4),
            fontWeight: "bold",
            marginLeft: hp(3),
            marginTop: hp(4),
            color: theme.textColor
        },
        options: {
            backgroundColor: theme.background,
            height: hp(70),
            width: wp(100),
            marginTop: hp(4),
            justifyContent: "center",
            alignContent: "center"
        }
    })
}

export default Settings;