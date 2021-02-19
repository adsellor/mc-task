import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import AvatarPicker from "../../components/AvatarPicker";
import Button from "../../components/Button";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import Input from "../../components/Input";
import { secondaryColor } from "../../consts/colors";
import { AccountDetailsContext } from "../../providers/AccountProvider";
import { AccountDetailsProvider } from "../../providers/providerTypes";
import { AuthActionType, DetailsActionType } from "../../reducers/reducerTypes";

import accountDetailsStyles from "./accountDetailsStyles";

import { savePersonalData, saveEmployeeData } from "../../utils/storage";
import { EmployeesContext } from "../../providers/EmployeesProvider";
import { AuthContext } from "../../providers/AuthProvider";
import { getEmployeesList } from "../../api/employees";
import { EmployeeResponseModel } from "../../api/responseTypes";

const AccountDetailsPage = () => {
  const { details, dispatch } = useContext(AccountDetailsContext);
  const { employees } = useContext(EmployeesContext);
  const { dispatch: authDispatch } = useContext(AuthContext);

  const [firstName, setFirstName] = useState(
    details.firstStepDetails?.firstName ?? ""
  );
  const [lastName, setLastName] = useState(
    details.firstStepDetails?.lastName ?? ""
  );
  const [location, setLocation] = useState(
    details.firstStepDetails?.location ?? ""
  );
  const [photoUri, setPhotoUri] = useState(
    details.firstStepDetails?.photoUri ?? ""
  );

  const [department, setDepartment] = useState(
    details.secondStepDetails?.department ?? ""
  );
  const [jobTitle, setJobTitle] = useState(
    details.secondStepDetails?.jobTitle ?? ""
  );

  const [isEmployeeListSortable, setIsEmployeeListSortable] = useState(false);
  const [employeeData, setEmployeeData] = useState<EmployeeResponseModel[] | null>(null);

  const _checkDetails = () => {
    if (
      details.step === AccountDetailsProvider.Steps.FirstStep &&
      (firstName === "" ||
        lastName === "" ||
        location === "" ||
        photoUri === "")
    ) {
      Alert.alert(
        "Missing Details",
        "Please fill in your personal information"
      );
      return false;
    } else if (
      details.step === AccountDetailsProvider.Steps.SecondStep &&
      (department === "" || jobTitle === "")
    ) {
      Alert.alert("Missing Details", "Please fill in your work information");
      return false;
    }
    return true;
  };

  const _setStep = (step: AccountDetailsProvider.Steps) => {
    dispatch({
      type: DetailsActionType.SetStep,
      payload: { step },
    });
  };
  const _setFirstStep = () => {
    _setStep(AccountDetailsProvider.Steps.FirstStep);
  };

  const _setSecondStep = () => {
    _setStep(AccountDetailsProvider.Steps.SecondStep);

    dispatch({
      type: DetailsActionType.SetFirstDetails,
      payload: {
        firstDetails: {
          firstName,
          lastName,
          location,
          photoUri,
        },
      },
    });
  };

  const _setThirdStep = () => {
    dispatch({
      type: DetailsActionType.SetSecondDetails,
      payload: {
        secondDetails: {
          department,
          jobTitle,
        },
      },
    });
    _setStep(AccountDetailsProvider.Steps.ThirdStep);
  };

  const _setFourthStep = () => {
    _setStep(AccountDetailsProvider.Steps.FourthStep);
    setIsEmployeeListSortable(true);
  };

  const _saveData = () => {
    savePersonalData({
      ...details.firstStepDetails,
      ...details.secondStepDetails,
    });
    saveEmployeeData(employees);
    authDispatch({
      type: AuthActionType.SetAuth,
      payload: { isSignedIn: true },
    });
  };

  const _fetchEmployees = async () => {
    const employees = await getEmployeesList();
    setEmployeeData(employees);
  };

  const _handleNextPress = () => {
    const fullDetails = _checkDetails();
    if (!fullDetails) return null;

    if (details.step === AccountDetailsProvider.Steps.FirstStep)
      _setSecondStep();
    else if (details.step === AccountDetailsProvider.Steps.SecondStep)
      _setThirdStep();
    else if (details.step === AccountDetailsProvider.Steps.ThirdStep)
      _setFourthStep();
    else if (details.step === AccountDetailsProvider.Steps.FourthStep)
      _saveData();
  };

  const _handleBackPress = () => {
    if (details.step === AccountDetailsProvider.Steps.SecondStep)
      _setFirstStep();
    else if (details.step === AccountDetailsProvider.Steps.ThirdStep)
      _setSecondStep();
    else if (details.step === AccountDetailsProvider.Steps.FourthStep)
      _setThirdStep();
    setIsEmployeeListSortable(false);
  };

  useEffect(() => {
    _fetchEmployees();
  }, [])

  return (
    <KeyboardAvoidingView
      behavior="height"
      style={accountDetailsStyles.mainWrapper}
    >
      <View style={accountDetailsStyles.container}>
        {details.step !== AccountDetailsProvider.Steps.ThirdStep &&
          details.step !== AccountDetailsProvider.Steps.FourthStep && (
            <AvatarPicker photoUri={photoUri} onImagePick={setPhotoUri} />
          )}
        {details.step !== AccountDetailsProvider.Steps.ThirdStep && (
          <Text style={accountDetailsStyles.infoText}>
            {details.step === AccountDetailsProvider.Steps.FourthStep
              ? "Hold and drag for priority change"
              : "Hi, Please Fill In Your Inforamtion Below"}
          </Text>
        )}
        {details.step === AccountDetailsProvider.Steps.FirstStep && (
          <View style={{ width: "100%" }}>
            <Input
              onChangeText={setFirstName}
              value={firstName}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
            <Input
              onChangeText={setLocation}
              value={location}
              placeholder="Current Location"
            />
          </View>
        )}
        {details.step === AccountDetailsProvider.Steps.SecondStep && (
          <View style={{ width: "100%" }}>
            <Input
              onChangeText={setDepartment}
              value={department}
              placeholder="Department"
            />
            <Input
              value={jobTitle}
              onChangeText={setJobTitle}
              placeholder="Job Title"
            />
          </View>
        )}
        {(details.step === AccountDetailsProvider.Steps.ThirdStep ||
          details.step === AccountDetailsProvider.Steps.FourthStep) && (
          <View style={accountDetailsStyles.employeeListWrapper}>
            <EmployeeList data={employeeData} isSortable={isEmployeeListSortable} />
          </View>
        )}
        <Button onPress={_handleNextPress}>Next step</Button>
        {details.step !== AccountDetailsProvider.Steps.FirstStep && (
          <Button onPress={_handleBackPress} color={secondaryColor}>
            Go back
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AccountDetailsPage;
