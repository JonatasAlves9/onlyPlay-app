import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${RFValue(23)}px;
  font-family: ${({ theme }) => theme.fonts.black};
  padding: ${RFValue(20)}px;
`;
