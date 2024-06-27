import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import jsPDF from "jspdf";
// import QRCode from "qrcode.react";
import QRCode from "react-qr-code";
import QRCode1 from "qrcode.react";
import { toPng, htmlToImage } from "html-to-image";
import axios from "axios";
import logo from "./img/logo_ExternHub.png";
import TopBanner from "./img/top-banner.png";
import BottomBanner from "./img/bottom-banner.png";
import Msme from "./img/msme.png";
import CompanyLogo from "./img/logo_ExternHu3.png";
import Earth from "./img/earth.png";
import Sig from "./img/sign.png";
import Mail from "./img/mail.png";

function arrayBufferToBase64(buffer) {
  const binary = [];
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary.push(String.fromCharCode(bytes[i]));
  }
  return btoa(binary.join(""));
}

const qrCodeStyle = {
  width: "180px",
  height: "180px",
};

const generatePDF = async (
  currDate,
  cId,
  fName,
  cName,
  cDate,
  qrCodeDataUrl
) => {
  return new Promise((resolve, reject) => {
    try {
      let pdfBase64String;

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compressPdf: true,
      });

      doc.setFont("helvetica", "bold");
      const logoImg = new Image();
      logoImg.src = logo;

      // Add text to the PDF
      const companyName = "ExternHub Solutions";
      // const courseName = "Web Development";
      // const studentName = "Manish Singh";
      // const currDate = "12/05/24";
      // const courseDate = "15/05/24 - 15/07/27";
      // const cId = "568574";

      // 210mm × 297mm
      // Wait for the image to load before generating the PDF
      logoImg.onload = async function () {
        // doc.setFont("helvetica", "normal");
        const bannerX = doc.internal.pageSize.width;
        const bannerY = doc.internal.pageSize.height;

        // image setup
        doc.addImage(logoImg, "PNG", 10, 10, 20, 20); // Adjust position and size as needed
        doc.addImage(TopBanner, "PNG", 0, 0, 80, 40);
        doc.addImage(BottomBanner, "PNG", bannerX - 80, bannerY - 40, 80, 40);
        doc.addImage(Msme, "PNG", bannerX - 60, bannerY - 80, 40, 40);
        doc.addImage(CompanyLogo, "PNG", 110, 5, 17, 17);
        doc.addImage(Sig, "PNG", 10, bannerY - 70, 50, 15);
        doc.addImage(Earth, "PNG", 10, bannerY - 30, 8, 8);
        doc.addImage(Mail, "PNG", 10, bannerY - 20, 8, 8);
        doc.addImage(qrCodeDataUrl, "PNG", 180, 270, 20, 20);

        // draw line
        doc.setLineWidth(0.4);
        doc.setDrawColor(0);
        doc.line(30, 48, 170, 48);
        doc.line(10, bannerY - 55, 60, bannerY - 55);

        const textWidth = doc.getTextWidth(`CID : 568574`);
        const xPosition = doc.internal.pageSize.width - 10 - textWidth;

        //content
        //         const bodyContent = `
        // We would like to congratulate you on being selected for the
        // internship position with ${"                                   "}. We at Externhub are excited that
        // you will join our team.

        // The duration of the internship will be 45 days, starting from
        // This internship is an educational opportunity for you; hence, the primary focus
        // is on learning,developing new skills, and gaining hands-on knowledge. We believe
        // that you will perform all your tasks/projects.

        // As an intern, we expect you to perform all assigned tasks to the best of your ability
        // and follow any lawful and reasonable instructions provided to you.

        // We are confident that this internship will be a valuable experience for you.
        // We look forward to working with you and helping you achieve your career goals.

        // Best of luck!

        // Thank you!
        // `;

        const bodyContent = `
We would like to congratulate you on being selected for the
internship position with                                    . We at Externhub are excited that
you will join our team.

The duration of the internship will be 45 days (                                          ). During
this time, our primary focus is on learning, developing new skills, and gain hands-on
experience.

We believe that you will perform all your tasks/ projects. We are confident in your
ability to successfully complete all assigned tasks and projects.

We understand that learning is a continuous journey, and we are dedicated to
providing you with the tools and support you need to thirve, During your internship,
you will be immersed in a hands-on learning environment where you can apply
theoritical knowledge to real-world challenges. We will equip you with the resources
and guidance necessary to develop your skills, expand your professional network,
and gain valuable insights into the tech industry.

We are confident that this internship will be a valuable experience for you. We look
forward to working with you and helping you achieve your career goals.

Thank You!
        `;

        // Add text after the logo
        const words = [
          {
            text: "ExternHub",
            x: 130,
            y: 15,
            fontSize: 35,
            color: [74, 153, 229],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: "Solutions",
            x: 145,
            y: 22,
            fontSize: 22,
            color: [74, 153, 229],
            fontWeight: "bold",
            fontFamily: "normal",
          },
          {
            text: "INTERNSHIP OFFER LETTER",
            x: 50,
            y: 45,
            fontSize: 20,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: `Date : ${currDate}`,
            x: 10,
            y: 55,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: `CID : ${cId}`,
            x: xPosition,
            y: 55,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: `Dear,`,
            x: 10,
            y: 70,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "",
            fontFamily: "helvetica",
          },
          {
            text: fName,
            x: 10,
            y: 78,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: bodyContent,
            x: 10,
            y: 80,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "",
            fontFamily: "helvetica",
          },
          {
            text: cName,
            x: 147,
            y: 86.5,
            fontSize: 14,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: companyName,
            x: 65,
            y: 93,
            fontSize: 14,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: cDate,
            x: 117,
            y: 112.5,
            fontSize: 14,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: "CEO",
            x: 20,
            y: bannerY - 50,
            fontSize: 12,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: "www.externHubSolutions.in",
            x: 20,
            y: bannerY - 23,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },
          {
            text: "hr@externhubsolutions.in",
            x: 20,
            y: bannerY - 14,
            fontSize: 16,
            color: [0, 0, 0],
            fontWeight: "bold",
            fontFamily: "helvetica",
          },

          // Add more words with their respective properties
        ];

        // Loop through each word and add it to the PDF with its properties
        words.forEach((word) => {
          doc.setFontSize(word.fontSize); // Set font size
          doc.setTextColor.apply(doc, word.color); // Set text color
          // doc.setFont("helvetica", "bold");
          doc.setFont(word.fontFamily, word.fontWeight);

          doc.text(word.x, word.y, word.text); // Add the word to the PDF
        });

        // Save the PDF
        doc.save("./offer_letter.pdf");
        // const pdfBase64String = doc.output("blob");
        // console.log("PDF Data URI:", pdfBase64String);
        const pdfArrayBuffer = await doc.output("arraybuffer");
        pdfBase64String = await arrayBufferToBase64(pdfArrayBuffer);
        // console.log(pdfBase64String);
        // setPdfUrl(pdfBase64String);
        resolve(pdfBase64String);
      };

      logoImg.onerror = (error) => {
        reject(error);
      };
    } catch (error) {
      console.error("Error generating PDF:", error);
      reject(error);
    }
  });
};

// const sendPDF = async () => {
//   finally {
//   }
// };

function generateQRCodeDataURL(data) {
  return new Promise((resolve, reject) => {
    try {
      const qrCodeComponent = <QRCode value={data} />;
      const tempDiv = document.createElement("div");
      document.body.appendChild(tempDiv);
      ReactDOM.render(qrCodeComponent, tempDiv, async () => {
        try {
          const imageDataUrl = await toPng(tempDiv);
          document.body.removeChild(tempDiv);
          resolve(imageDataUrl);
        } catch (error) {
          document.body.removeChild(tempDiv);
          reject(error);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}

const pdfWork = async (data) => {
  const siteName = "https://externhubsolutions.in";
  try {
    const qrCodeDataURL = await generateQRCodeDataURL(siteName);
    const base64String = await generatePDF(
      data.currDate,
      data.cId,
      data.fName,
      data.cName,
      data.cDate,
      qrCodeDataURL
    );
    return base64String;
  } catch (error) {
    console.error("Error generating QR code:", error);
  }
};

export default pdfWork;
