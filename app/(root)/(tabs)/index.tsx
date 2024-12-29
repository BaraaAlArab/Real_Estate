import {Text, View} from "react-native";
import {Link} from "expo-router";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold my-10 font-rubik text-3xl">
        Welcome to RealEstate Application
      </Text>
      <Link href="/Accounts/Sign-In">Sign-In</Link>
      <Link href="/(root)/(tabs)/Explore">Explore</Link>
      <Link href="/(root)/(tabs)/Profile">Profile</Link>
      <Link href="/(root)/Propertise/1">Propertise</Link>
    </View>
  );
}
