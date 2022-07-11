{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public : 기본값
    // private : 외부에서 볼 수 없음
    // protected : 외부에서는 볼 수 없지만 상속된 자식클래스에서는 접근 가능
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0; 

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
        
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        // 외부에서 내부의 정보를 변경하고 싶을 때 사용하는 함수
        // 유효성 검사도 할 수 있기 때문에 더 안정적
        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
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
    maker.fillCoffeeBeans(3);
}