import proj_img01 from '@/assets/images/project/project_img1.jpg';
import proj_img02 from '@/assets/images/project/project_img2.jpg';
import proj_img03 from '@/assets/images/project/project_img3.jpg';
import proj_img04 from '@/assets/images/project/project_img4.jpg';
import proj_img01_detail from '@/assets/images/project/project_img1_detail.jpg';
import proj_img02_detail from '@/assets/images/project/project_img2_detail.jpg';
import proj_img03_detail from '@/assets/images/project/project_img3_detail.jpg';
import proj_img04_detail from '@/assets/images/project/project_img4_detail.jpg';


const projectData = [
  {
    id : 1,
    name : "포트폴리오",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    description : "포트폴리오 프로젝트 입니다.",
    thumbnail: proj_img01,
    detailimg : proj_img01_detail,
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
    detailimg : proj_img02_detail,
    description : "팀 프로젝트로 진행한 리뉴얼 사이트입니다.",
    url: "https://renewal-cezanne.vercel.app/",
    github : "https://github.com/JeongJae1203/renewal-cezanne",
    descintro : "팀 프로젝트로 대전세잔직업전문학교 홈페이지 리뉴얼을 진행했습니다. \n HTML과 CSS를 사용하여 반응형 웹 사이트를 구현했습니다. ",
    descfeature : [
      "메인 디자인 및 메인 페이지 퍼블리싱", 
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
    detailimg : proj_img03_detail,
    description : "리뉴얼 사이트를 Vue.js를 사용하여 만들었습니다.",
    url : "https://cezanne-vue.vercel.app/",
    github : "https://github.com/hollolo123/cezanne_vue",
    descintro : "팀 프로젝트로 진행한 대전세잔직업전문학교 리뉴얼 사이트를 Vue.js 프레임워크를 사용하여 컴파일 했습니다",
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
  },
  {
    id : 4,
    name : "[React] 대전빵지도",
    type : "team",
    keyword : ["React", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img04,
    detailimg : proj_img04_detail,
    description : "(진행중) 팀 프로젝트로 React를 활용해 제작한 탐색형 웹 서비스입니다.",
    url : "https://daejeon-bread-map.vercel.app/",
    github : "https://github.com/sk-y01/daejeon_bread_map",
    descintro :
      "(진행중) 대전 지역 빵집 데이터를 기반으로 빵집 탐색이 가능하도록 설계했습니다. \n 본 프로젝트는 GitHub Pages의 정적 환경에서 구동되어 API 호출 속도에 제한이 있을 수 있습니다. \n 쾌적한 확인을 위해 로딩 완료까지 잠시만 기다려 주시면 감사하겠습니다.",
    descfeature : [
      "지도 맵 중심 UI 디자인 및 퍼블리싱",
      "카카오 지도 API를 활용한 지도 맵 구현 ",
      "빵집 데이터 기반 마커 및 리스트 렌더링",
      "검색 및 검색 초기화 기능 구현",
      "마커·리스트 클릭 시 상세 화면 연동",
      "리스트 보기 / 숨기기 토글 기능 구현",
      "찜 기능 클릭 시 토스트 메시지 컴포넌트 구현", 
    ],
    desctech : {
      frontend :["React", "HTML5", "SCSS"],
      tools : ["Parcel Bundler", "Github", "Vercel", "Pigma"]
    },
  }, 
]

export default projectData