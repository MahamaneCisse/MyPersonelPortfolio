import { web, logo, maintenance, mobile, programing } from "../assets/assets";

//const htmlobj = useGLTF("./assets/html.glb");
// const cssobj = useGLTF("./css.glb");
// const jsobj = useGLTF("./javascript.glb");
// const reactobj = useGLTF("./react.glb");
// const tailwindobj = useGLTF("./tailwind.glb");
// const typescriptobj = useGLTF("./typescript.glb");
// const nodeobj = useGLTF("./node.glb");
// const cobj = useGLTF("./c.glb");
// const sqlobj = useGLTF("./sql.glb");

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contacts",
    title: "Contacts",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    content:
      "Le métier de développeur web consiste à créer des applications et des sites web en utilisant des langages de programmation, des frameworks et des technologies adaptés au développement web",
  },
  {
    title: "React Native Developer",
    icon: mobile,
    content:
      "Le métier de développeur React Native se concentre sur la création d'applications mobiles en utilisant le framework React Native. React Native est une bibliothèque JavaScript open-source développée par Facebook, qui permet de construire des applications mobiles multiplateformes en utilisant une base de code commune pour iOS et Android.",
  },
  {
    title: "website maintenance",
    icon: maintenance,
    content:
      "Le métier de maintenance de site web, souvent appelé 'webmaster' ou 'spécialiste de la maintenance web', implique la gestion et la mise à jour régulières d'un site web afin de garantir son bon fonctionnement, sa sécurité, et de répondre aux besoins changeants de l'entreprise ou de l'utilisateur.",
  },
  {
    title: "Programming",
    icon: programing,
    content:
      "Le métier de programmeur consiste à écrire des lignes de code informatique pour créer, développer, et maintenir des logiciels, des applications ou des systèmes informatiques. Les programmeurs peuvent travailler dans une variété de domaines, y compris le développement web, le développement d'applications mobiles, le développement logiciel, l'informatique embarquée, etc",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: logo,
  },
  {
    name: "CSS 3",
    icon: logo,
  },
  {
    name: "JavaScript",
    icon: logo,
  },
  {
    name: "TypeScript",
    icon: logo,
  },
  {
    name: "React JS",
    icon: logo,
  },
  {
    name: "Tailwind CSS",
    icon: logo,
  },
  {
    name: "Bootstrap",
    icon: logo,
  },
  {
    name: "Node JS",
    icon: logo,
  },
  {
    name: "My SQL",
    icon: logo,
  },
  {
    name: "Three JS",
    icon: logo,
  },
  {
    name: "git",
    icon: logo,
  },
  {
    name: "C",
    icon: logo,
  },
  {
    name: "Pyton",
    icon: logo,
  },
];
export { services, logo, technologies };
