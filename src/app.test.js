import GameSavingLoader from './GameSavingLoader.js';

jest.setTimeout(5000);
test('проверяем получение данных', async () => {
  const correct = "{\"id\":9,\"created\":1546300800,\"userInfo\":{\"id\":1,\"name\":\"Hitman\",\"level\":10,\"points\":2000}}"
  const dataJson = await GameSavingLoader.load();
  expect(dataJson).toEqual(correct);
})