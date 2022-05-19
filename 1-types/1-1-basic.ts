{
   /**  
    * JavaScript
    * Primitive: number, string, boolean, bigint, symbol, null, undefined
    * Object: function, array.... 
    */
    
    // number
    const num: number = -6;
    
    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined
    let name: undefined; // 💩
    let age: number | undefined;
    age = undefined;
    age = 1;
    function find(): number | undefined {
        return undefined;
    }

    // null
    let person: null; // 💩
    let person2: string | null;

    // unknown (js 리턴값을 알 수 없을 때 사용) 💩
    let notSure: unknown = 0;
    notSure = 'he';
    notSure = true;

    // any 💩
    let anything: any = 0;
    anything = 'hello';

    // void(함수에서 리턴값 없을 때 사용)
    // 생략 가능
    function print(): void {
        console.log('hello');
        return;
    }
    let unusable: void = undefined; // 💩

    // never (리턴하지 않을 때)
    // 에러를 전달하거나 무한루프일 때 사용
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        while(true) {}
    }
    let neverEnding: never; // 💩

    // object
    let obj: object; // 💩
    function acceptSomeObject(obj: object) { }
    acceptSomeObject({ name: 'Ena' });
    acceptSomeObject({ animal: 'dog' });
}