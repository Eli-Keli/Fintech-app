import { icons } from "@/constants";
import { Tabs, Redirect } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native"


interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ icon, color, name, focused }: TabIconProps) => {
  return (
    <View style={styles.iconContainer}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.iconImage}
      />
      <Text style={{ color: color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          )
        }}
      />
      <Tabs.Screen
        name="Literacy"
        options={{
          title: "Literacy",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.usd}
              color={color}
              focused={focused}
              name="Literacy"
            />
          )
        }}
      />
      <Tabs.Screen
        name="Budgeting"
        options={{
          title: "Budgeting",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.wallet}
              color={color}
              focused={focused}
              name="Budgeting"
            />
          )
        }}
      />
      <Tabs.Screen
        name="Group"
        options={{
          title: "Group Savings",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.group}
              color={color}
              focused={focused}
              name="Group"
            />
          )
        }}
      />
    </Tabs>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    width: 84,
  },
  iconImage: {
    width: 35,
    height: 35,
  },
  tabBarStyle: {
    backgroundColor: '#EFEFEF',
    borderTopWidth: 1,
    borderTopColor: '#232533',
    height: 70,
    // borderColor: 'green',
    // borderWidth: 1,
  },
})