// Data type for certificates
export interface Certificate {
  title: string;
  description: string;
  link: string;
  img: string;
}

// Data certificates
export const certificates: Certificate[] = [
  {
    title: "HackerRank - Problem Solving (Basic)",
    description:
      "It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).",
    link: "https://www.hackerrank.com/certificates/48b3dad656d1",
    img: "/certificates/hackerrank-problem-solving-basic.jpg",
  },
  {
    title: "Dicoding - Pemrograman Python Dasar",
    description: "Dicoding - Pemrograman Python Dasar Certificate",
    link: "https://www.dicoding.com/certificates/81P2VE47QPOY",
    img: "/certificates/dicoding-pemrograman-python-dasar.jpg",
  },
  { title: "MSIB Internship Certificate",
    description: "Certificate for completing the MSIB internship program.",
    link: "#",
    img: "/certificates/msib-internship-certificate.jpeg",
  },{
    title: " Gemastik 2023 - Finalist Certificate",
    description: "Certificate for being a finalist Software Engineering category in Gemastik 2023.",
    link: "#",
    img: "/certificates/gemastik-2023-finalist-certificate.jpg",
  }
];