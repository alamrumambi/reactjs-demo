import React from 'react';
import { render, fireEvent, queryByDisplayValue } from '@testing-library/react';
import App from './App';

describe('render web page correctly', () => {

  test('should render text spain league football teams', () => {
    const { getByText } = render(<App />);
    const headTitle = getByText(/spain league football teams/i);
    expect(headTitle).toBeInTheDocument();
  });

  test('should have contain property <p> with text loading..', () => {
    const { getByTestId, queryByTestId } = render(<App />);
    const containerDiv = getByTestId('container');
    const loadingText = queryByTestId('loadingText');

    expect(containerDiv).toContainElement(loadingText);
    expect(loadingText).toHaveTextContent(/loading../i);
  })
})

describe('render user interactions', () => {

  test('input has value when type input', () => {
    const { getByTestId } = render(<App />);
    const input = getByTestId('inputTeam');
    const newTeam = 'new team';

    fireEvent.change(input, {
      target: {
        value: newTeam
      }
    })
    expect(input).toHaveValue(newTeam);
  })
})