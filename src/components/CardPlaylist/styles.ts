import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(80)}px;
  width: ${RFValue(170)}px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-radius: ${RFValue(15)}px;
  margin-top: ${RFValue(24)}px;
  margin-left: ${RFValue(20)}px;
`;

export const Image = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${RFValue(20)}px;
  margin-left: ${RFValue(10)}px;
`;

export const ViewText = styled.View`
  flex: 1;
  margin-left: ${RFValue(10)}px;
`;

export const ViewDescription = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextDescription = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: ${RFValue(5)}px;
`;

export const ImageMusic = styled.Image``;

export const TitleName = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const PlayIcon = styled.Image`
  height: ${RFValue(20)}px;
  width: ${RFValue(20)}px;
`;
