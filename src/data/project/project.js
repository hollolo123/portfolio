import proj_img01 from '@/assets/images/project/project_img1.jpg';
import proj_img02 from '@/assets/images/project/project_img2.jpg';
import proj_img03 from '@/assets/images/project/project_img3.jpg';


const projectData = [
  {
    id : 1,
    name : "포트폴리오",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    description : "포트폴리오 사이트 입니다.",
    thumbnail: proj_img01,
    url : "https://surimpark.vercel.app/",
    github : "https://github.com/hollolo123/portfolio",
    descintro : "기획부터 디자인 총괄 작업 하였습니다.",
    descfeature : "주요 기능 및 특징 기재",
    desctech : "Vue.js, HTML5, SCSS",
    file : "file",
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
      "1. 메인디자인", "2. 서브디자인", "3. 메뉴바", "4. 푸터"
    ],
    desctech : {
      frontend :"Javascipt, HTML5, SCSS",
      tools : "Parcel Bundler, Github, Vercel, Pigma"
    },
    file : "file",
  },
  {
    id : 3,
    name : "[Vue Compile] 대전세잔직업전문학교",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img03,
    description : "리뉴얼 사이트를 Vue.js를 사용하여 만들었습니다.",
    url : "https://cezanne-vue.vercel.app/",
    github : "https://github.com/hollolo123/cezanne_vue"
  }
]

export default projectData