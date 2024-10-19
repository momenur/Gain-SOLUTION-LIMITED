import DatePicker from "../form_component/DatePicker";
import SearchFiled from "../form_component/SearchFiled";
import Select from "../form_component/Select";

const TableFilter = () => {
  return (
    <div className="flex gap-4">
      <SearchFiled />
      <DatePicker />
      <Select />
      <Select />
    </div>
  );
};

export default TableFilter;
