{
    /**
     * Enum
     * 여러가지 상수 값을 한 곳에 모아서 정의 가능
     * JavaScript에서는 사용 불가능
     */

    // JavaScript
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;

    // JavaScript에서 Enum에 가깝게 표현할 수 있는 방법 -> freeze
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // TypeScript에서는 잘 사용하지 않음 (Union으로 대체)
    // 특정 숫자를 지정하지 않으면 자동으로 0부터 할당됨
    // 문자열을 할당할 수 있지만 하나씩 값을 할당해줘야 함
    type DaysOdWeek = 'Monday' | "Tuesday" | "Wednesday";
    enum Days {
        Monday, // 0
        Tuesday, // 1
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Monday);

    // 문제점
    // 타입이 정확하게 보장되지 않음, 다른 값을 할당해도 오류 발생 X
    let day: Days = Days.Saturday;
    day = Days.Thursday;
    day = 10;

    // Union으로 대체할 경우
    // 다른 값을 할당할 수 없어 타입이 보장됨
    let dayOfWeek: DaysOdWeek = 'Monday';
    dayOfWeek = 'Wednesday';
}