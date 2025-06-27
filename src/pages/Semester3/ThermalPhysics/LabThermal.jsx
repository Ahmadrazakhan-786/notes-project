// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabThermal = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Thermal Physics Lab Manual"
      pdfLink="https://drive.google.com/file/d/1RWDVkD9FCNXbX-0jvxwugGvCpYUwrvtu/view?usp=sharing" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabThermal;
