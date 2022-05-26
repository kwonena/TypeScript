{
    /**
     * Type Inference
     * 타입을 명시하지 않아도 TS내에서 자동으로 타입을 유추해주는 것
     */

    // 처음 문자열로 선언했기 때문에 자동으로 타입을 string으로 유추함
    // === let text: string = 'hello'; 
    let text = 'hello';
    
    // message의 타입이 명시 되지 않았기 때문에 any로 유추됨
    // message: string으로 타입을 명시해주거나
    // message = 'hello' default parameter을 입력해 타입을 유추하게 하는 것이 좋음
    function print(message) {
        console.log(message);
    }
    print('hello');
    print(1);
    
    function add(x: number, y: number) {
        return x + y; // number 타입을 더한 것이므로 자동으로 return값은 number로 유추됨
    }
    const result = add(1, 2); // result 또한 number로 유추됨
}