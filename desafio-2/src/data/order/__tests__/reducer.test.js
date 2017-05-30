import reducer from '../reducer';

describe("OrderReducer =>", () => {
    it("Should set asc filter", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "ORDER_ASC"});

        expect(state.asc).toEqual(true);
        expect(state.desc).toEqual(false);
    });

    it("Should set desc filter", () => {
        let state = reducer(undefined, {});
        state = reducer(state, {type: "ORDER_DESC"});

        expect(state.desc).toEqual(true);
        expect(state.asc).toEqual(false);
    });
});