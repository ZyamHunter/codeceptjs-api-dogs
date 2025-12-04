Feature('Dog API - Cenários Negativos');

Scenario('Deve retornar erro 404 para breed inexistente', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/breedInexistente123/images');
  I.seeResponseCodeIs(404);
  I.seeResponseContainsJson({
    status: 'error'
  });
  console.log('✅ Erro 404 para breed inexistente funcionando corretamente');
});

Scenario('Deve retornar erro 404 para sub-breed inexistente', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/hound/subbreedInexistente/images');
  I.seeResponseCodeIs(404);
  I.seeResponseContainsJson({
    status: 'error'
  });
  console.log('✅ Erro 404 para sub-breed inexistente funcionando corretamente');
});

Scenario('Deve retornar erro para endpoint inválido', async ({ I }) => {
  const response = await I.sendGetRequest('/endpoint/invalido');
  I.seeResponseCodeIs(404);
  console.log('✅ Erro para endpoint inválido funcionando corretamente');
});

Scenario('Deve retornar erro para breed com caracteres especiais', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/dog@#$/images');
  I.seeResponseCodeIs(404);
  console.log('✅ Erro para breed com caracteres especiais funcionando corretamente');
});

Scenario('Deve tratar corretamente breed com números', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/breed123/images');
  I.seeResponseCodeIs(404);
  I.seeResponseContainsJson({
    status: 'error'
  });
  console.log('✅ Erro para breed com números funcionando corretamente');
});