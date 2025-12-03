import ErickImage from "../../assets/Erick.jpg";
import ThiagoImage from "../../assets/Thiago.jpg";
import TiagoImage from "../../assets/Tiago.jpg";
import PedroImage from "../../assets/Pedro.jpg";

export interface ITeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
}

const teamMembers: ITeamMember[] = [
  {
    name: "Erick Penazzi",
    role: "Líder de Projeto",
    image: ErickImage, 
    bio: "Especialista em Gestão Ambiental com 8 anos de experiência em projetos de sustentabilidade. Lidera a equipe com foco em soluções práticas e inovadoras.",
    email: "erick.penazzi@iotec.com",
  },
  {
    name: "Thiago Vanucci",
    role: "Desenvolvedor Full Stack",
    image: ThiagoImage, 
    bio: "Desenvolvedor experiente com paixão por tecnologia verde. Responsável pela arquitetura e implementação das soluções tecnológicas do projeto.",
    email: "thiago.vanucci@iotec.com",
  },
  {
    name: "Tiago Perreira Duarte",
    role: "Designer UX/UI",
    image: TiagoImage,
    bio: "Designer criativa especializada em experiência do usuário. Cria interfaces intuitivas que conectam pessoas com soluções ambientais.",
    email: "tiago.duarte@iotec.com",
  },
  {
    name: "Pedro Henrique Araujo",
    role: "Analista de Dados",
    image: PedroImage, 
    bio: "Analista de dados com foco em métricas ambientais. Transforma dados complexos em insights acionáveis para tomada de decisões estratégicas.",
    email: "pedro.araujo@iotec.com",
  },
];

export default teamMembers;