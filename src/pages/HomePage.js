import '../styles/HomePage.css';
import Tesseract from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';

function image_upload_png() {
  const input = document.getElementById("image-input");
  const label = document.getElementById("image-input-label");
  const canvas = document.getElementById("image-canvas");
  const output = document.getElementById("image-output");
  const path = input.value;
  const file = input.files[0];

  label.innerText = path;

  Tesseract.recognize(
      file,
      'eng',
      {logger: m => console.log(m)}
  ).then(({data: {text}}) => {
    output.innerText = text;
  });
}

function image_upload_pdf() {
  const input = document.getElementById("image-input");
  const label = document.getElementById("image-input-label");
  const canvas = document.getElementById("image-canvas");
  const output = document.getElementById("image-output");
  const path = input.value;
  const file = input.files[0];
  const reader = new FileReader();
  const context = canvas.getContext('2d');

  label.innerText = path;

  reader.onload = function () {
    const array = new Uint8Array(this.result);
    const loadingTask = pdfjsLib.getDocument(array);

    loadingTask.promise.then(pdf => {
      pdf.getPage(1).then(function (page) {
        const scale = 1.5;
        const viewport = page.getViewport({scale: scale});

        // Prepare canvas using PDF page dimensions
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };

        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
          console.log('Page rendered');
        });
      })
    }, function (reason) {
      console.error(reason);
    });

    Tesseract.recognize(
        canvas,
        'eng',
        {logger: m => console.log(m)}
    ).then(({data: {text}}) => {
      output.innerText = text;
    });
  }
}

export default function HomePage() {

  return (
      <div className="page" id="home">
        <h1>Illumina</h1>
        <h2>Textbook image-to-text Reader</h2>
        <div className="scanner">
          <div className="image-input-container">
            <label id="image-input-label">Click here to search or drop an image to start</label>
            <input type="file" id="image-input" accept="application/png" onChange={image_upload_png}/>
            <canvas id="image-canvas"/>
          </div>
          <div id="image-output" className="image-output-container">

          </div>
        </div>
      </div>
  );
}