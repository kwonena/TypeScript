{
    // Array
    // 배열의 타입 정의 방법
    const fruits: string[] = ['🍎', '🍌'];
    const scroes: Array<number> = [1, 2, 3];
    
    // 두 가지 정의 방법의 차이점
    // readonly : 데이터 읽기 전용으로 변경됨
    // 이때, Array<string>으로 타입을 쓰는 것은 불가능
    // function printArray(fruits: readonly Array<string>) { } ❌
    function printArray(fruits: readonly string[]) { }
    
    // Tuple
    // 서로 다른 타입을 가질 수 있는 배열
    // 단점 : 인덱스 접근이 가독성이 떨어짐
    // Tuple을 사용해야 하는 곳에서 interface, type alias, class 대체해서 사용
    let student: [string, number];
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    // 단점을 보완하는 방법 -> object destructuring(구조 분해 할당)
    const [name, age] = student;
}