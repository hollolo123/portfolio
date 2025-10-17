import proj_img01 from '@/assets/images/project/project_img.jpg';
import proj_img02 from '@/assets/images/project/project_img.jpg';
import proj_img03 from '@/assets/images/project/project_img.jpg';


const projectData = [
  {
    id : 1,
    name : "포트폴리오",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    description : "포트폴리오 사이트 입니다. Vue.js를 사용하여 만들었습니다.",
    thumbnail: proj_img01,
    url : "https://surimpark.vercel.app/",
    github : "https://github.com/hollolo123/portfolio"
  },
  {
    id : 2,
    name : "대전세잔직업전문학교 리뉴얼",
    type : "team",
    keyword : ["HTML", "SCSS", "JavaScript", "JQuery", "Vercel"],
    thumbnail: proj_img02,
    description : "팀 프로젝트로 진행한 리뉴얼 사이트입니다.",
    url: "https://renewal-cezanne.vercel.app/",
    github : "https://github.com/JeongJae1203/renewal-cezanne"
  },
  {
    id : 3,
    name : "대전세잔직업전문학교 리뉴얼 <Vue Compile>",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img03,
    description : "리뉴얼 사이트를 개인프로젝트로 Vue.js를 사용하여 만들었습니다.",
    url : "https://cezanne-vue.vercel.app/",
    github : "https://github.com/hollolo123/cezanne_vue"
  }
]

export default projectData