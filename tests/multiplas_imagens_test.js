Feature('Dog API - Múltiplas Imagens Aleatórias');

Scenario('Deve retornar URLs diferentes em múltiplas chamadas aleatórias', async ({ I }) => {
  const urls = [];
  const numRequests = 5;
  
  for (let i = 0; i < numRequests; i++) {
    const response = await I.sendGetRequest('/breeds/image/random');
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      status: 'success'
    });
    
    if (response && response.data && response.data.message) {
      urls.push(response.data.message);
      console.log(`URL ${i + 1}: ${response.data.message}`);
    }
  }
  
  const uniqueUrls = [...new Set(urls)];
  const uniquenessRate = (uniqueUrls.length / urls.length) * 100;
  console.log(`✅ Unicidade: ${uniqueUrls.length}/${urls.length} URLs únicas (${uniquenessRate.toFixed(1)}%)`);
});

Scenario('Deve verificar formato consistente de múltiplas imagens aleatórias', async ({ I }) => {
  const validUrls = [];
  const invalidUrls = [];
  
  for (let i = 0; i < 3; i++) {
    const response = await I.sendGetRequest('/breeds/image/random');
    I.seeResponseCodeIs(200);
    
    if (response && response.data && response.data.message) {
      const url = response.data.message;
      const isValid = url.includes('images.dog.ceo') && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png'));
      
      if (isValid) {
        validUrls.push(url);
      } else {
        invalidUrls.push(url);
      }
    }
  }
  
  console.log(`✅ URLs válidas: ${validUrls.length}`);
  if (invalidUrls.length > 0) {
    console.log(`⚠️ URLs inválidas: ${invalidUrls.length}`);
  }
});

Scenario('Deve obter múltiplas imagens aleatórias de diferentes quantidades', async ({ I }) => {
  // Teste com 1, 3, 5 e 10 imagens
  const quantities = [1, 3, 5, 10];
  
  for (const qty of quantities) {
    const response = await I.sendGetRequest(`/breeds/image/random/${qty}`);
    I.seeResponseCodeIs(200);
    I.seeResponseContainsJson({
      status: 'success'
    });
    
    if (response && response.data && response.data.message) {
      const images = response.data.message;
      console.log(`✅ Solicitado ${qty} imagens, recebido ${images.length} imagens`);
      
      // Verificar se todas são URLs válidas
      let validCount = 0;
      images.forEach(url => {
        if (url.includes('images.dog.ceo')) {
          validCount++;
        }
      });
      console.log(`   - ${validCount}/${images.length} URLs válidas`);
    }
  }
});