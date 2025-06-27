// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabStatMech = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Statistical Mechanics Lab Manual"
      pdfLink="https://drive.google.com/file/d/14OtbrwsAyCyBJGfdcWkv8bzzIc1XrTaP/view?usp=sharing" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabStatMech;
