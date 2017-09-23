
### CSS3 position sticky
-IE11버전부터 지원

### jQuery Multiple Selector - 다중선택자 선택

다양한 요소를 한번에 선택하고 싶을때, 여러 선택자를 콤마로 연결하면 된다.
$('selector1,selector2,...,selectorN')
'''var btn_menubar = $('.btn-menubar,.menubar');

### 말줄임 텍스트 - 여러 줄 단위로 글자 자르기
(multi-line text-overflow ellipsis)



line-clamp : 몇줄;
(각 브라우저의 벤더프리픽스 적어준다)

.txt {
    /*한줄 자르기*/
    width: 200px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;

    white-space:normal;
    line-height:1.2;

}
    
word-wrap: break-word : 글자를 단어 단위로 자른다.
display: -webkit-box : 여백 삽입과 같이 유연한 높이 증가를 위해 플렉스 박스형태로 변환
-webkit-line-clamp: 3 : 보여줄 줄 갯수
-webkit-box-orient: vertical : 플렉스 박스의 방향 설정
