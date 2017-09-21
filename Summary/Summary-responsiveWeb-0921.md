2017/09/21 수업정리

[naradesign - 미디어쿼리 참고]

viewport breakpoint는 통계자료를 확인해서 분기한다.

반응형웹(RWD)
모바일~ 태블릿 ~데스크탑 
적응형웹(AWD)
모바일 / 데스크탑

### background-size 속성 (*익스9이상 지원)
background-size:auto
- 이미지가 원래 사이즈로 배치된다.
- 이미지가 크면 이미지 일부만 보일 수도 있다.
background-size:cover
- 이미지 비율을 맞춘 상태로 너비 높이 중에 큰 값에 맞추는 속성이다.
- 이미지의 일부가 보이지 않을 수도 있다.
background-size:contain
- 원하는 영역에 전체 이미지가 들어가도록 비율에 맞게 배치된다.
- 이미지가 잘리지 않는다. 원하는 영역에 꽉 차진 않지만 비율에 맞게 배치된다.

장식용 이미지
- 마크업에 이미지 넣어서(IR기법) 빈 태그로 활용한 경우
- alt="" 빈 속성으로 처리한다.
```
<img src="이미지경로" alt="">
```

복잡한 포털성 컨텐츠 -> 반응형 적용이 어렵다.

### 반응형 이미지 처리 
-부모 요소 크기에 맞게 늘어나도록 한다. (비율 유지)
flexible img {max-width:100%; height:auto}

### srcset, sizes 반응형웹 이미지 속성
- 여러 스크린별 사이즈를 제어하기 위해서 사용하는 속성이다.
- 뷰포트에 따라서 보이는 이미지를 다르게 적용한다.
- 모바일용으로만 만들때 사용한다.
- IE 11 버전부터 지원

#### 사용방식
img src="bird-wide.jpg" srcset="bird-wide.jpg 640w, bird-narrow 320w" sizes="(min-width:640px) 50vw, 100vw" alt="날고있는새"

- sizes 속성 : 뷰포트가 640px이상일 경우, 뷰포트 사이즈의 50%만 지정합니다.  


picture element - 익스11지원안함(picturefill로 대응가능)
-반응형웹만들때 사용
```
<picture>
<source media="" srcset="">
<img>- picture , source 인식하지못할때 대비(속성은 위참고)
</picture>
http://www.usefulparadigm.com/2014/11/03/processing-images-on-responsive-web/ 
참고해서 다시 정리
```


### display:flex 버그
1. 크롬에서 Form요소에 flex 속성이 안먹힌다.
2. 파이어폭스에서 fieldset 하위 요소가 block level 일때 flex가 안먹힌다. 
```
/* 크롬 버그 */
/* fieldset 하위 요소가 inline level이므로, 파이어폭스에서는 잘 된다. */
<form>
    <fieldset>
        <legend>검색 폼</legend>
        <label for="keyward">자료검색</label>
        <input type="search" id="keyward" required placeholder="검색어를 입력하세요.">
        <button type="submit" class="btn-search">검색</button>
    </fieldset>
</form>

fieldset { 
    display: flex;
    justify-content: flex-end;
}
  ```
### 해결법
-> 버그 상태에서 flex를 사용하고 싶을때는 div로 묶어주고 해당영역에 flex 속성을 적용한다.

```
<form>
    <fieldset>
        <div class="flex-container"> /*div로 감싼다*/
            <legend>검색 폼</legend>
            <label for="keyward">자료검색</label>
            <input type="search" id="keyward" required placeholder="검색어를 입력하세요.">
            <button type="submit" class="btn-search">검색</button>
        </div>
    </fieldset>
</form>

.flex-container { 
    display: flex;
    justify-content: flex-end;
}
```