Feature('Dog API - Breeds Específicas');

Scenario('GET /breed/retriever/golden/images - Deve retornar imagens de golden retriever', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/retriever/golden/images');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  I.seeResponseContainsKeys(['message', 'status']);

  // Log informativo
  if (response && response.data && response.data.message) {
    console.log(`✅ Golden retriever tem ${response.data.message.length} imagens`);
  }
});

Scenario('GET /breed/beagle/images - Deve retornar imagens de beagle', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/beagle/images');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  I.seeResponseContainsKeys(['message', 'status']);

  // Log informativo
  if (response && response.data && response.data.message) {
    console.log(`✅ Beagle tem ${response.data.message.length} imagens`);
  }
});

Scenario('GET /breed/pug/images - Deve retornar imagens de pug', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/pug/images');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  I.seeResponseContainsKeys(['message', 'status']);

  // Log informativo  
  if (response && response.data && response.data.message) {
    console.log(`✅ Pug tem ${response.data.message.length} imagens`);
  }
});

Scenario('GET /breed/boxer/images - Deve retornar imagens de boxer', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/boxer/images');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  I.seeResponseContainsKeys(['message', 'status']);

  // Log informativo
  if (response && response.data && response.data.message) {
    console.log(`✅ Boxer tem ${response.data.message.length} imagens`);
  }
});

Scenario('GET /breed/rottweiler/images - Deve retornar imagens de rottweiler', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/rottweiler/images');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  I.seeResponseContainsKeys(['message', 'status']);

  // Log informativo
  if (response && response.data && response.data.message) {
    console.log(`✅ Rottweiler tem ${response.data.message.length} imagens`);
  }
});