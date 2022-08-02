import React from 'react';
import classnames from 'classnames';
import Message from '../../atoms/Message';

import { group, groupName, groupNameSelf } from './Messages.scss';

export default ({ groups, Avatar }) => (
  <div>
    {
      groups.map((g, i) => {
        return (
          <div key={i} className={group}>
            {g.messages.map((message) => {
              return (<Message key={message.uuid} {...message} />);
            })}
            {
              g.participant.realType !== 'system'
                ? <span
                  className={
                    classnames(
                      groupName,
                      {
                        [groupNameSelf]: g.participant.isSelf,
                      }
                    )
                  }
                >
                  {!g.participant.isSelf ? g.participant.name : 'You'}
                </span>
                : null
            }

            {
              Avatar && g.participant.realType !== 'system'
                ? <Avatar
                  {...g.participant}
                  isSelf={g.participant.isSelf}
                  url={g.participant.avatarUrl}
                />
                : null
            }
          </div>
        );
      })
    }
  </div>
);
