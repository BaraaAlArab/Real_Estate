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
      <Link href="/Accounts/Sign-In">Sign-In</Link>
      <Link href="/(root)/(tabs)/Explore">Explore</Link>
      <Link href="/(root)/(tabs)/Profile">Profile</Link>
      <Link href="/(root)/Propertise/[id]">Propertise</Link>
    </View>
  );
}
