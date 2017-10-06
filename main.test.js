beforeEach(() => {
    throw new Error('Fail!');
});

test('1 is 1', () => {
    expect(1).toBe(1);
});

test('1 is 2', () => {
    expect(1).toBe(2);
});

test('1 is 3', () => {
    expect(1).toMatchSnapshot();
});
