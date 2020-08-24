import routes from './routes';

test('exports correct routes', () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
