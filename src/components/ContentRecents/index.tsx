import React from 'react';
import { ScrollView } from 'react-native';
import { CardMusic } from '../CardMusic';

import {
    Container,
    Title,
} from './styles';

export function ContentRecents() {
    return (
        <Container>
            <Title>Recentes</Title>
            <ScrollView horizontal style={{ marginTop: 25, marginLeft: 20 }} showsHorizontalScrollIndicator={false}>
                <CardMusic />
                <CardMusic />
                <CardMusic />
                <CardMusic />
            </ScrollView>

        </Container>
    );
}