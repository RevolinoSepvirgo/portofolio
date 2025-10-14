import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/flutter.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/laravel.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "larevel",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },

  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },

  {
    id: 13,
    gambar: Tools13,
    nama: "Flutter",
    ket: "Framework",
    dad: "1200",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },

  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },

  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },

  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import Proyek1 from "/assets/proyek/Project_POS.png";
import Proyek2 from "/assets/proyek/Project_Sikerma.png";
import Proyek3 from "/assets/proyek/Project_School.png";
import Proyek4 from "/assets/proyek/Project_hospital.png";
import Proyek5 from "/assets/proyek/Project_Notes.png";


export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "POS (Point of sale)- Manajemen cafe ",
    subtitle: "CafePOS is a web-based Point of Sale system designed to help manage café operations....",
    fullDescription: "CafePOS is a web-based Point of Sale system designed to help manage café operations efficiently.The application includes features such as menu management, table management, cashier system, income tracking, and monthly sales charts.With this system, admins and cashiers can easily manage menus, handle orders, record transactions, and monitor income in real time through an interactive dashboard and monthly reports..",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/RevoLinoSepvirgo",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "SIKERMA — Partnership Information System of Politeknik Negeri Padang",
    subtitle: "SIKERMA is a web-based information system developed...",
    fullDescription: "SIKERMA is a web-based information system developed to manage and monitor partnerships between Politeknik Negeri Padang and external partners such as companies, government agencies, and educational institutions.The system allows users to record, update, report, and submit new partnership proposals (MoU/MoA) efficiently and transparently.Through SIKERMA, campus administrators can easily add partner data, create new collaboration requests, update agreement status, and view partnership statistics and reports in an integrated dashboard..",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/RevolinoSepvirgo",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "School Management Website",
    subtitle: "The School Management Website is a web-based system designed to help schools...",
    fullDescription: "The School Management Website is a web-based system designed to help schools manage data and daily activities efficiently.It includes features for teacher, staff, and student management, as well as attendance tracking, activity records, and reporting.Through this system, administrators can easily organize school data, monitor attendance, and manage school events or activities in one integrated platform..",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/RevolinoSepvirgo",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: " Hospital finder  - Mobile App",
    subtitle: "Hospital Finder application. This application helps...",
    fullDescription: "Hospital Finder application. This application helps people in Padang find hospital information easily. I created this application using the Dart programming language with Flutter, using Visual Studio Code as the main development tool. Google Maps API to show the location of the hospital.The design is simple and clean. This application works on Android and iOS.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/RevolinoSepvirgo",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Notes App - Mobile App",
    subtitle: "Mobile Notes App is a mobile-based note-taking application I developed...",
    fullDescription: "Mobile Notes App is a mobile-based note-taking application I developed to help users quickly and efficiently record ideas, agendas, and daily tasks in an organized way. The app features full CRUD functionality (Create, Read, Update, Delete) and comes with a simple, intuitive, and responsive user interface.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/RevolinoSepvirgo",
    dad: "500",
  },

];
