import authReducer from '../../reducers/auth';

test('should return login state',()=>{
    const state = authReducer({},{
        type: 'LOGIN',
        uid: 'abcdefg'
    });
    expect(state).toEqual({
        uid: 'abcdefg'
    });
});

test('should return logout state',()=>{
    const state = authReducer({uid: 'abcdefg'},{type:'LOGOUT'});
    expect(state).toEqual({});
});