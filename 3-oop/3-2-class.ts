{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        // 변하지 않는 값을 멤버 변수로 설정해두면 중복적으로 데이터 생성 -> 메모리 낭비
        // static을 붙여 class level로 설정
        // 단, static 선언시 클래스내 this 사용 불가
        // new 객체를 생성하지 않고도 사용 가능
        static BEANS_GRAMM_PER_SHOT: number = 7;

        // 멤버 변수 : Object마다 새로 만들어지는 값
        // instance (object) level
        coffeeBeans: number = 0; 

        // Object 생성시 항상 호출되는 함수
        // this.coffeeBeans는 class 내부에 속한 coffeeBeans을 가르키고,
        // coffeeBeans은 constructor로 전달받은 값을 뜻함
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        // class 내부의 속성 값이 필요없기 때문에 static 선언
        // 외부에서도 makeMachine에만 접근해서 간단하게 생성하기 가능
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }
        makerCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false
            }
        }
    }

    const maker = new CoffeeMaker(32);
    console.log(maker);

    CoffeeMaker.makeMachine(3); // class 생성 안 하고 간단하게 만들 수 있음
}