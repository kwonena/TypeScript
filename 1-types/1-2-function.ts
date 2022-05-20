{
    // JavaScript 💩
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript ✨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript ✨
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript, TypeScript 모두 사용 가능한 함수 정의 방법
    // Optional parameter
    // ?를 사용하면 해당 인자 전달을 선택할 수 있음
    // lastName: string | undefined와 비슷하지만 전달 인자 생략 불가능
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Ena');
    printName('Anna', undefined);

    // Default parameter
    function printMessage(message: string = 'defult message') {
        console.log(message);
    }
    printMessage(); // defult message

    // Rest parameter
    // 개수에 상관없이 동일한 타입의 데이터를 전달할 때 사용
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4, 5));
}