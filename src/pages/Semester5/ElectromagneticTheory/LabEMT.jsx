// src/pages/Semester1/MathPhysics1/Lab.jsx
import DownloadCard from "../../../components/DownloadCard";

const LabEMT = ({dark}) => {
  return (
    <DownloadCard
      chapterTitle="Electromagnetic Theory Lab Manual"
      pdfLink="https://drive.google.com/file/d/149JiJ2FZcKrb8N9rltXyyfDCcfuXh-L_/view?usp=sharing" // Use actual link from Django later
      dark={dark}
    />
  );
};

export default LabEMT;
