Express

**미들웨어(?)
- angular도 같은 개념 사용

:(콜론)
- app.get('/user/100/item/200', (req,res) =>{...});
- 위처럼 파라미터로 값을 넘기는 방법은 아래처럼 사용한다.
- app.get('/user/:userId/item/:itemId', (req,res) =>{...}); 
- const {userId, itemId} = req.params; //**params 가져오기 -> ${userId}, ${itemId}

