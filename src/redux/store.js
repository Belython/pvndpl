import dialogsReducer from "./DialogsReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: "Максим Жуков",
                    lastMessage: "Го пить пиво?",
                    avatar: "https://sun9-54.userapi.com/impf/c625217/v625217726/461bb/qN1l36uvux8.jpg?size=866x1155&quality=96&sign=10a896fa269febbde151ae737cc4e0df&type=album"
                },
                {
                    id: 2,
                    name: 'Сергей Сесин',
                    lastMessage: "Почему ты не воруешь в магазине?",
                    avatar: "https://sun9-38.userapi.com/s/v1/ig2/PpHTm-atDA2LpcVqSxImtg5T3ikb9n4o20fQHIZND1mbHhjGQLhYpZcYgAzMLhQi4Wh8HRVk5lcS-lESk9qZM0BK.jpg?size=200x200&quality=95&crop=52,82,849,849&ava=1"
                },
                {
                    id: 3,
                    name: 'Алексей Клименко',
                    lastMessage: "Пока!",
                    avatar: "https://sun9-37.userapi.com/s/v1/ig2/JUspc14Unm3vb48F8g17lE6mLLkX3r6-EIRO5T0B9JSjdjT2q9ZggnU_MyWp5aI0bozHBI_oBNONB18vSN_BKtew.jpg?size=200x200&quality=96&crop=157,129,353,353&ava=1"
                },
                {
                    id: 4,
                    name: 'Анатолий Коверин',
                    lastMessage: "Привет!",
                    avatar: "https://sun9-74.userapi.com/s/v1/if1/QMc2lSb04j4kFxDlNTv1ymxI2Cr6ZfPiNPh4BROGygXky4C-O7IVWY55AAfg0D7sr4uz6cvh.jpg?size=200x200&quality=96&crop=0,503,1152,1152&ava=1"
                }
            ],
            message: [
                {
                    //ID получателя и отправителя
                    id: 1,
                    avatar: "https://sun9-74.userapi.com/s/v1/if1/QMc2lSb04j4kFxDlNTv1ymxI2Cr6ZfPiNPh4BROGygXky4C-O7IVWY55AAfg0D7sr4uz6cvh.jpg?size=200x200&quality=96&crop=0,503,1152,1152&ava=1",
                    message: 'Ветер веет с юга\n' +
                        '                    И луна взошла,'
                },
                {
                    id: 2,
                    avatar: "https://sun9-38.userapi.com/s/v1/ig2/PpHTm-atDA2LpcVqSxImtg5T3ikb9n4o20fQHIZND1mbHhjGQLhYpZcYgAzMLhQi4Wh8HRVk5lcS-lESk9qZM0BK.jpg?size=200x200&quality=95&crop=52,82,849,849&ava=1",
                    message: 'Что же ты, б*ядюга,\n' +
                        '                Ночью не пришла?'
                },
                {
                    id: 3,
                    avatar: "https://sun9-74.userapi.com/s/v1/if1/QMc2lSb04j4kFxDlNTv1ymxI2Cr6ZfPiNPh4BROGygXky4C-O7IVWY55AAfg0D7sr4uz6cvh.jpg?size=200x200&quality=96&crop=0,503,1152,1152&ava=1",
                    message: 'Не пришла ты ночью,\n' +
                        '                Не явилась днем.'
                },
                {
                    id: 4,
                    avatar: "https://sun9-38.userapi.com/s/v1/ig2/PpHTm-atDA2LpcVqSxImtg5T3ikb9n4o20fQHIZND1mbHhjGQLhYpZcYgAzMLhQi4Wh8HRVk5lcS-lESk9qZM0BK.jpg?size=200x200&quality=95&crop=52,82,849,849&ava=1",
                    message: 'Думаешь, мы дрочим?\n' +
                        '                    Нет! Других е*ём!'
                }
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;