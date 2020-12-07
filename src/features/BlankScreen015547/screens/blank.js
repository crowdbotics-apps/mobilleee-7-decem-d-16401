import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/4_qIEJxCV.jpg"
        }}
        style={styles.Image_2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Image_2: {
    width: 100,
    alignSelf: "center",
    borderColor: "#4b30d5",
    borderWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderRadius: 10
  }
})
