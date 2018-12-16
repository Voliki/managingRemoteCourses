import * as React from 'react';
import { Button, Input } from 'semantic-ui-react';

type Props = {};
type State = {};

export class LoginForm extends React.Component<Props, State> {
  render() {
    return (
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-field">
            <label>Логин</label>
            <Input

            />
          </div>
          <div className="login-field">
            <label>Пароль</label>
            <Input

            />
          </div>
          <div>
            <Button>Войти</Button>
          </div>
        </div>
      </div>
    );
  }
}