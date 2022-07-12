{
    class User {
        // get을 이용해 데이터에 접근하면
        // 호출될 때마다 새로운 값을 만들 수 있음
        // 접근할 때는 멤버변수와 똑같이 user.fullName으로 함
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }

        // private firstName: string;
        // private lastName: string;
        // fullName: string;
        // constructor(firstName: string, lastName: string) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.fullName = `${this.firstName} ${this.lastName}`;
        // }

        // 위의 코드와 같지만 더 간결하게 사용 가능
        constructor(private firstName: string, private lastName: string) {}
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);
    // user.firstName = 'Ena';
    // console.log(user.fullName); // Steve Jobs

    // firstName을 변경했지만 constructor에서 한 번 지정된
    // fullName은 할당된 값이 유지됨
    // 이러한 문제점을 해결하기 위해 Getter, Setter 사용
    
    user.age = 6;
    // internalAge에 직접 접근하진 못하지만 age를 통해
    // 간접적으로 internalAge의 값을 업데이트 해줌
}