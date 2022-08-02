import React from 'react';
import ReactMarkdown from 'react-markdown';
import classnames from 'classnames';
import {
  message,
  messageOther,
  messageSelf,
  messageTyping,
  messageSystem,
  messageWidgetTyping,
} from './Message.scss';

export default ({ text, participant, typing, system, typingStyles }) => (
  <div
    className={
      classnames(
        message,
        {
          [messageWidgetTyping]: typing && !text,
          [messageTyping]: typing && text,
          [messageSystem]: system,
          [messageSelf]: participant.isSelf,
          [messageOther]: !participant.isSelf,
        }
      )
    }
  >
    {
      text
        ? <ReactMarkdown escapeHtml source={text} />
        : <span>
          <span>.</span> <span>.</span> <span>.</span>
        </span>
    }
  </div>
);
