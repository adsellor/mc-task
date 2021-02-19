import AsyncStorage from "@react-native-async-storage/async-storage";
import { EmployeeResponseModel } from "../api/responseTypes";

export interface PersonalData extends Partial<EmployeeResponseModel> {
  photoUri: string;
  jobTitle: string;
  location: string;
  firstName: string;
  lastName: string;
}

export const savePersonalData = async (data: Record<string, unknown>) => {
  try {
    await AsyncStorage.setItem("personalData", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const getPersonalData = async (): Promise<PersonalData | null> => {
  try {
    const personalData = await AsyncStorage.getItem("personalData");
    if (personalData) {
      return await JSON.parse(personalData);
    }
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const saveEmployeeData = async (data: EmployeeResponseModel[]) => {
  try {
    await AsyncStorage.setItem("employeeData", JSON.stringify(data));
  } catch (e) {
    console.log(e);
  }
};

export const getEmployeeData = async (): Promise<EmployeeResponseModel[] | null> => {
  try {
    const data = await AsyncStorage.getItem("employeeData");
    if (data) {
      return await JSON.parse(data);
    }
  } catch (e) {
    console.log(e);
  }
   return null
};
