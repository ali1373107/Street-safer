import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native";

const Signup = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text> Sign Up</Text>
        <Text>
          Signup now for free and report potholes to help maintain roads safe.
        </Text>
        <Input id="fullName" placeholder="Name" />
        <Input id="email" placeHolder="Email" />
        <Input id="password" placeHolder="Password" />
        <Button title="SIGNUP" />
        <View>
          <Text> Already have an account?</Text>
          <TouchableOpacity>
            <Text> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signup;
