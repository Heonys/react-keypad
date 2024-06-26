export function mockConsoleError() {
  const consoleMock = jest.spyOn(console, 'error');
  consoleMock.mockImplementation(() => undefined);

  return consoleMock;
}

export async function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
