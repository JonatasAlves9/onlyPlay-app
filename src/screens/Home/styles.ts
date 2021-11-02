import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  font-weight: bold;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 29px;
`;

export const ImagePoint = styled.Image`
  width: 130px;
  height: 70px;
`;
