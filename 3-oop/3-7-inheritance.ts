{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT: number = 7;
        private coffeeBeans: number = 0;

        constructor(coffeeBeans: number) {
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

        clean() {
            console.log('cleaning the machine');
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

    class CaffeLatteMachine extends CoffeeMachine {
        // 자식 클래스에서 constructor를 호춯하는 경우 super를 필수적으로 호출해야 함
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }
        
        private steamMilk(): void {
            console.log('Steaming some milk');
        }

        // 오버라이팅 : 자식클래스에서 부모클래스의 요소를 덮어씌우는 것
        makeCoffee(shots: number): CoffeeCup {
            // super : 자식클래스에서 부모클래스의 요소를 이용하고 싶을 때 사용
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            } // -> 부모의 모든 기능 + 자식클래스의 특정 행위
      }
  }
}