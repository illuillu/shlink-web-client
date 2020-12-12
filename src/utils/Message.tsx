import { FC } from 'react';
import { Card } from 'reactstrap';
import classNames from 'classnames';
import { faCircleNotch as preloader } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type MessageType = 'default' | 'error';

const getClassForType = (type: MessageType) => {
  const map: Record<MessageType, string> = {
    error: 'border-danger',
    default: '',
  };

  return map[type];
};
const getTextClassForType = (type: MessageType) => {
  const map: Record<MessageType, string> = {
    error: 'text-danger',
    default: 'text-muted',
  };

  return map[type];
};

interface MessageProps {
  noMargin?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: MessageType;
}

const Message: FC<MessageProps> = (
  { children, loading = false, noMargin = false, type = 'default', fullWidth = false },
) => {
  const cardClasses = classNames(getClassForType(type), { 'mt-4': !noMargin });
  const classes = classNames({
    'col-md-12': fullWidth,
    'col-md-10 offset-md-1': !fullWidth,
  });

  return (
    <div className={classes}>
      <Card className={cardClasses} body>
        <h3 className={classNames('text-center mb-0', getTextClassForType(type))}>
          {loading && <FontAwesomeIcon icon={preloader} spin />}
          {loading && <span className="ml-2">{children ?? 'Loading...'}</span>}
          {!loading && children}
        </h3>
      </Card>
    </div>
  );
};

export default Message;
