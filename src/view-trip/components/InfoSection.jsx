import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { IoIosSend } from "react-icons/io";
// import { GetPlaceDetail } from "@/services/GlobleApi";
const InfoSection = ({ trip }) => {

  // useEffect(()=>{
  //   trip&&GetPlaceImage()
  // },[trip])

  // const GetPlaceImage = async()=>{
  //   const data = {
  //     textQuery:trip?.userSelection?.location
  //   }
  //   const result = await GetPlaceDetail().then((resp)=>console.log(resp.data))
  //   console.log("DAta Place",result);
    
  // }
  return (
    <div className="w-full">
      <figure>
        <img
          src="/goku-dragon-ball-guru.jpg"
          className="h-[300px] w-full rounded-xl object-cover"
          alt="Main Image"
        />
      </figure>
      <div className="flex justify-between items-center">
      <div className="flex text-start flex-col gap-2 my-5">
        <h2 className="font-bold text-xl">{trip?.userSelection?.location}</h2>
        <div className="gap-2 flex mt-3">
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
          📅{trip?.userSelection?.days} Days
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
          💰Trip Budget {trip?.userSelection?.budget}
          </h2>
          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-base">
          👨No. Of Traveler {trip?.userSelection?.traveler}
          </h2>
        </div>
      </div>
      <Button><IoIosSend /></Button>
      </div>
    </div>
  );
};

export default InfoSection;
