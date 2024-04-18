import { StyleSheet } from 'react-native';

const colorTextAmount = '#FFFFFF80';

const styles = StyleSheet.create({
    containerAmount: {
        backgroundColor: '#5A45FE',
        padding: 16
    },
    amount:{
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold'
    },
    userName:{
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textAmount:{
        color: colorTextAmount,
        marginBottom: 4,
    },
    notificationPoint:{
        height:8,
        width: 8,
        backgroundColor: '#D2F801',
        position: "absolute",
        right: 10,
        top: 10,
        borderRadius: 100,
    }
});

export default styles;