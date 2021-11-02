import React from 'react';
import { ScrollView } from 'react-native';
import { Point } from '../../assets/images';
import { CardPlaylist } from '../../components/CardPlaylist';
import { ContentRecents } from '../../components/ContentRecents';
import { Header } from '../../components/Header';

import {
    Container,
    Content,
    Title,
    ViewTitle,
    ImagePoint,
} from './styles';

export function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <ViewTitle>
                    <Title>
                        Find the best {'\n'}music for you
                    </Title>
                    <ImagePoint source={Point} />
                </ViewTitle>

                <ScrollView horizontal style={{ marginTop: 25, maxHeight: 120 }} showsHorizontalScrollIndicator={false}>
                    <CardPlaylist />
                    <CardPlaylist />
                    <CardPlaylist />
                    <CardPlaylist />
                </ScrollView>

                <ContentRecents />
            </Content>
        </Container>
    );
}