# Portfolio 

# 2025-10-29 수정
- project.js data type 수정 
  - 배열데이터 : v-for 사용 수정 후 문자열 데이터 사용
- ModalPopup.vue 수정
  - router-link -> a 태그 수정 (라우터 정의되지 않음)
  - ModalPopup.vue 전역으로 빼서 사용
    - App에서 import, components 등록, 상태 정의
    - 상태 : modalData, popState, @click
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