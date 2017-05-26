import reducer from '../reducer';

describe("Visibility Reducer =>", () => {
    it("Should show all todo", () => {
        const state = reducer(undefined, {type: "SHOW_ALL"});

        expect(state.completed).not.toBeTruthy();
        expect(state.all).toBeTruthy();
    });

    it("Should show only completed todo", () => {
        const state = reducer(undefined, {type: "SHOW_COMPLETED"});

        expect(state.completed).toBeTruthy();
        expect(state.all).not.toBeTruthy();
    });
});