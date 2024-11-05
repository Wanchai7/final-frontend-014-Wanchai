import React from 'react'

const ProjectsBox = () => {
  return (
    <section className="section" id="Projects">
      <div className="top-header">
        <h1>Popular & Sport</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-football"></i>
          <h3>ลูกฟุตบอล</h3>
          <label>ราคาสิรค้า 650 บาท</label>
        </div>
        <div className="project-box">
          <i className="uil uil-basketball"></i>
          <h3>ลูกบาสเก็ตบอล</h3>
          <label>ราคาสินค้า 550 บาท</label>
        </div>
        <div className="project-box">
          <i className="uil uil-tennis-ball"></i>
          <h3>แบตมินตัน</h3>
          <label>ราคาสินค้า 250 บาท</label>
        </div>
        <div className="project-box">
          <i className="uil uil-volleyball"></i>
          <h3>วอลเล่บอล</h3>
          <label>ราคาสินค้า 650 บาท</label>
        </div>
        <div className="project-box">
          <i className="uil uil-muzzle"></i>
          <h3>เซปักตะกร้อ</h3>
          <label>ราคาสินค้า 200 บาท</label>
        </div>
        <div className="project-box">
          <i className="uil uil-futsal"></i>
          <h3>ฟุตซอล</h3>
          <label>ราคาสินค้า 400 บาท</label>
        </div>
      </div>
    </section>
  );
}

export default ProjectsBox