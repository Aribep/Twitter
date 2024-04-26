import express from "express";

const router = express.Router();

let tweets = [
    {
        id: '1',
        text: '안녕하세요!',
        createdAt: Date.now().toString(),
        name: '김사과',
        username: "apple",
        url: 'https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg'
    },
    {
        id: '2',
        text: '반갑습니다!',
        createdAt: Date.now().toString(),
        name: '반하나',
        username: "banana",
        url: 'https://www.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-600nw-1722111529.jpg'
    }
];


// 해당 아이디에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? 
    tweets.filter((tweet) => tweet.username == username) : tweets;
    res.status(200).json(data);
});

// 글번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        res.status(200).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`});
    }
});


// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text
// json형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/', (req, res, next) => {
    const { text ,name, username } = req.body;
    const tweet = {
        id: '10',
        text: text,
        createdAt: Date.now().toString(),
        name: name,
        username: username,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSRyel4MCk8BAbI6gT_j4DBTEIcY0WW4WWfoklymsWA&s'
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweets);
});

// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const text = req.body.text;
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;
        res.status(201).json(tweet);
    }else{
        res.status(404).json({message: `${id}의 트윗이 없습니다`});
    }
});



// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    tweets = tweets.filter((tweet) => tweet.id !== id);
    res.sendStatus(204);
});

export default router;