import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { UrFaceStateType } from '../../store/urFaceState';

type Props = {
  urFace: UrFaceStateType;

  deleteListener: (listenerId: string) => (dispatch: any) => void;
  editProfileListener: (listenerId: string) => (dispatch: any) => void;
};
type State = {};

export class RecordsByNewUrListener extends React.Component<Props, State> {
  editProfileListener = (listenerId: string) => {
    this.props.editProfileListener(listenerId);
  };
  deleteListener = (listenerId: string) => {
    this.props.deleteListener(listenerId);
  };
  _renderRecords = () => {
    const listeners: Array<any> = this.props.urFace.listener.map(item => {
      return (
        <li key={item.id}>
          <span>{item.name}</span>
          <div>
            <Button
              positive={true}
              onClick={() => {
                this.editProfileListener(item.id);
              }}
            >
              Редактировать
            </Button>
            <Button
              negative={true}
              onClick={() => {
                this.deleteListener(item.id);
              }}
            >
              Удалить
            </Button>
          </div>
        </li>
      );
    });
    return listeners;
  };

  render() {
    return (
      <div>
        <label>Слушатели:</label>
        <ul>
          {this._renderRecords()}
        </ul>
      </div>
    );
  }
}