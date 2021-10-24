import '../styles/About.css'

export default function AboutPage() {
  return (
      <div className="page" id="about">
        <h1>About Illumina</h1>
        <p>
          This project was developed by Reno Raksi, Minyi Lin, Richard Hu, and Zach Shumway for the UW-Madison
          Cheesehacks 2021. After several hours brainstorming what to do, changing ideas, and redoing work,
          even working on two ideas simultaneously, we finally arrived at this masterpiece.
        </p>
        <p>
          Illumina is an image-to-text scanner aimed for processing PNG files from scanned Textbooks so
          students can highlight and perform word-searches on them. The frontend is built in React, and
          the image processing is performed using Tesseract.js all client-side. At the moment, it only
          accepts one PNG input file at a time, but we are interested in developing this further in our
          own time. For future goals, we would like also accept PDF input format, as well as input a
          document with multiple pages.
        </p>
      </div>
  );
}