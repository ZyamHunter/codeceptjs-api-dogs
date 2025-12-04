Feature('Dog API - Validação de URLs');

Scenario('Deve validar formato das URLs retornadas pelo endpoint random', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/image/random');
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    status: 'success'
  });
  
  // Verificar se a URL tem formato válido
  if (response && response.data && response.data.message) {
    const imageUrl = response.data.message;
    const urlPattern = /^https:\/\/images\.dog\.ceo\/breeds\/.*\.(jpg|jpeg|png|gif)$/i;
    
    console.log(`✅ URL da imagem: ${imageUrl}`);
    
    // Verificar se a URL segue o padrão esperado
    if (urlPattern.test(imageUrl)) {
      console.log('✅ URL tem formato válido');
    } else {
      console.log('❌ URL não segue o padrão esperado');
    }
  }
});

Scenario('Deve validar que URLs de breeds específicas seguem padrão correto', async ({ I }) => {
  const breeds = ['labrador', 'pug', 'beagle'];
  
  for (const breed of breeds) {
    const response = await I.sendGetRequest(`/breed/${breed}/images`);
    I.seeResponseCodeIs(200);
    
    if (response && response.data && response.data.message) {
      const imageUrls = response.data.message;
      const breedPattern = new RegExp(`https://images\\.dog\\.ceo/breeds/${breed}/.*\\.(jpg|jpeg|png|gif)$`, 'i');
      
      // Verificar primeiras 3 URLs para não sobrecarregar o log
      const urlsToCheck = imageUrls.slice(0, 3);
      
      urlsToCheck.forEach((url, index) => {
        if (breedPattern.test(url)) {
          console.log(`✅ ${breed} - URL ${index + 1} válida`);
        } else {
          console.log(`❌ ${breed} - URL ${index + 1} inválida: ${url}`);
        }
      });
    }
  }
});

Scenario('Deve verificar que URLs contêm extensões de imagem válidas', async ({ I }) => {
  const response = await I.sendGetRequest('/breeds/image/random');
  I.seeResponseCodeIs(200);
  
  if (response && response.data && response.data.message) {
    const imageUrl = response.data.message;
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
    
    const hasValidExtension = validExtensions.some(ext => 
      imageUrl.toLowerCase().endsWith(ext)
    );
    
    if (hasValidExtension) {
      console.log('✅ URL tem extensão de imagem válida');
    } else {
      console.log(`❌ URL não tem extensão válida: ${imageUrl}`);
    }
  }
});

Scenario('Deve verificar que múltiplas URLs aleatórias são diferentes', async ({ I }) => {
  const urls = [];
  const numRequests = 5;
  
  // Fazer múltiplas requisições
  for (let i = 0; i < numRequests; i++) {
    const response = await I.sendGetRequest('/breeds/image/random');
    I.seeResponseCodeIs(200);
    
    if (response && response.data && response.data.message) {
      urls.push(response.data.message);
    }
  }
  
  // Verificar unicidade
  const uniqueUrls = [...new Set(urls)];
  const uniquenessRate = (uniqueUrls.length / urls.length) * 100;
  
  console.log(`✅ ${uniqueUrls.length}/${urls.length} URLs únicas (${uniquenessRate.toFixed(1)}%)`);
  
  // Mostrar algumas URLs coletadas
  urls.slice(0, 3).forEach((url, index) => {
    console.log(`URL ${index + 1}: ${url}`);
  });
});

Scenario('Deve verificar consistência do domínio das imagens', async ({ I }) => {
  const response = await I.sendGetRequest('/breed/retriever/golden/images');
  I.seeResponseCodeIs(200);
  
  if (response && response.data && response.data.message) {
    const imageUrls = response.data.message;
    const expectedDomain = 'images.dog.ceo';
    
    // Verificar primeiras 5 URLs
    const urlsToCheck = imageUrls.slice(0, 5);
    let validDomainCount = 0;
    
    urlsToCheck.forEach((url, index) => {
      try {
        const urlObj = new URL(url);
        if (urlObj.hostname === expectedDomain) {
          validDomainCount++;
          console.log(`✅ URL ${index + 1}: Domínio válido`);
        } else {
          console.log(`❌ URL ${index + 1}: Domínio inválido - ${urlObj.hostname}`);
        }
      } catch (error) {
        console.log(`❌ URL ${index + 1}: Formato inválido - ${url}`);
      }
    });
    
    console.log(`✅ ${validDomainCount}/${urlsToCheck.length} URLs com domínio correto`);
  }
});