import { SafeAreaView, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

const CustomerScreen = () => {
  const tw = useTailwind();

  return (
    <SafeAreaView>
      <Text style={tw("text-blue-500")}>CustomerScreen</Text>
    </SafeAreaView>
  );
};
export default CustomerScreen;
