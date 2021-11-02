import React from 'react';
import { MusicIcon } from '../../assets/images';

import {
    Container,
    Image,
    ViewText,
    TitleName,
    ViewDescription,
    TextDescription,
    ImageMusic,
    PlayIcon
} from './styles';

export function CardPlaylist() {
    return (
        <Container>
            <Image />

            <ViewText >
                <TitleName>
                    Ayesha Ruhin
                </TitleName>
                <ViewDescription>
                    <ImageMusic source={MusicIcon} />
                    <TextDescription>
                        Some Feeling
                    </TextDescription>
                </ViewDescription>
            </ViewText>
        </Container>
    );
}