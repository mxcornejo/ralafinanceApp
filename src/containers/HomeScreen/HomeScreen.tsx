import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/styles";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Banner, TransactionCard } from "../../components";

export const HomeScreen = () => {
  return (
    <>
      <View style={styles.containerAmount}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.textAmount}>Buen día!</Text>
            <Text style={styles.userName}>Manuel Cornejo 👋</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 100,
              padding: 8,
              borderColor: "#FFFFFF80",
            }}
          >
            <View style={styles.notificationPoint} />
            <Ionicons name="notifications-outline" size={24} color="white" />
          </View>
        </View>
        <Text style={styles.textAmount}>
          Balance total <Feather name="eye" size={16} />
        </Text>
        <Text style={styles.amount}>$ 1.000.000</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#6754FE",
            borderRadius: 8,
            padding: 16,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              width: 100,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F801",
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                marginVertical: 16,
              }}
            >
              <Text>$</Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Completar
            </Text>
          </View>
          <View
            style={{
              borderLeftColor: "#fff",
              borderRightColor: "#fff",
              borderTopColor: "transparent",
              borderBottomColor: "transparent",
              borderWidth: 0.2,
              paddingHorizontal: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F801",
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                marginVertical: 16,
              }}
            >
              <Text>$</Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Transferencia
            </Text>
          </View>
          <View
            style={{
              width: 100,
              paddingLeft: 16,
            }}
          >
            <View
              style={{
                backgroundColor: "#D2F801",
                width: 20,
                height: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
                marginVertical: 16,
              }}
            >
              <Text>$</Text>
            </View>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              Recibido
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          padding: 16,
        }}
      >
        <Banner />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Transacciones
          </Text>
          <Text
            style={{
              color: "#6754FE",
            }}
          >
            Ver todo
          </Text>
        </View>
        <TransactionCard />
      </View>
    </>
  );
};
