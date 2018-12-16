import * as React from 'react';
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { courseAction } from '../action/courseAction';
import { initialStateType } from '../../store/initialState';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

type Props = {};
type State = {};

export class TableRecords extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <Table celled={true} selectable={true}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell>Фамилия</Table.HeaderCell>
              <Table.HeaderCell>Имя</Table.HeaderCell>
              <Table.HeaderCell>Отчество</Table.HeaderCell>
              <Table.HeaderCell>Эл. Почта</Table.HeaderCell>
              <Table.HeaderCell>Образование</Table.HeaderCell>
              <Table.HeaderCell>СНИЛС</Table.HeaderCell>
              <Table.HeaderCell>ИНН</Table.HeaderCell>
              <Table.HeaderCell>Место работы</Table.HeaderCell>
              <Table.HeaderCell>Должность</Table.HeaderCell>
              <Table.HeaderCell>Почтовый индекс МЖ</Table.HeaderCell>
              <Table.HeaderCell>Адрес МЖ</Table.HeaderCell>
              <Table.HeaderCell>Телефон</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row id="dsd" onClick={(e: any) => {console.log('e', e.target); }}>
              <Table.Cell collapsing={true}>
                <Button negative={true}>Удалить</Button>
              </Table.Cell>
              <Table.Cell collapsing={true}>
                <Button positive={true}>Ред.</Button>
              </Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
              <Table.Cell>fsdfsdf</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer fullWidth={true}>
            <Table.Row>
              <Table.HeaderCell/>
              <Table.HeaderCell/>
              <Table.HeaderCell colSpan="12">fsdfsdf</Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state: initialStateType) => {
  return {
    course: state.admin.course,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      ...courseAction,
    },
    dispatch
  );

export default withRouter(connect<any, any, any>(mapStateToProps, mapDispatchToProps)(TableRecords));