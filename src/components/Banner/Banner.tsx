import React from 'react'
import { Text, View } from 'react-native'
import { Image } from "expo-image";

export const Banner = () => {
    return (
        <View
            style={{
                backgroundColor: "#D2F801",
                flexDirection: "row",
                justifyContent: "space-between",
                borderRadius: 8,
            }}
        >
            <View
                style={{
                    padding: 16,
                    width: 179,
                }}
            >
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "bold",
                    }}
                >
                    Invita y ambos ganan devolución de dinero
                </Text>
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: "bold",
                        marginTop: 8,
                        textDecorationLine: "underline",
                    }}
                >
                    Invitar{" "}
                </Text>
            </View>
            <View
                style={{
                    width: 179,
                    justifyContent: "flex-end",
                }}
            >
                <Image
                    source="https://png.pngtree.com/png-clipart/20220829/ourmid/pngtree-black-pyramid-shape-ui-element1-png-image_6129482.png"
                    style={{
                        flex: 1,
                        width: "100%",
                    }}
                />
            </View>
        </View>
    )
}
