import axiosClient from "../config/axiosClient";
import { EmployeeResponseModel } from "./responseTypes";

const getEmployeesList = async (): Promise<EmployeeResponseModel[]> => {
  const response = await axiosClient.get("employees");
  return response.data;
};

export { getEmployeesList };
