"use client";

import { Phone, User } from "lucide-react";
import React from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export const ContactForm: React.FC = () => {
  return (
    <form className="w-full space-y-4 rounded-lg px-6 py-12 shadow-2xl lg:h-150 lg:w-150 lg:px-12">
      <div className="space-y-2">
        <h4 className="text-custom-green">Contact Nacos Imsu</h4>
        <p className="text-[#44474E]">Complete the form below to contact us.</p>
      </div>
      <div className="space-y-5">
        <div className="w-full space-y-2">
          <Label
            className="text-[14px] text-[#002046]"
            htmlFor="name"
          >
            Full Name
          </Label>
          <div className="relative w-full">
            <User
              className="absolute top-4 left-3 h-4 w-4"
              color="#74777F"
            />
            <Input
              placeholder="John Doe"
              id="name"
              // {...register("name")}
              name="name"
              className="h-12.5 w-full pt-3.5 pr-4 pb-3.75 pl-10"
            />
            {/* {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )} */}
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-2 md:flex-row md:gap-0">
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="phone"
            >
              Phone Number
            </Label>
            <div className="relative">
              <Phone
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                placeholder="(555) 000-0000"
                // {...register("phone")}
                name="phone"
                id="phone"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />{" "}
              {/* {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )} */}
            </div>
          </div>
          <div className="w-full space-y-2 md:w-59.75">
            <Label
              className="text-[14px] text-[#002046]"
              htmlFor="name"
            >
              Email
            </Label>
            <div className="relative">
              <User
                className="absolute top-4 left-3 h-4 w-4"
                color="#74777F"
              />
              <Input
                placeholder="John Doe"
                id="name"
                // {...register("name")}
                name="name"
                className="h-12.5 pt-3.5 pr-4 pb-3.75 pl-10"
              />
              {/* {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )} */}
            </div>
          </div>
        </div>
        <div className="w-full space-y-2">
          <Label
            className="text-[14px] text-[#44474E]"
            htmlFor="help_enquiry"
          >
            HOW CAN WE HELP?
          </Label>
          <Textarea
            placeholder="Briefly describe your message..."
            id="help_enquiry"
            // {...register("help_enquiry")}
            name="help_enquiry"
            className="h-36.5 resize-none px-4 pt-3.5 pb-3.75"
          />
          {/* {errors.help_enquiry && (
            <p className="text-sm text-red-500">
              {errors.help_enquiry.message}
            </p>
          )} */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <Button
          type="submit"
          // disabled={loading}
          className="bg-custom-green w-full cursor-pointer rounded-xl py-8 text-[18px] font-bold text-white lg:w-125.5"
        >
          {/* {loading ? "Scheduling..." : "Schedule Service"}  */} Send Message
        </Button>
      </div>
    </form>
  );
};
