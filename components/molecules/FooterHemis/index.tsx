import Hemis from "@/components/atoms/Hemis";
import React from "react";
import student from "../../../assets/Student.svg";
import teacher from "../../../assets/Teacher.svg";
import studenth from "../../../assets/student-hover.svg";
import teacherh from "../../../assets/teacher-hover.svg";

const FooterHemis = () => {
  return (
    <div className="flex flex-row gap-3 justify-center">
      <Hemis src={student} name="TALABA" hover={studenth} />
      <Hemis src={teacher} name="O’QITUVCHI" hover={teacherh} />
    </div>
  );
};

export default FooterHemis;
