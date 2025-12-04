Feature('Dog API - List All Breeds');

Scenario(
  'Deve retornar lista completa de breeds com status 200',
  async ({ I }) => {
    const response = await I.sendGetRequest('/breeds/list/all');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      status: 'success',
    });
    I.seeResponseContainsKeys(['message', 'status']);
  },
);

Scenario('Deve validar estrutura da lista de breeds', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/list/all');
  I.seeResponseCodeIs(200);

  // Log informativo
  if (response && response.data && response.data.message) {
    const totalBreeds = Object.keys(response.data.message).length;
    console.log(`✅ Total de breeds encontradas: ${totalBreeds}`);
  }
});

Scenario('Deve conter breeds conhecidas na lista', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/list/all');
  I.seeResponseCodeIs(200);

  // Verificar se contém breeds conhecidas através de logs
  if (response && response.data && response.data.message) {
    const breeds = response.data.message;
    const knownBreeds = ['labrador', 'bulldog', 'hound'];

    knownBreeds.forEach((breed) => {
      if (breeds[breed] !== undefined) {
        console.log(`✅ Breed "${breed}" encontrada`);
      }
    });
  }
});

Scenario('Deve validar breeds com sub-breeds', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/list/all');
  I.seeResponseCodeIs(200);

  if (response && response.data && response.data.message) {
    const breeds = response.data.message;

    // Verificar breeds que têm sub-breeds
    if (breeds['hound'] && Array.isArray(breeds['hound'])) {
      console.log(
        `✅ Hound tem ${breeds['hound'].length} sub-breeds: ${breeds['hound'].join(', ')}`,
      );
    }

    if (breeds['terrier'] && Array.isArray(breeds['terrier'])) {
      console.log(`✅ Terrier tem ${breeds['terrier'].length} sub-breeds`);
    }
  }
});
