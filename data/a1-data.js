const A1_CONTENT = [

{ type:"flashcard", vn:"Xin chào", en:"Hello" },
{ type:"mcq", q:"Bạn nói gì khi lần đầu gặp ai đó?", options:["Hello","Goodbye","Sorry"], correct:0 },
{ type:"scramble", vn:"Tôi là học sinh.", words:["I","am","a","student."], answer:"I am a student." },

{ type:"mcq", q:"Khi rời đi bạn nói:", options:["See you","Good morning","Sorry"], correct:0 },
{ type:"flashcard", vn:"Tạm biệt", en:"Goodbye" },
{ type:"scramble", vn:"Tôi sống ở Việt Nam.", words:["I","live","in","Vietnam."], answer:"I live in Vietnam." },

{ type:"mcq", q:"Nếu ai đó giúp bạn, bạn nói:", options:["Sorry","Thank you","Excuse me"], correct:1 },
{ type:"flashcard", vn:"Cảm ơn bạn", en:"Thank you" },
{ type:"scramble", vn:"Tôi thích cà phê.", words:["I","like","coffee."], answer:"I like coffee." },

{ type:"mcq", q:"Khi muốn xin lỗi:", options:["I'm sorry","Good night","Nice to meet you"], correct:0 },
{ type:"flashcard", vn:"Xin lỗi", en:"Sorry" },
{ type:"scramble", vn:"Tôi không hiểu.", words:["I","do","not","understand."], answer:"I do not understand." },

{ type:"mcq", q:"Câu nào dùng để hỏi tên?", options:["Where are you?","What is your name?","How old are you?"], correct:1 },
{ type:"flashcard", vn:"Làm ơn", en:"Please" },
{ type:"scramble", vn:"Bạn đến từ đâu?", words:["Where","are","you","from?"], answer:"Where are you from?" },

{ type:"mcq", q:"Bạn trả lời 'I'm fine' khi nghe:", options:["How are you?","Where are you?","What time is it?"], correct:0 },
{ type:"flashcard", vn:"Không sao đâu", en:"It's okay" },
{ type:"scramble", vn:"Bạn làm nghề gì?", words:["What","is","your","job?"], answer:"What is your job?" },

{ type:"mcq", q:"Buổi sáng bạn nói:", options:["Good morning","Good night","Good evening"], correct:0 },
{ type:"flashcard", vn:"Bạn khỏe không?", en:"How are you?" },
{ type:"scramble", vn:"Tôi đang học tiếng Anh.", words:["I","am","learning","English."], answer:"I am learning English." },

{ type:"mcq", q:"Trước khi ngủ bạn nói:", options:["Good afternoon","Good night","Good morning"], correct:1 },
{ type:"flashcard", vn:"Tôi khỏe", en:"I'm fine" },
{ type:"scramble", vn:"Tôi thích nghe nhạc.", words:["I","like","listening","to","music."], answer:"I like listening to music." },

{ type:"mcq", q:"Apple là:", options:["Fruit","Animal","City"], correct:0 },
{ type:"flashcard", vn:"Rất vui được gặp bạn", en:"Nice to meet you" },
{ type:"scramble", vn:"Cô ấy là giáo viên.", words:["She","is","a","teacher."], answer:"She is a teacher." },

{ type:"mcq", q:"Dog là:", options:["Animal","Drink","Color"], correct:0 },
{ type:"flashcard", vn:"Hẹn gặp lại", en:"See you later" },
{ type:"scramble", vn:"Anh ấy là bác sĩ.", words:["He","is","a","doctor."], answer:"He is a doctor." },

{ type:"mcq", q:"Blue là:", options:["Food","Color","Animal"], correct:1 },
{ type:"flashcard", vn:"Nước", en:"Water" },
{ type:"scramble", vn:"Tôi có một con chó.", words:["I","have","a","dog."], answer:"I have a dog." },

{ type:"mcq", q:"Car là:", options:["Vehicle","Food","Clothes"], correct:0 },
{ type:"flashcard", vn:"Cà phê", en:"Coffee" },
{ type:"scramble", vn:"Tôi có hai anh em.", words:["I","have","two","brothers."], answer:"I have two brothers." },

{ type:"mcq", q:"Milk là:", options:["Drink","Animal","City"], correct:0 },
{ type:"flashcard", vn:"Trà", en:"Tea" },
{ type:"scramble", vn:"Tôi thích đọc sách.", words:["I","like","reading","books."], answer:"I like reading books." },

{ type:"mcq", q:"Monday là:", options:["Day","Food","Animal"], correct:0 },
{ type:"flashcard", vn:"Bánh mì", en:"Bread" },
{ type:"scramble", vn:"Chúng tôi đang ăn tối.", words:["We","are","eating","dinner."], answer:"We are eating dinner." },

{ type:"mcq", q:"January là:", options:["Month","City","Drink"], correct:0 },
{ type:"flashcard", vn:"Cơm", en:"Rice" },
{ type:"scramble", vn:"Họ đang xem TV.", words:["They","are","watching","TV."], answer:"They are watching TV." },

{ type:"mcq", q:"One nghĩa là:", options:["1","2","3"], correct:0 },
{ type:"flashcard", vn:"Sáng", en:"Morning" },
{ type:"scramble", vn:"Hôm nay là thứ Hai.", words:["Today","is","Monday."], answer:"Today is Monday." },

{ type:"mcq", q:"Ten nghĩa là:", options:["5","10","20"], correct:1 },
{ type:"flashcard", vn:"Chiều", en:"Afternoon" },
{ type:"scramble", vn:"Bây giờ là 10 giờ.", words:["It","is","ten","o'clock."], answer:"It is ten o'clock." },

{ type:"mcq", q:"School là:", options:["Place","Food","Drink"], correct:0 },
{ type:"flashcard", vn:"Tối", en:"Evening" },
{ type:"scramble", vn:"Tôi đi làm mỗi ngày.", words:["I","go","to","work","every","day."], answer:"I go to work every day." },

{ type:"mcq", q:"Teacher là:", options:["Job","Animal","Food"], correct:0 },
{ type:"flashcard", vn:"Đêm", en:"Night" },
{ type:"scramble", vn:"Tôi ăn sáng lúc 7 giờ.", words:["I","eat","breakfast","at","seven."], answer:"I eat breakfast at seven." },

{ type:"mcq", q:"Hospital là:", options:["Place","Color","Food"], correct:0 },
{ type:"flashcard", vn:"Giáo viên", en:"Teacher" },
{ type:"scramble", vn:"Tôi đang ở trường.", words:["I","am","at","school."], answer:"I am at school." },

{ type:"mcq", q:"Sun là:", options:["Star","Animal","Food"], correct:0 },
{ type:"flashcard", vn:"Học sinh", en:"Student" },
{ type:"scramble", vn:"Chúng tôi đang học.", words:["We","are","studying."], answer:"We are studying." },

{ type:"mcq", q:"Moon là:", options:["Planet","Animal","Drink"], correct:0 },
{ type:"flashcard", vn:"Bác sĩ", en:"Doctor" },
{ type:"scramble", vn:"Cô ấy đang đọc sách.", words:["She","is","reading","a","book."], answer:"She is reading a book." },

{ type:"mcq", q:"Rain là:", options:["Weather","Food","City"], correct:0 },
{ type:"flashcard", vn:"Kỹ sư", en:"Engineer" },
{ type:"scramble", vn:"Hôm nay trời mưa.", words:["It","is","raining","today."], answer:"It is raining today." },

{ type:"flashcard", vn:"Mưa", en:"Rain" },
{ type:"mcq", q:"Hôm nay trời nóng nghĩa là:", options:["It is hot today","It is raining","It is cold"], correct:0 },
{ type:"scramble", vn:"Hôm nay trời nóng.", words:["It","is","hot","today."], answer:"It is hot today." },

{ type:"flashcard", vn:"Nắng", en:"Sun" },
{ type:"mcq", q:"Hôm nay trời lạnh nghĩa là:", options:["It is cold today","It is hot","It is raining"], correct:0 },
{ type:"scramble", vn:"Hôm nay trời lạnh.", words:["It","is","cold","today."], answer:"It is cold today." },

{ type:"flashcard", vn:"Gió", en:"Wind" },
{ type:"mcq", q:"Wind nghĩa là:", options:["Gió","Mưa","Tuyết"], correct:0 },
{ type:"scramble", vn:"Tôi thích thời tiết này.", words:["I","like","this","weather."], answer:"I like this weather." },

{ type:"flashcard", vn:"Tuyết", en:"Snow" },
{ type:"mcq", q:"Snow nghĩa là:", options:["Mưa","Tuyết","Gió"], correct:1 },
{ type:"scramble", vn:"Trời có tuyết.", words:["It","is","snowing."], answer:"It is snowing." }

];
