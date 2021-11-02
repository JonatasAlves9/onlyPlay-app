import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  height: ${RFValue(145)}px;
  width: ${RFValue(150)}px;
  border-radius: ${RFValue(15)}px;
  margin-right: ${RFValue(10)}px;
  justify-content: flex-end;
  align-items: center;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: ${RFValue(15)}px;
`;

export const ViewOpacity = styled.View`
  background-color: rgba(255, 255, 255, 0.28);
  border-radius: ${RFValue(15)}px;
  width: 90%;
  height: 60px;
  margin-bottom: -12px;
`;
