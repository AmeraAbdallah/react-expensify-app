import {login, logout} from '../../actions/auth';

test('should create object action generator for login',()=>{
    const action = login('abcdefg');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'abcdefg'
    });
});

test('should create object action generator for logout',()=>{
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});