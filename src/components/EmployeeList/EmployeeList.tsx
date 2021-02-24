import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  ListRenderItem,
  View,
  VirtualizedList,
  GestureResponderEvent,
} from "react-native";
import { getEmployeesList } from "../../api/employees";
import { EmployeeResponseModel } from "../../api/responseTypes";
import { EmployeesContext } from "../../providers/EmployeesProvider";
import { EmployeesActionType } from "../../reducers/reducerTypes";
import ListItem from "./ListItem";
import SortableList from "./SortableList";

interface EmployeeListProps {
  isSortable: boolean;
  data: EmployeeResponseModel[] | null;
  onCompare?: (event: GestureResponderEvent, id: number) => void
}

const EmployeeList = ({ isSortable = false, data, onCompare }: EmployeeListProps) => {
  const [selectedItems, setSelectedItems] = useState<Set<number> | null>(null);

  const [sortedData, setSortedData] = useState<EmployeeResponseModel[]>();

  const { dispatch } = useContext(EmployeesContext);


  const _onItemSelect = (id: number) => {
    const newItems = new Set(selectedItems);

    if (selectedItems?.has(id)) {
      newItems.delete(id);
      setSelectedItems(newItems);
    } else if (newItems.size === 5) {
      return null;
    } else {
      newItems.add(id);
      setSelectedItems(newItems);
    }
  };

  const _renderItem = ({ item }: { item: EmployeeResponseModel }) => {
    return (
      <ListItem
        name={item.first_name}
        lastName={item.last_name}
        onPress={() => _onItemSelect(item.id)}
        isSelected={selectedItems?.has(item.id) ?? false}
        department={item.department}
        gender={item.gender}
        jobTitle={item["job title"]}
        city={item.city}
        country={item.country}
        email={item.email}
	onLongPress={onCompare ? (e) => onCompare(e, item.id) :  () => null}
      />
    );
  };

  const _getItem = (
    data: EmployeeResponseModel[],
    index: number
  ): EmployeeResponseModel => {
    return data[index];
  };

  const _mapSortableData = useCallback(() => {
    if (selectedItems && data) {
      let selectedItemsArray = Array.from(selectedItems);
      const _selectedEmployees = selectedItemsArray.map(
        (item) => data[item]
      );
      setSortedData(_selectedEmployees);
    }
  }, [selectedItems, data]);

  const _onSortEnd = (data: EmployeeResponseModel[]) => {
    setSortedData(data);
    dispatch({
      type: EmployeesActionType.SetSelectedEmployees,
      payload: { employeesDetails: data },
    });
  };


  useEffect(() => {
    if (isSortable) _mapSortableData();
  }, [isSortable]);

  return data ? (
    isSortable ? (
      <SortableList
        onSort={({ data }) => _onSortEnd(data)}
        data={(data || sortedData) ?? []}
      />
    ) : (
      <VirtualizedList
        getItem={_getItem}
        data={data}
        initialNumToRender={10}
        extraData={selectedItems}
        renderItem={_renderItem}
        getItemCount={(data) => data.length}
        keyExtractor={(item) => item.id.toString()}
      />
    )
  ) : (
    <ActivityIndicator />
  );
};

export default EmployeeList;
