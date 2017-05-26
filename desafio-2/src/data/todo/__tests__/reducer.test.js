import reducer from '../reducer';

describe("Todo Reducer =>", () => {
    it("Should add a todo", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "ADD_TODO", payload: "Buy Cheese"});

        expect(state.length).toEqual(2);
        expect(state[1].text).toEqual("Buy Cheese");
        expect(state[1].id).not.toEqual(undefined);
        expect(state[1].time).not.toEqual(undefined);
    });

    it("Should remove a todo", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "REMOVE_TODO", payload: '376jd8-ajs7jdhs-27dhdus7'});

        expect(state.length).toEqual(0);
    });

    it("Should toggle all to dos", () => {
        let initialState = [
            {
                id: '376jd8-ajs7jdhs-27dhdus7',
                time: 1495765131323,
                text: 'Buy Milk',
                completed: false
            },
            {
                id: '376jd8-adasd-27dhdus7',
                time: 109283109813,
                text: 'Buy Cheese',
                completed: false
            }
        ];

        let state = reducer(state, {type: "TOGGLE_TODO"});

        state = reducer(state, {type: "TOGGLE_TODO", payload: '376jd8-ajs7jdhs-27dhdus7'});
        expect(state[0].completed).toBeTruthy();

        state = reducer(state, {type: "TOGGLE_TODO", payload: '376jd8-ajs7jdhs-27dhdus7'});
        expect(state[0].completed).not.toBeTruthy();
    });
});