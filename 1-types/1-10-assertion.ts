{
    /**
     * Type Assertions
     * 타입을 강요하게 되는 경우 (사용하지 않는 것이 좋음)
     */

    // JS 리턴 값을 TS가 알 수는 없지만 함수 내부적으로 문자열만 리턴하는 경우
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    
    // result를 문자열 타입으로 확신할 때 사용하는 두 가지 방법
    (result as string).length;
    <string>result.length;

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2); // 값이 존재한다고 확신할 때 느낌표를 활용
}