import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from '../../../redux/axios';
import Cookies from 'js-cookie';
import {NavLink} from "react-router-dom";
import './ConversationList.css';
import style from "../../UserContent/UserInfo/UserInfo.module.css";
import styles from "../../Content/Friend/Friend.module.css";


export default function ConversationList(props) {
    const [isModal, setModal] = React.useState(false);
    const [conversations, setConversations] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    useEffect(() => {
        getConversations()
        getSubscribers()
    }, [])

    const SubscriberList = (props) => {
        const {id, username, firstName, secondName} = props.data;
        const CreateChat = () => {
            const {id, username, firstName, secondName} = props.data;
            axios.post(
                '/chats',
                JSON.stringify({"type": "Private", "title": firstName + secondName, "userInvitedID": id}),
                {headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(Cookies.get('JWT'))
                    }
                }).then(() => window.location.reload())
        }
    return (
            <div className={styles.user}>
                <div className={styles.preview}>
                    <img className={styles.headerInfoImg}
                         src={"https://vsememy.ru/wp-content/cache/thumb/62e36a6a5_320x200.jpg"}/>
                    <p className={styles.name}>{firstName}</p>
                    <p className={styles.tag}>{secondName}</p>
                    <button className={style.add_button} onClick={CreateChat}> Создать чат</button>
                </div>
            </div>
        )
    }

    const getSubscribers = () => {
        axios.get(
            '/subscriptions',
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
            }
        ).then(response => {
            let subscribersList = response.data.map(result => {
                return {
                    id: result.id,
                    username: result.username,
                    firstName: result.firstName,
                    secondName: result.secondName
                };
            });
            setSubscribers([...subscribers, ...subscribersList])
        });
    }
    const list = subscribers.map((el) =>
        <SubscriberList data={el} key={el.id}/>
    )
    const Modal = ({isVisible = false, title, content, footer, onClose}) => {
        const keydownHandler = ({key}) => {
            switch (key) {
                case 'Escape':
                    onClose();
                    break;
                default:
            }
        };

        React.useEffect(() => {
            document.addEventListener('keydown', keydownHandler);
            return () => document.removeEventListener('keydown', keydownHandler);
        });
        //todo потом решить вопрос с повторяющимся списком
        return !isVisible ? null : (
            <div className="modal" onClick={onClose}>
                <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3 className="modal-title">{title}</h3>
                        <span className="modal-close" onClick={onClose}>
            &times;
          </span>
                    </div>
                    <div className="modal-body">
                        <div className="modal-content">{content}</div>
                    </div>
                    {footer && <div className="modal-footer">{footer}</div>}
                </div>
            </div>
        );
    };
    const getConversations = () => {
        axios.get(
            '/chats',
            {
                headers: {Authorization: "Bearer ".concat(Cookies.get('JWT'))}
            }
        ).then(response => {
            let newConversations = response.data.map(result => {
                return {
                    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Macaca_nigra_self-portrait_large.jpg/220px-Macaca_nigra_self-portrait_large.jpg",
                    chatId: result.chatId,
                    userId: result.userId,
                    name: `${result.userFirstName} ${result.userLastName}`,
                };
            });
            setConversations([...conversations, ...newConversations])
        });
    }


    return (
      <div className="conversation-list">
        <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <button onClick={() => setModal(true)} className={style.add_button}>Добавить чат</button>
            <Modal
                isVisible={isModal}
                title="Список подписок"
                content={list}
                footer={<button>Cancel</button>}
                onClose={() => setModal(false)}
            />
        <ConversationSearch />
        {
          conversations.map(conversation =>
            <a href={`http://localhost:3000/pvndpl-front/messages/${conversation.chatId}`}>
            <ConversationListItem
              key={conversation.name}
              data={conversation}
            />
                    </a>
          )
        }
        </div>
    );
}