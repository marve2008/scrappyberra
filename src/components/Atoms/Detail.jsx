import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "../ui/select";

const Detail = () => {
  return (
    <div>
      <Card className="min-h-[440px] w-[610px] border-1 rounded-none flex flex-col justify-center items-center">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold relative right-40 text-nowrap h-[30px]">
            COMPUTER USE PLAYGROUND
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-[450px] flex flex-col justify-center items-center gap-2">
          <form className="flex flex-col w-[450px] border-1">
            <Textarea
              placeholder="Message Scrapy ..."
              className="border-0 resize-none rounded-none"
            />
            <div className="p-[7.5px] flex items-center justify-between max-h-[45px]">
              <Select>
                <SelectTrigger className="w-[74px] h-[30px] border-0 text-sm text-[#000000] rounded-none shadow-none">
                  <SelectValue placeholder="CUA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="appe">Apple</SelectItem>
                    <SelectItem value="aple">Apple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="h-[30px] w-[30px] rounded-none bg-[#6d1ccf] hover:bg-[#6d1ccf]"></Button>
            </div>
          </form>
          <div className="flex gap-2">
            <Button className="w-[221px] h-[30px] bg-[#ffffff] flex items-center justify-center border-1 rounded-none text-sm font-medium text-[#000000] hover:bg-[#ffffff]">
              PLAN TRIP
            </Button>
            <Button className="w-[221px] h-[30px] bg-[#ffffff] flex items-center justify-center border-1 rounded-none  text-sm font-medium text-[#000000] hover:bg-[#ffffff]">
              ORDER BURGER
            </Button>
          </div>
          <Button className="w-[450px] h-[30px] border-1 rounded-none bg-[#ffffff] flex justify-center items-center text-[#000000] hover:bg-[#ffffff]">
            RENT APARTMENT
          </Button>
        </CardContent>
        <CardFooter className="text-sm font-light relative top-18">
          <p>
            The playground is powered by our
            <span className="text-[#6d1ccf]"> Act SDK</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Detail;
