"use client";

import Breadcrumb from "@/components/myComponents/layout/BreadCrumb";

import React, { useState, useEffect, useMemo } from "react";
import { SetLoading } from "@/redux/LoadersSlice";
import { useDispatch } from "react-redux";
import { getCatchErrorMessage } from "@/helpers/ErrorMessgaes";
import { message } from "antd";
import axios from "axios";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import PackageCard from "../_components/packageCard";

// export const metadata = {
//   title: "TripRex - Tour & Travel Agency  NextJs Template",
//   description:
//     "TripRex is a NextJs Template for Tour and Travel Agency purpose",
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };

const page = () => {
  const dispatch = useDispatch();
  const [packagess, setPackages] = useState([]);

  const searchParams = useSearchParams();

  const person = searchParams.get("adults");
  const child = searchParams.get("childs");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const type = searchParams.get("type");

  const getPackages = async () => {
    try {
      dispatch(SetLoading(true));
      // location=${location && location}&&title=${title && title}
      const response = await axios.get(
        `/api/admin/packages?${person && "adult"}=${person}
           &&${from && "from"}=${from}&&${to && "to"}=${to}&&${child && "child"}=${child}&&${type && "type"}=${type}`
      );
      setPackages(response.data.data);
      console.log("REsponse-->", response.data.data);
    } catch (error) {
      message.error(getCatchErrorMessage(error));
    } finally {
      dispatch(SetLoading(false));
    }
  };
  useEffect(() => {
    getPackages();
  }, []);

  return (
    <>
      <Breadcrumb pagename="العروض" pagetitle="العروض" />

   

      <div className="transport-page pt-120 mb-120">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-xl-10  mx-auto  order-lg-2 order-1">
              <div className="row g-4 mb-70">
                {packagess?.length > 0 &&
                  packagess?.map((trans, index) => {
                    return <PackageCard index={index} trans={trans} />;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;