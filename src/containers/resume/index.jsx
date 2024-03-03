import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss'; 

const Resume = () => {
  const resumePath = 'resume.pdf'; 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.setAttribute('download', 'Huyen_Anh_Phan_Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="resume-content">
        <div className="resume-pic">
          <img src="resume.png" style={{width:'430px', height:'610px'}} alt="Resume" />
        </div>
        <button onClick={handleDownload} className="download-button">
          Download
        </button>
      </div>
    </section>
  );
}

export default Resume;
