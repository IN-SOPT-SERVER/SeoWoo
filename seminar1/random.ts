interface Member {
  name: string;
  group: string;
}

interface Dinner {
  member: Member[];
  menu: string[];
  shuffle(participants: Member[] | string[]): Member[] | string[];
  organize(participants: Member[], menus: string[]): void;
}

const dinner: Dinner = {
  member: [
    {
      name: "권세훈",
      group: "ob",
    },
    {
      name: "이서우",
      group: "ob",
    },
    {
      name: "박현정",
      group: "yb",
    },
    {
      name: "강민재",
      group: "ob",
    },
    {
      name: "조하얀",
      group: "yb",
    },
  ],

  menu: ["국밥", "피자", "떡볶이", "햄버거", "고기"],

  shuffle(somethings) {
    somethings.sort(() => Math.random() - 0.5);
    return somethings;
  },

  organize(participants, food) {
    const dinnerMember: string[] = [];

    this.shuffle(participants);
    this.shuffle(food);

    let ob: Member | undefined = participants.find(
      (member: Member) => member.group === "ob"
    ) as Member;
    let yb: Member | undefined = participants.find(
      (member: Member) => member.group === "yb"
    ) as Member;

    if (typeof ob.name === "string") {
      //dinnerMember[0] = ob.name; // 직접 인덱스에 접근하는 것은 위험한 방식
      dinnerMember.push(ob.name); // 대신 push를 활용하여 배열의 element를 추가
    }

    if (typeof yb.name == "string") {
      //dinnerMember[1] = yb.name;
      dinnerMember.push(yb.name);
    }

    console.log(
      `오늘의 저녁 식사 멤버는 ${dinnerMember[0]}, ${dinnerMember[1]}이고 ${food[0]}를 먹습니다`
    );
  },
};

dinner.organize(dinner.member, dinner.menu);
