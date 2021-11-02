import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  height: 80px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const ViewIconUser = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin-left: 30px;
`;

export const IconUser = styled.View``;

export const ViewSearch = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  margin-right: 30px;
  justify-content: center;
  align-items: center;
`;

export const IconSearch = styled(Feather)``;
