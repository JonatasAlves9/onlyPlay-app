import React from 'react';

import {
    Container,
    ViewOpacity,
    Image,
} from './styles';

export function CardMusic() {
    return (
        <Container >
            <Image source={{ uri: 'https://jeremiejordan.files.wordpress.com/2008/03/chinese-democracy.jpg' }} />
            <ViewOpacity>

            </ViewOpacity>
        </Container>
    );
}