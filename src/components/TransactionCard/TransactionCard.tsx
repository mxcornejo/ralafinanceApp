import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const TransactionCard = () => {
  return (
    <View
      style={{
        borderWidth: 0.2,
        borderRadius: 8,
        borderColor: "#cccccc",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        marginTop: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#EEECFF",
            borderRadius: 100,
            padding: 8,
            margin: 8,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
        <View
          style={{
            marginLeft: 8,
          }}
        >
          <Text
            style={{
              marginBottom: 4,
              fontWeight: "bold",
            }}
          >
            Figma
          </Text>
          <Text>Hoy, 12:30 PM</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "flex-end",
          marginRight: 8,
        }}
      >
        <Text
          style={{
            marginBottom: 4,
            fontWeight: "bold",
          }}
        >
          - 250,00
        </Text>
        <Text>Suscripción</Text>
      </View>
    </View>
  );
};
