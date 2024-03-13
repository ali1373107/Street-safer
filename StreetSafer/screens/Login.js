import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { COLORS, images, FONTS, SIZES } from "../constants";
import { TouchableOpacity } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";
const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{ width: 100, height: 100, marginLeft: -22, marginBottom: 6 }}
        />
        <Text>Login</Text>
        <Text>
          Sign in now for free and report potholes to help maintain roads safe.
        </Text>
        <View>
          <Input id="email" placeHolder="Email" />
          <Input id="password" placeHolder="Password" />
          <Button title="LOGIN" />
          <View style={StyleSheet.bottomContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navibation.navigate("Signup")}>
              <Text>SIGNUP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
  },
});
export default Login;
