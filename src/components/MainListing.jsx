import React from "react";
import BreadCrumb from "./BreadCrumb";
import AsideFilter from "./AsideFilter";
import ListSection from "./ListSection";

export default function MainListing() {
  return (
    <>
      <BreadCrumb />
      <div className="the_main_sec">
        <AsideFilter />
        <ListSection />
      </div>
    </>
  );
}
