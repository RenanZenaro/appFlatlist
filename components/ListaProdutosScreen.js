import React from 'react';
import { View, FlatList, StyleSheet, StatusBar, Image } from 'react-native';
import { List } from 'react-native-paper';
import Produtos from '../data/Produtos';

export default props => {

    const Item = ({ elemento: item }) => (
        <List.Item
            title={item.titulo}
            description={item.descricao}
            // left={props => <List.Icon {...props} icon="folder" />}
            left={props =>
                <Image {...props} style={styles.tinylogo}
                    source={{ uri: item.urlImagem }} />
            }
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={Produtos}
                renderItem={({ item }) => <Item elemento={item} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinylogo: {
        width: 50,
        height: 50
    }
});