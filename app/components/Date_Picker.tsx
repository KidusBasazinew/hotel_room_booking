import { CalendarIcon } from "@radix-ui/react-icons";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  date: Date | null;
  setStartDate: (date: Date | null) => void;
}

const Date_Picker = ({ date, setStartDate }: DatePickerProps) => {
  return (
    <div className="relative">
      <DatePicker
        selected={date}
        onChange={(newDate) => setStartDate(newDate)}
        minDate={new Date()}
        showPopperArrow={false}
        dateFormat="yyyy/MM/dd"
        className="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent mt-2"
        popperClassName="shadow-lg"
      />
      <CalendarIcon className="absolute right-4 top-5" />
    </div>
  );
};

export default Date_Picker;
