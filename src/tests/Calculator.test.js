import React from 'react';
import Calculator from '../containers/Calculator';
import { render, fireEvent } from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('should add two numbers', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const addOperator = container.getByTestId('operator_add');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(addOperator);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('should substract two numbers', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const substractOperator = container.getByTestId('operator-subtract');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(substractOperator);
    fireEvent.click(button4);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply two numbers', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyOperator = container.getByTestId('operator-multiply');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiplyOperator);
    fireEvent.click(button5);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide two numbers', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divideOperator = container.getByTestId('operator-divide');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divideOperator);
    fireEvent.click(button7);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(button1);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('41');
  });

  it('should chain multiple operations together', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const button9 = container.getByTestId('number9');
    const addOperator = container.getByTestId('operator_add');
    const multiplyOperator = container.getByTestId('operator-multiply');
    const equal = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(multiplyOperator);
    fireEvent.click(button1);
    fireEvent.click(multiplyOperator);
    fireEvent.click(button7);
    fireEvent.click(addOperator);
    fireEvent.click(button9);

    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('37');
  });

  it('should clear the running total without affecting the calculation', () => {
    const button1 = container.getByTestId('number1');
    const button9 = container.getByTestId('number9');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const addOperator = container.getByTestId('operator_add');
    const substractOperator = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    const equal = container.getByTestId('operator-equals');

    fireEvent.click(button1);
    fireEvent.click(addOperator);
    fireEvent.click(button9);
    fireEvent.click(equal);
    fireEvent.click(substractOperator);
    fireEvent.click(button3);
    fireEvent.click(clear);
    fireEvent.click(button5);
    fireEvent.click(equal);
    expect(runningTotal.textContent).toEqual('5');
  });
});
