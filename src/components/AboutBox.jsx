import React from "react";
import cv_view from "../assets/download/view.pdf";
import football from "../assets/images/football.png"
import volleball from "../assets/images/volleyball.png"

const AboutBox = () => {
  return (
    <section className="section" id="About">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>FootBall</h3>
            <p className="">
              ฟุตบอลสมาคม หรือที่เรียกกันทั่วไปว่า ฟุตบอล หรือ ซอกเกอร์
              เป็นกีฬาประเภททีมที่เล่นระหว่างสองทีม โดยแต่ละทีมมีผู้เล่น 11 คน
              โดยใช้ลูกบอล
              เป็นที่ยอมรับอย่างแพร่หลายว่าเป็นกีฬาที่เป็นที่นิยมมากที่สุดในโลก
            </p>
            <div className="image">
              <img src={football} alt="avatar" />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <div className="image">
              <img src={volleball} alt="avatar" />
            </div>
            <p>
              วอลเลย์บอล เป็นกีฬาที่แข่งขันกันระหว่าง 2 ทีม ทีมละ 6 คน
              รวมตัวรับอิสระ 1 คน โดยแบ่งแดนจากกันด้วยตาข่ายสูง
              แข่งทำคะแนนจากลูกบอลที่ตกในเขตแดนของฝ่ายตรงข้ามเพื่อตีลูกวอลเลย์บอลลงแดนศัตรู
            </p>
          </div>
        </div>
        {/** Skills */}
        {/* <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>Boostrap</span>
              <span>Tailwind</span>
              <span>React</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Node.js</span>
              <span>JavaScript</span>
              <span>Java</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySQL</span>
              <span>Post</span>
              <span>MongoDB</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutBox;
