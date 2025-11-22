describe('JSONPlaceholder API Tests', () => {

    // 1. GET isteği ile tüm postları kontrol et
    it('GET /posts should return 100 posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.length(100);
        });
    });

    // 2. GET isteğinde query parametre ile filtreleme
    it('GET /posts with userId=1 should return posts of user 1', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            qs: { userId: 1 }
        }).then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach(post => {
                expect(post.userId).to.eq(1);
            });
        });
    });

    // 3. GET isteğinde özel header kontrolü
    it('GET /posts with custom header', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: { 'User-Agent': 'Cypress-Test' }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
        });
    });

    // 4. POST isteği ile yeni post oluştur
    it('POST /posts should create new post', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'Test Title',
            body: 'Test Body',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.include({ title: 'Test Title', body: 'Test Body', userId: 1 });
        });
    });

    // 5. PUT isteği ile post güncelleme
    it('PUT /posts/1 should update post', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Updated Title');
        });
    });

    // 6. PATCH isteği ile post başlığını güncelle
    it('PATCH /posts/1 should update only title', () => {
        cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
            title: 'Patched Title'
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.title).to.eq('Patched Title');
        });
    });

    // 7. DELETE isteği ile post silme
    it('DELETE /posts/1 should return empty object', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq({});
        });
    });

    // 8. Rastgele query parametre ile test
    it('GET /posts with random userId', () => {
        const randomUserId = Math.floor(Math.random() * 10) + 1;
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            qs: { userId: randomUserId }
        }).then((response) => {
            expect(response.status).to.eq(200);
            response.body.forEach(post => expect(post.userId).to.eq(randomUserId));
        });
    });

    // 9. Yanıt süresini kontrol et
    it('GET /posts response time should be < 1000ms', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {
            expect(response.duration).to.be.lessThan(1000);
        });
    });

    // 10. Yanıt gövdesinin formatı
    it('GET /users should return array of users with correct keys', () => {
        cy.request('https://jsonplaceholder.typicode.com/users').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            response.body.forEach(user => {
                expect(user).to.have.all.keys(
                    'id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'
                );
            });
        });
    });

});
