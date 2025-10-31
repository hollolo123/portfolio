import proj_img01 from '@/assets/images/project/project_img1.jpg';
import proj_img02 from '@/assets/images/project/project_img2.jpg';
import proj_img03 from '@/assets/images/project/project_img3.jpg';


const projectData = [
  {
    id : 1,
    name : "포트폴리오",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    description : "포트폴리오 프로젝트 입니다.",
    thumbnail: proj_img01,
    url : "https://surimpark.vercel.app/",
    github : "https://github.com/hollolo123/portfolio",
    descintro : "Vue.js를 사용하여 구현한 포트폴리오 프로젝트 입니다.",
    descfeature : [
      "Vue.js 프레임워크를 사용하여 구현",
      "디자인 및 반응형 퍼블리싱을 구현", 
      "Vite 번들러를 사용하여 번들링", 
      "Vercel 호스팅 서비스를 사용하여 배포", 
      "Github 저장소를 사용하여 코드 관리", 
      "Pigma 디자인 툴을 사용하여 디자인 작업", 
    ],
    desctech : {
      frontend :["Vue.js", "HTML5", "SCSS"],
      tools : ["Vite", "Vercel", "Github", "Pigma"]
    },
  },
  {
    id : 2,
    name : "[Renewal] 대전세잔직업전문학교",
    type : "team",
    keyword : ["HTML", "SCSS", "JavaScript", "JQuery", "Vercel"],
    thumbnail: proj_img02,
    description : "팀 프로젝트로 진행한 리뉴얼 사이트입니다.",
    url: "https://renewal-cezanne.vercel.app/",
    github : "https://github.com/JeongJae1203/renewal-cezanne",
    descintro : "팀 프로젝트로 대전세잔직업전문학교 홈페이지 리뉴얼을 진행했습니다. \n HTML과 CSS를 사용하여 반응형 웹 사이트를 구현했습니다. ",
    descfeature : [
      "메인 디자인 및 메인페이지 퍼블리싱", 
      "반응형 디자인 및 퍼블리싱", 
      "공통 디자인 및 퍼블리싱", 
      "Swiper를 사용하여 슬라이더 구현", 
      "Github 저장소를 사용하여 코드 관리", 
      "Pigma 디자인 툴을 사용하여 디자인 작업", 
    ],
    desctech : {
      frontend :["Javascipt", "HTML5", "SCSS"],
      tools : ["Parcel Bundler", "Github", "Vercel", "Figma"]
    },
  },
  {
    id : 3,
    name : "[Vue Compile] 대전세잔직업전문학교",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img03,
    description : "리뉴얼 사이트를 Vue.js를 사용하여 만들었습니다.",
    url : "https://cezanne-vue.vercel.app/",
    github : "https://github.com/hollolo123/cezanne_vue",
    descintro : "팀프로젝트로 진행한 대전세잔직업전문학교 리뉴얼 프로젝트를 Vue.js 프레임워크를 사용하여 컴파일 했습니다",
    descfeature : [
      "Vue.js 프레임워크를 사용하여 구현",
      "Vite 번들러를 사용하여 번들링", 
      "Vercel 호스팅 서비스를 사용하여 배포", 
      "Github 저장소를 사용하여 코드 관리", 
    ],
    desctech : {
      frontend :["Vue.js", "HTML5", "SCSS"],
      tools : ["Parcel Bundler", "Github", "Vercel", "Pigma"]
    },
  }
]

export default projectData