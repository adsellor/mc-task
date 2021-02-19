import React, { useCallback } from "react";
import { View } from "react-native";
import DraggableFlatList, {
    DragEndParams,
    DraggableFlatListProps,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { EmployeeResponseModel } from "../../api/responseTypes";
import ListItem from "./ListItem";

interface SortableListProps {
  data: EmployeeResponseModel[];
  onSort: (params: DragEndParams<EmployeeResponseModel>) => void;
}

const SortableList = ({ data, onSort }: SortableListProps) => {
  const renderItem = useCallback(
    ({
      item,
      index,
      drag,
      isActive,
    }: RenderItemParams<EmployeeResponseModel>) => {
      return (
        <ListItem
          name={item.first_name}
          lastName={item.last_name}
          city={item.city}
          jobTitle={item["job title"]}
          department={item.department}
          gender={item.gender}
          email={item.email}
          isSelected
          country={item.country}
          onLongPress={drag}
        />
      );
    },
    []
  );
  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `draggable-item-${item.id}`}
        onDragEnd={onSort}
      />
    </View>
  );
};

export default SortableList;
