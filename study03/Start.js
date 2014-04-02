var younghee = new Person("영희", new IPhone("010-1234-1234"));
var ilhee = new Person("일희", new Android("010-6789-6789"));

younghee.sendSMS(ilhee, "안녕? 일희야!");
ilhee.sendSMS(younghee, "반가워, 영희야!");

console.log(younghee.phone.model);
younghee.phone.startFaceTime();

console.log(ilhee.phone.model);
ilhee.phone.startFaceTime();
