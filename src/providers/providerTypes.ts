export namespace AccountDetailsProvider {
  export enum Steps {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
  }

  export type FirstStepDetails = {
    firstName: string;
    lastName: string;
    photoUri: string;
    location: string;
  };

  export type SecondStepDetails = {
    department: string;
    jobTitle: string;
  };
  export interface ContextState {
    step: Steps;
    totalSteps: number;
    firstStepDetails?: FirstStepDetails;
    secondStepDetails?: SecondStepDetails;
    thirdStepDetails?: unknown;
  }
}
