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
    name : "[ Project01 ] Portfolio Site Development",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    description : "포트폴리오 프로젝트 입니다.",
    thumbnail: proj_img01,
    detailimg : proj_img01_detail,
    url : "https://surimpark.vercel.app/",
    github : "https://github.com/hollolo123/portfolio",
    descintro : "프로젝트 작업을 직관적으로 보여주기 위한 개인 포트폴리오 입니다.\n 디자인적 심미성과 기술적 안정성의 균형을 증명하는 공간으로 직관적인 정보 구조를 중심으로 설계하였습니다.",
    descstrategy : [
      { title : "명확한 정의", description : "디자인과 구현의 유기적 연결이라는 명확한 정의와 목적을 가지고 프로젝트 기획 및 설계" },
      { title : "반응형 최적화", description : "모바일/데스크톱 환경 모두에서 사용성이 유지되도록 반응형 그리드 시스템을 적용" },
      { title : "인터랙션 최적화", description : "사용자 행동에 즉각 반응하는 호버 효과와 부드러운 스크롤 애니메이션을 통해 사용자 경험을 향상" },
    ],
    descrole : [
      "프로젝트 기획 및 설계",
      "프로젝트 퍼블리싱 구현",
    ],
    descfeature : [
      "Vue.js 프레임워크를 사용하여 구현",
      "디자인 및 반응형 퍼블리싱을 구현", 
      "모바일/데스크톱 환경 모두에서 사용성이 유지되도록 반응형 그리드 시스템을 적용",
      "사용자 행동에 즉각 반응하는 호버 효과와 부드러운 스크롤 애니메이션 구현",
    ],
    desctech : {
      frontend :["Vue.js", "HTML5", "SCSS"],
      tools : ["Vite", "Vercel", "Github", "Figma"]
    },
  },
  {
    id : 2,
    name : "[ Project02 ] 대전세잔직업전문학교 홈페이지 리뉴얼 (Team)",
    type : "team",
    keyword : ["HTML", "SCSS", "JavaScript", "JQuery", "Vercel"],
    thumbnail: proj_img02,
    detailimg : proj_img02_detail,
    description : "팀 프로젝트로 진행한 리뉴얼 사이트입니다.",
    url: "https://renewal-cezanne.vercel.app/",
    github : "https://github.com/JeongJae1203/renewal-cezanne",
    descintro : "팀 프로젝트로 진행한 대전세잔직업전문학교 홈페이지 리뉴얼 사이트 입니다.\n 메인 레이아웃은 직관적인 정보 구조를 중심으로 설계하였고,\n 모바일/데스크톱 환경 모두에서 사용성이 유지되도록 반응형 그리드 시스템을 적용했습니다.",
    descstrategy : [
      { title : "정보 재설계", description : "교육 정보 우선순위 재정비로 정보 도달 동선 최적화" },
      { title : "UI 시인성", description : "강한 컬러 대비와 포인트 컬러를 활용해 클릭(CTA) 유도 및 레이아웃 명확화" },
      { title : "사용자 중심", description : "복잡한 교육 과정을 직관적으로 파악할 수 있는 가성비 높은 그리드 설계" },
    ],
    descrole : [
      "메인 디자인 및 퍼블리싱 가이드 수립",
      "팀원 간 피드백 루프를 통한 디자인 대안 제시 및 기술적 제약 해결",
      "공통 컴포넌트 설계로 협업 효율성을 높이고 실무 프로세스 이해도 확장",
    ],
    descfeature : [
      "메인 디자인 및 메인 페이지 퍼블리싱", 
      "반응형 디자인 및 퍼블리싱", 
      "공통 디자인 및 퍼블리싱", 
      "Swiper를 사용하여 슬라이더 구현", 
      "Github 저장소를 사용하여 코드 관리", 
      "Figma 디자인 툴을 사용하여 디자인 작업", 
    ],
    desctech : {
      frontend :["Javascipt", "HTML5", "SCSS"],
      tools : ["Parcel Bundler", "Github", "Vercel", "Figma"]
    },
  },
  {
    id : 3,
    name : "[ Project03 ] Vue Compile 대전세잔직업전문학교",
    type : "personal",
    keyword : ["Vue.js", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img03,
    detailimg : proj_img03_detail,
    description : "리뉴얼 사이트를 Vue.js를 사용하여 만들었습니다.",
    url : "https://cezanne-vue.vercel.app/",
    github : "https://github.com/hollolo123/cezanne_vue",
    descintro : "팀 프로젝트로 진행한 대전세잔직업전문학교 리뉴얼 사이트를 Vue.js 프레임워크를 사용하여 컴포넌트 기반 개발 역량과 동적 데이터 핸들링 능력을 향상시켰습니다.",
    descstrategy : [
      { title : "컴포넌트 중심 설계", description : "UI 요소(카드, 내비게이션, 모달 등)를 독립된 컴포넌트로 구조화하여 재사용성과 유지보수 효율 극대화" },
      { title : "프로젝트 구조 단순화", description : "Vue.js 프레임워크의 모듈화 특성을 활용하여 프로젝트 구조를 단순화하고 유지보수 용이성 강화" },
    ],
    descrole : [
      "UI 디자인 기획 및 Vue.js 프레임워크를 이용한 프론트엔드 총괄",
      "디자인 단계에서 구상한 복잡한 레이아웃을 기술적 제약 없이 코드로 재현",
    ],
    descfeature : [
      "Vue.js 프레임워크를 사용하여 구현",
      "Vite 번들러를 사용하여 번들링", 
      "Vercel 호스팅 서비스를 사용하여 배포", 
      "Github 저장소를 사용하여 코드 관리", 
    ],
    desctech : {
      frontend :["Vue.js", "HTML5", "SCSS"],
      tools : ["Parcel Bundler", "Github", "Vercel", "Figma"]
    },
  },
  {
    id : 4,
    name : "[ Project04 ] React 대전빵지도 (Team)",
    type : "team",
    keyword : ["React", "SCSS", "Vite", "Vercel"],
    thumbnail : proj_img04,
    detailimg : proj_img04_detail,
    description : "(진행중) 팀 프로젝트로 React를 활용해 제작한 탐색형 웹 서비스입니다.",
    url : "https://daejeon-bread-map.vercel.app/",
    github : "https://github.com/sk-y01/daejeon_bread_map",
    descintro :
      "(진행중) 대전 지역 빵집 데이터를 기반으로 빵집 탐색이 가능하도록 설계했습니다. \n 본 프로젝트는 GitHub Pages의 정적 환경에서 구동되어 API 호출 속도에 제한이 있을 수 있습니다. \n 쾌적한 확인을 위해 로딩 완료까지 잠시만 기다려 주시면 감사하겠습니다.",
    descstrategy : [
      { title : "정보 시각화", description : "대전 지역 빵집 데이터를 기반으로 빵집 탐색이 가능하도록 설계" },
      { title : "사용자 편의성", description : "현재 위치 기반 검색 기능을 통해 사용자가 원하는 빵집 정보를 2-3번의 클릭으로 도달하도록 동선 최적화" },
      { title : "직관적 UI", description : "빵집 데이터 기반 마커 및 리스트 렌더링으로 사용자가 쉽게 빵집 정보를 확인할 수 있도록 설계" }, 
    ],
    descrole : [
      "지도 API 연동을 고려한 UI 디자인 및 퍼블리싱 구현",
      "팀원 간 피드백 루프를 통한 디자인 대안 제시 및 기술적 제약 해결",
    ],
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
      frontend :["React", "HTML5", "SCSS", "Kakao Maps API"],
      tools : ["Git/Github", "Vercel", "Figma"]
    },
  }, 
]

export default projectData