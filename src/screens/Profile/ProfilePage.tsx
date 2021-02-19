import React, { useContext, useEffect, useState } from "react";
import { View, Text, Clipboard } from "react-native";
import AvatarPicker from "../../components/AvatarPicker";
import Button from "../../components/Button";
import {
  PersonalData,
  getEmployeeData,
  getPersonalData,
  saveEmployeeData,
} from "../../utils/storage";
import profileStyles from "./profileStyles";
import { secondaryColor } from "../../consts/colors";
import { EmployeeResponseModel } from "../../api/responseTypes";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { EmployeesContext } from "../../providers/EmployeesProvider";
import { EmployeesActionType } from "../../reducers/reducerTypes";

const ProfilePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [personalData, setPersonalData] = useState<PersonalData | null>(null);

  const { employees, dispatch } = useContext(EmployeesContext);

  const getData = async () => {
    const data = await getPersonalData();

    setPersonalData(data);
  };

  const copyData = () => {
    if (personalData) {
      Clipboard.setString(JSON.stringify(personalData));
    }
  };

  const _save = async () => {
    dispatch({
      type: EmployeesActionType.SetSelectedEmployees,
      payload: { employeesDetails: employees },
    });
    setIsModalVisible(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    personalData &&
    (isModalVisible ? (
      <>
        <View style={profileStyles.employeeListWrapper}>
          <EmployeeList data={employees} isSortable />
        </View>
        <Button onPress={_save}> Save </Button>
      </>
    ) : (
      <View style={profileStyles.wrapper}>
        <AvatarPicker photoUri={personalData.photoUri} />
        <Text style={profileStyles.infoText}>
          {personalData.firstName} {personalData.lastName}{" "}
        </Text>
        <Text style={profileStyles.infoText}>{personalData.location} </Text>
        <Text style={profileStyles.infoText}>{personalData.jobTitle} </Text>
        <Text style={profileStyles.infoText}>{personalData.email} </Text>
        <Button onPress={copyData}>Copy Information</Button>
        <Button onPress={() => setIsModalVisible(true)} color={secondaryColor}>
          Edit Employee List
        </Button>
      </View>
    ))
  );
};

export default ProfilePage;
