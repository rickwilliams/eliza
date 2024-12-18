async function testEndpoints() {
    const endpoints = [
        'http://localhost:3001/api/agents',
        'http://localhost:3001/api/test'  // The test endpoint we added earlier
    ];

    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            console.log(`✓ ${endpoint}:`, data);
        } catch (error) {
            console.error(`✗ ${endpoint}:`, error);
        }
    }
}

testEndpoints();