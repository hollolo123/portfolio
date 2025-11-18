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


# [2025-11-18] Experience 섹션이 뷰포트에 들어올 때 exp__box가 순차적으로 나타나도록 구현

1. Intersection Observer로 섹션 감지
Experience 섹션에 ref="experienceSection" 추가
섹션의 20%가 뷰포트에 보일 때 트리거
한 번만 실행되도록 observer 자동 해제

2. 순차적 애니메이션
섹션이 뷰포트에 들어오면 3개의 박스가 순차적으로 나타남
각 박스마다 200ms씩 지연 (첫 번째: 0ms, 두 번째: 200ms, 세 번째: 400ms)

3. CSS 애니메이션
초기 상태: opacity: 0, translateY(30px)
fade-in 클래스 추가 시 부드럽게 나타남

- 동작 방식
  1. 페이지 로드 시 Experience 섹션을 Intersection Observer로 관찰
  2. 섹션이 뷰포트에 들어오면 (20% 보일 때) 트리거
  3. 각 박스에 순차적으로 fade-in 클래스 추가
  4. CSS transition으로 부드럽게 나타남
  5. 스크롤 시 Experience 섹션이 뷰포트에 들어오면 박스들이 순차적으로 나타납니다.


# Intersection Observer API
  - 만들어진 이유 : 기존의 scroll 이벤트와 가시성 관찰에 사용되는 getBoundingClientRect의 문제점 때문
  - scroll 이벤트 
    - 스크롤시 짧은 시간 내에 수 백, 수 천의 이벤트가 동기적으로 실행될 수 있다.
    - 페이지 내에 각 요소가 각기의 목적(광고, 레이지 로딩, 무한 스크롤 등)의 이유로 scroll 이벤트를 리스닝
      이에 상응하는 콜백이 무수히 실행 => 메인 스레드에 큰 부하를 줄 수 있다. 
    - getBoundingClientRect reflow를 발생시킬 수 있다. 
  
  - Intersection Observer API 는 
    - 루트 요소와 타겟 요소의 교차점을 관찰
    - 타겟 요소가 루트 요소와 교차하는지 아닌지를 구별하는 기능 제공 
    - scroll 이벤트와 다르게 교차 시 비동기적으로 실행, 
    - 가시성 구분 시 reflow를 발생시키지 않음. 

  - Intersection Observer 인스턴스 생성

    ```js
      let options = {
        root: document.querySelector('#scrollArea'), // root 요소 설정 : 타겟 요소보다 상위요소
        rootMargin: '0px',
        threshold: 1.0  // 어느 정도 타겟요소가 보여졌는지에 따라 콜백 호출출
      }

      // options에 따라 인스턴스 생성
      let observer = new IntersectionObserver(callback, options);

      // 타겟 요소 관찰 시작
      let target = document.querySelector('#listItem');
      observer.observe(target);
    ``
  - Callback
    - 타겟 요소의 관찰이 시작되거나, 가시성에 변화가 감지되면(threshold 와 만나면) 등록된 callback 이 실행
      ```js
        let callback = (entries, observer) => {
          entries.forEach(entry => {
            // 각 entry는 가시성 변화가 감지될 때마다 발생하고 그 context를 나타냅니다.
            // target element:
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time
          });
        };
      ```

      - 이 콜백은 메인스레드에서 처리, 파마리터로 entries와 observer를 받게 된다.
    
    - Entrise 
      - entries 는 IntersectionObserverEntry 인스턴스를 담은 배열입니다.
      - 루트요소와 타겟요소의 교차(threshold 와 만났을 때)의 상황을 묘사
      - 포함된 프로퍼티들은 모두 읽기전용
 





















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