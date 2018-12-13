import * as React from 'react';
import { Button } from 'semantic-ui-react';
import { UrFaceStateType } from '../../store/urFaceState';

type Props = {
  urFace: UrFaceStateType;
};
type State = {};

export class RecordsByNewUrListener extends React.Component<Props, State> {
  _renderRecords = () => {
    const listeners: Array<any> = this.props.urFace.listener.map(item => {
      return (
        <li key={item.id}>
          <span>{item.name}</span>
          <div>
            <Button positive={true}>Редактировать</Button>
            <Button negative={true}>Удалить</Button>
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