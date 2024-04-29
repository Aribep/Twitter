import express from "express";
import * as tweetController from '../controller/tweet.js'

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
router.get('/', tweetController.getTweets);

// 글번호에 대한 트윗 가져오기
// GET
// http://localhost:8080/tweets/:id

router.get('/:id', tweetController.getTweet);


// 트윗하기
// POST
// http://localhost:8080/tweets
// name, username, text
// json형태로 입력 후 추가된 데이터까지 모두 json으로 출력

router.post('/', tweetController.createTweet);

// 트윗 수정하기
// PUT
// http://localhost:8080/tweets/:id
// id, username, text
// json 형태로 입력 후 변경된 데이터까지 모두 json으로 출력
router.put('/:id', tweetController.updateTweet);

// 트윗 삭제하기
// DELETE
// http://localhost:8080/tweets/:id

router.delete('/:id', tweetController.deleteTweet);

export default router;