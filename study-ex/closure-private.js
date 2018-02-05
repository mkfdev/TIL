/*
    *private variable

    - 클로저는 자바스크립트가 private한 변수를 사용할 수 있게 한다.
    - set_title로만 수정할 수 있고, get_title로만 변수를 불러올 수 있기 때문에 안전한 저장, 수정을 할 수 있다.
    
*/
function factory_movie(title){
    return {
        get_title : function(){
            return title;
        },
        set_title : function(_title){
            if(typeof _title === 'string'){
                title = _title;
            }else{
                alert('제목은 한글로만 입력해주세요!!!');
            }
        }
    }
}

showman = factory_movie('The Greatest Showman');
coco = factory_movie('Disney coco');

console.log(showman.get_title());
console.log(coco.get_title());

coco.set_title('woolaf');
console.log(coco.get_title());


