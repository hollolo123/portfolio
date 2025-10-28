# Portfolio 

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