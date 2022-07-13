{
    // Abstraction (추상화)
    // 복잡한 인터페이스에서 필요한 인터페이스만을 추출해 간단하게 사용할 수 있게 함
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // interface : 필수 정보를 명시해둠
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    // class는 interface의 규격을 따름
    // interface에서 정의한 모든 함수를 구현해야 함
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }
       
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        private grindBeans(shots:number) {
            console.log(`grinding beans for ${shots}`);

            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                    throw new Error('Not enough coffee beans!');
                }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(3);
    maker.makeCoffee(3);

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(3);
    // -> CoffeeMaker Interface에는 해당 함수가 없으므로 사용 불가능
    maker2.makeCoffee(3);

    // 추상화를 하는 방법

    // 1. 접근 제어자 사용
    // 사용자가 꼭 알지 않아도 되는 정보는 private(접근 제어자)로 감춰두고
    // 꼭 필요한 정보만 볼 수 있도록 함

    // 2. interface 사용
    // 사용자가 사용할 수 있는 기능을 interface로 제한해
    // 간단하게 필요한 정보만 볼 수 있도록 함
}