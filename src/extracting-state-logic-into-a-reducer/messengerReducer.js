export const initialState = {
    selectedId: 0,
    messages: {
        0: "Hello, Taylor", // contactId = 0의 message 초기 값
        1: "Hello, Alice", // contactId = 1의 message 초기 값
        2: "Hello, Bob", // contactId = 2의 message 초기 값
    },
};

export function messengerReducer(state, action) {
    switch (action.type) {
        case "changed_selection": {
            return {
                ...state,
                selectedId: action.contactId,
                messages: state.messages,
            };
        }
        case "edited_message": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: action.message,
                },
            };
        }
        case "send_message": {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [state.selectedId]: "",
                },
            };
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
