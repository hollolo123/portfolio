# Portfolio 

# 2025-10-29 수정
- project.js data type 수정 
  - 배열데이터 : v-for 사용 수정 후 문자열 데이터 사용
- ModalPopup.vue 수정
  - router-link -> a 태그 수정 (라우터 정의되지 않음)
  - ModalPopup.vue 전역으로 빼서 사용
    - App에서 import, components 등록, 상태 정의
    - 상태 : modalData, isModalOpen, @click
    - Project.vue -> emit으로 정의

- comment.vue 
  - btn css 수정

  ```scss
  svg {
    display: inline-block;
    width: 0;
    height: 1.6rem;
    vertical-align: middle;
    opacity: 0;
    visibility: hidden;
    transition: .5s;
  }
  ```
 # ModalPopup 
    - 최상위에 있어야 함.
    - 이벤트함수 - props 못넘김 - emit으로 넘김 

# project data 가져오기
1. Project.vue 에서 project.js import
2. @click="changeModalState(project.id)"
    클릭시 project.id 전달 
3. project.js에서 해당 프로젝트 객체 찾아서 emit
```
  changeModalState(id) {
    this.$emit('change-modal-state', projectData[id - 1]);
  }
```
=> projectData[id - 1]로 해당 프로젝트 객체를 찾아 이벤트와 함께 전달 
4. 이벤트가 상위 컴포넌트로 전파 
Main.vue
```
    changeModalState(project) {
      this.$emit('change-modal-state', project) 
    }
```
5. App에서 최종적으로 받음 
```
changeModalState(project) {
  this.modalData = project;
}
```
changeModalState(project)에서 project 매개변수로 받는다.

# 핵심 포인트
App.vue의 project 매개변수는 직접 project.js를 가져오지 않습니다. 대신:
- Project.vue에서 projectData[id - 1]로 찾은 객체를
- $emit으로 전달하고
- 이벤트가 상위로 전파되어
- App.vue의 changeModalState(project) 메서드의 매개변수로 전달됩니다.

즉, 컴포넌트 간 이벤트 전파로 데이터가 전달됩니다.


# 2025-10-30
section 이동 스크립트문 수정  
- logo 클릭 시 #intro section 이동이 sticky css 문제로 제대로 이동하지 않음 
  - sticky 기준은 #main__wrap 안에서 스크롤 되니까, 해당 기준으로 스크롤 위치 지정
  - 해결책 : #main__wrap.offsetTop 지정
  - if(ele) ===> if(sectionId) 기준으로 변경

```
const main = document.querySelector('#main__wrap');
window.scrollTo({
  top: main.offsetTop,
  behavior : 'smooth'
})
```

=> switch로 바꿔보기 예정 

























- 데이터 가공할 경우
```
methods : {
  changePopState(id) {
      this.$emit('change-state', getData);
    },
  getId(id) {
    return id
  }
}
computed : {
  getData() {
    return this.projectData.filter(project => project.id === id)
  }
}
```



# Intro :: typing 
```
setup() {
      let displayText = ref('');
      onMounted(() => {
        typeText();
      })

      const typeText = () => {
        let text = 'FRONTEND DEVELOPER & UI/UX DESIGNER';
        let index = 0;
        const interval = setInterval(() => {
          displayText.value = text.slice(0, index);
          index++;
          if (index > text.length) {
            clearInterval(interval);
          }
        }, 100);
      }
      return {
        displayText
      }
    }

```

# 섹션별 헤더 스타일 변경
```
mehods : {
  // 섹션별 헤더 스타일 변경
  handleSectionChange() {
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // 헤더 높이 고려
    
    // 모든 클래스 제거
    header.classList.remove('light', 'dark');
    
    // 현재 스크롤 위치에 해당하는 섹션 찾기
    let currentSection = null;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = section;
      }
    });
    
    // 현재 섹션에 따라 헤더 클래스 추가
    if (currentSection) {
      if (currentSection.classList.contains('dark')) {
        header.classList.add('light');
      } else if (currentSection.classList.contains('light')) {
        header.classList.add('dark');
      }
    }
  }
},
mounted() {
  window.addEventListener('scroll', this.handleSectionChange);
},
/* 이벤트 제거 */
beforeUnmount() {
  window.removeEventListener('scroll', this.handleSectionChange);
}

```