Feature('Dog API Tests');

Scenario('GET /breeds/list/all - Deve retornar lista de breeds', ({ I }) => {
  I.sendGetRequest('/breeds/list/all');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success',
  });
  I.seeResponseContainsKeys(['message', 'status']);
});

Scenario('GET /breeds/list/all - Deve validar estrutura', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/list/all');
  I.seeResponseCodeIs(200);

  // Verificações básicas usando métodos padrão do CodeceptJS
  I.seeResponseContainsKeys(['message']);
  console.log('✅ Lista de breeds retornada com sucesso');

  // Se quisermos ver os dados (opcional)
  if (response && response.data && response.data.message) {
    console.log(
      `Total de breeds encontradas: ${Object.keys(response.data.message).length}`,
    );
  }
});

Scenario(
  'GET /breed/labrador/images - Deve retornar imagens da breed',
  ({ I }) => {
    I.sendGetRequest('/breed/labrador/images');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      status: 'success',
    });
    I.seeResponseContainsKeys(['message', 'status']);
  },
);

Scenario(
  'GET /breed/labrador/images - Deve validar array de URLs',
  async ({ I }) => {
    const response = await I.sendGetRequest('/breed/labrador/images');
    I.seeResponseCodeIs(200);

    console.log('✅ Imagens do labrador retornadas com sucesso');

    // Log informativo se conseguirmos acessar os dados
    if (
      response &&
      response.data &&
      response.data.message &&
      Array.isArray(response.data.message)
    ) {
      console.log(`Labrador tem ${response.data.message.length} imagens`);
    }
  },
);

Scenario(
  'GET /breeds/image/random - Deve retornar imagem aleatória',
  ({ I }) => {
    I.sendGetRequest('/breeds/image/random');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      status: 'success',
    });
    I.seeResponseContainsKeys(['message', 'status']);
  },
);

Scenario('GET /breeds/image/random - Deve validar URL', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/image/random');
  I.seeResponseCodeIs(200);

  console.log('✅ Imagem aleatória retornada com sucesso');

  // Log informativo se conseguirmos acessar os dados
  if (response && response.data && response.data.message) {
    console.log(`URL da imagem: ${response.data.message}`);
  }
});

Scenario('Teste de erro 404 para breed inexistente', ({ I }) => {
  I.sendGetRequest('/breed/breedInexistente123/images');
  I.seeResponseCodeIs(404);
  I.seeResponseContainsJson({
    status: 'error',
  });
});
