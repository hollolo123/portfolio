/* Project Data를 배열 객체로 관리*/
import portfolioThumbnail from '@/assets/images/project/project_img.jpg';
import cezanneThumbnail from '@/assets/images/project/project_img.jpg';

export const projectData = [
  {
    id : 1,
    name : '포트폴리오',
    type : 'personal',
    keyword : ['Vue.js', 'SCSS', 'Vite', 'Vercel'],
    description : '포트폴리오',
    thumbnail: portfolioThumbnail,
    url: 'https://surimpark.vercel.app/',
    github : 'https://github.com/hollolo123/portfolio'
  },
  {
    id : 2,
    name : '대전세잔직업전문학교 리뉴얼',
    type : 'team',
    keyword : ['HTML', 'SCSS', 'JavaScript', 'JQuery', 'Parcel', 'Vercel'],
    thumbnail: cezanneThumbnail,
    description : '팀 프로젝트',
    url: 'https://renewal-cezanne.vercel.app/',
    github : 'https://github.com/JeongJae1203/renewal-cezanne',
  },
  {
    id : 3,
    name : '대전세잔직업전문학교 리뉴얼',
    type : 'personal',
    keyword : ['Vue.js', 'SCSS', 'Vite', 'Vercel'],
    thumbnail: cezanneThumbnail,
    description : 'vue compile',
    url: 'https://renewal-cezanne.vercel.app/',
    github : 'https://github.com/hollolo123/cezanne_vue',
  },
];