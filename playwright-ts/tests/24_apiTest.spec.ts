import { test, expect } from '@playwright/test'

test('Get Method', async ({ request }) => {
    const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody[0].category.id).toBe(1);
    expect(responseBody[0].photoUrls[0]).toBe('string');
});

test('Post Method', async ({ request }) => {
    let requestBody = {
        "id": 6568556,
        "category": {
            "id": 1016032,
            "name": "string"
        },
        "name": "dog viki",
        "photoUrls": [
            "http://vikicatdog.com"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }


    const response = await request.post('https://petstore.swagger.io/v2/pet', {
        data: requestBody,
        headers: { "Content-Type": "application/json" }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(requestBody.name);
});

test('Put Method', async ({ request }) => {
    let requestBody = {
        "id": 6568556,
        "category": {
            "id": 0,
            "name": "string"
        },
        "name": "doggie-catty",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
        "status": "available"
    }

    const response = await request.put('https://petstore.swagger.io/v2/pet', {
        data: requestBody,
        headers: { "Content-Type": "application/json" }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.name).toBe(requestBody.name);
});

test('Delete Method', async ({ request }) => {
    const petId = 6568556;

    const response = await request.delete(`https://petstore.swagger.io/v2/pet/${petId}`, {
        headers: { 
            "Content-Type": "application/json",
            "api_key":"123456789"
         }
    });
    const responseBody = await response.json();
    expect(response.status()).toBe(200);
    expect(responseBody.code).toBe(200);
    expect(responseBody.message).toBe(petId.toString());
});