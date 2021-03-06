{
    // JavaScript π©
    function jsAdd(num1, num2) {
        return num1 + num2;
    }

    // TypeScript β¨
    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    // JavaScript π©
    function jsFetchNum(id) {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // TypeScript β¨
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript, TypeScript λͺ¨λ μ¬μ© κ°λ₯ν ν¨μ μ μ λ°©λ²
    // Optional parameter
    // ?λ₯Ό μ¬μ©νλ©΄ ν΄λΉ μΈμ μ λ¬μ μ νν  μ μμ
    // lastName: string | undefinedμ λΉμ·νμ§λ§ μ λ¬ μΈμ μλ΅ λΆκ°λ₯
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
    // κ°μμ μκ΄μμ΄ λμΌν νμμ λ°μ΄ν°λ₯Ό μ λ¬ν  λ μ¬μ©
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4, 5));
}