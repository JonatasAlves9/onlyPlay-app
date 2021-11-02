import React from 'react';
import { theme } from '../../global/styles/theme';

import {
    Container,
    ViewIconUser,
    IconUser,
    ViewSearch,
    IconSearch,
} from './styles';

export function Header() {
    return (
        <Container>
            <ViewIconUser>
                <IconUser />
            </ViewIconUser>
            <ViewSearch>
                <IconSearch name={"search"} color={theme.colors.dark} size={22} />
            </ViewSearch>
        </Container>
    );
}