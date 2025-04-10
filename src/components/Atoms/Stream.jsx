import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../ui/select";
import { Button } from "../ui/button";

const Stream = () => {
  return (
    <div className="h-[46px] mx-4  p-2 border-1 flex justify-between items-center gap-2">
      <a
        href=""
        className="h-[30px] w-[95px] text-center border-1 text-sm text-[#98969c] flex items-center justify-center"
      >
        STREAM
      </a>
      <Select>
        <SelectTrigger className="w-[202px] h-[37px] border-0 text-sm text-[#000000] rounded-none shadow-none border-0">
          <SelectValue placeholder="NEW UBUNTU INSTANCE" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="pple">Apple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="h-[30px] w-[85px] bg-[#6D1CCF] hover:bg-[#6d1ccf] rounded-none whitespace-nowrap text-sm font-medium ">
        START
      </Button>
    </div>
  );
};

export default Stream;
