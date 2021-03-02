/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AlertCountNumbersDivBy3 from './AlertCountNumbersDivBy3';

test('renders learn react link', async () => {
  const myMock = jest.fn();

  render(<AlertCountNumbersDivBy3 alert={myMock} />);

  const firstInput = screen.getByTestId('firstValue');
  const secondInput = screen.getByTestId('secondValue');
  const submit = screen.getByText('Process');

  expect(firstInput).toBeInTheDocument();
  expect(secondInput).toBeInTheDocument();
  expect(submit).toBeInTheDocument();
  act(() => {
    userEvent.type(firstInput, '1');
    userEvent.type(secondInput, '1');
  });
  userEvent.click(submit);
  expect(firstInput).toHaveValue('1');
  expect(secondInput).toHaveValue('1');

  await waitFor(() => {
    expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveBeenCalledWith(0);
  });
});
