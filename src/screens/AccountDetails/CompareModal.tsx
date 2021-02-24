import React, { useMemo } from 'react';
import {  Modal } from 'react-native';
import {EmployeeResponseModel} from '../../api/responseTypes.ts';
import Button from '../../components/Button.ts';
import ListItem from '../../components/EmployeeList/ListItem';

interface ICompareModalProps {
	isOpen: boolean,
	personalDetails: Record<string, string>,
	compareDetails: EmployeeResponseModel
}

const CompareModal = ({isOpen, personalDetails, compareDetails}: ICompareModalProps) => {

  const _compareItems = (item: string, compare: string) => {
	return item === compare;
  }
  return (
      <Modal
      	animationType="slide"
      	visible={isOpen} >
      <>
      <ListItem 
      	name={personalDetails.firstName} 
      	lastName={personalDetails.lastName} 
      	jobTitle={personalDetails.jobTitle}
      	department={personalDetails.department}
	country={personalDetails.country}
	isSelected={false}
      />
      <ListItem 
      	isSelected={false}
      	name={compareDetails.first_name} 
      	lastName={compareDetails.last_name} 
      	jobTitle={compareDetails["job title"]}
      	department={compareDetails.department}
	country={compareDetails.country}
	jobTitleColor={_compareItems(personalDetails.jobTitle, compareDetails["job title"]) ? 'green' : 'red'}
	/>
	      </>
      </Modal>
  );
}

export default CompareModal;


