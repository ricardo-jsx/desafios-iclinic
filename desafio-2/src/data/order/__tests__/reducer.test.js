import reducer from '../reducer';

describe("OrderReducer =>", () => {
    it("Should set newest filter", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "SET_NEWEST"});

        expect(state.newest).toEqual(true);
        expect(state.oldest).toEqual(false);
    });

    it("Should set oldest filter", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "SET_OLDEST"});

        expect(state.oldest).toEqual(true);
        expect(state.newest).toEqual(false);
    });
});