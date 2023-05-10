function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const level1 = ["이/그/저", "고 싶다", "에서", "~지 않다", "부터", "까지"];
const level2 = ["~을 거예요", "그리고/그래서", "하고/이랑", "그렇지만/그런데", "한테(서)", "고 있다", "잘/못 + 동사", "~어 야 되다", "(으)면", "아직/벌써", "누군가/무언가/어딘가/언젠가", "(으)세요", "~지 마세요"];
const level3 = ["너무", "~고 to link sentences", "앞/옆/위/밑/뒤", "(으)ㄹ까요", "쯤/약/정도", "(으)ㄹ게요", "~어서 to link sentences", "같아요", "~는것 같아요", "기 전에", "그래도", "Adj(으)ㄴ + Noun", "위해서", "밖에 (exclusionary)", "Verb(으)ㄴ 다음/후/뒤", "어도", "는데/인데/(으)ㄴ데", "(으)ㄹ 수도 있어요", "~네요", "~자 'lets'"];
const level4 = ["(으)ㄹ 수록", "(으)ㄹ래요?", "(으)ㄹ 리가 없다", "~지요/죠", "어도 되다", "(으)면 안되다", "사이에서/중에서", "아무~나/아무~도", "가끔/자주/별로/맨날/항상", "제일/가장", "덜", "훨씬", "(으)ㄹ +명사", "(으)ㄴ +명사", "~어 지다", "~게 되다"];
const level5 = ["(ㅇ)ㄹ 뻔했다", "시/하시다 honorific", "~(나/으ㄴ가) 보다", "~자마자", "(으)려고 하다", "~다가", "(이)라고", "(이)라는", "(으)니까", "(이)라도", "~ㄴ다/~는다 Present Narrative Tense", "(ㄴ/는)다는 Quoting Someone", "(ㄴ/는)다고 Quoting someone", "(으)ㄴ/는 지 whether or not", "(으)라고 + Verb - Tell someone to do something", "(으)려나 보다 It seems like/I assume", "(지) 말고 Not A but B", "에 비해서/ 은/는 편이다 Compared to", "대신에 Instead of", "~잖아요", "었다고/으ㄹ 거라고"];

document.getElementById('lesson1-id').innerHTML = level1[getRandomInt(level1.length)];
document.getElementById('lesson2-id').innerHTML = level2[getRandomInt(level2.length)];
document.getElementById('lesson3-id').innerHTML = level3[getRandomInt(level3.length)];
document.getElementById('lesson4-id').innerHTML = level4[getRandomInt(level4.length)];
document.getElementById('lesson5-id').innerHTML = level5[getRandomInt(level5.length)];


