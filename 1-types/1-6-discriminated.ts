{
    // Discriminated Union
    // Union에 차별화된 타입을 넣어 간편하게 구분할 수 있음
    // 공통적인 property로 직관적인 구분이 편리

    // function: login -> success, fail
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    }
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            result: 'success',
            response: {
                body: 'logged in!',
            },
        };
    }

    // printLoginState(state: LoginState)
    // success -> body
    // fail -> reason
    function printLoginState(state: LoginState) {
        if (state.result === 'success') {
            console.log(state.response.body);
        } else {
            console.log(state.reason);
        }
    }
}