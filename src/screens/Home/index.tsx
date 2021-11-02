import React from 'react';
import { Point } from '../../assets/images';
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

            </Content>
        </Container>
    );
}