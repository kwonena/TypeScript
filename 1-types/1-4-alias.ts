{
    /**
     * Type Aliases
     * 새로운 타입을 정의할 수 있음
     */
    type Text = string;
    const name: string = 'Ena';
    const address: Text = 'Seoul';
    type Num = number;

    // 오브젝트 타입도 정의 가능
    // 할당할 값은 항상 name과 age로 동일해야 함
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        name: 'Ena',
        age: 25,
    };

    /**
     * String Literal Types
     * 값 자체를 타입으로 정의할 수 있음
     */
    type Name = 'name';
    let enaName: Name;
    enaName = 'name'; // 항상 name 문자열만 할당 가능

    // 문자열말고 다른 타입도 가능
    type Boal = true;
    const isCat: Boal = true;
}