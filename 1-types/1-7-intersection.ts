{
    /**
     * Intersection Type : AND
     * 다양한 타입을 하나로 묶어서 선언 가능
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'Ena',
        score: 1,
        employeeId: 123,
        work: () => {}
    })
}