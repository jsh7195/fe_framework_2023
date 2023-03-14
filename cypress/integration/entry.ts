describe('메인 접속', () => {
  it('메인화면, /legal/list API호출', () => {
    cy.intercept('POST', 'https://bpdiarydev.openit.co.kr/legal/list').as('legalList');
    cy.visit('http://localhost:8081');
    cy.wait('@legalList').then((interception:any) => {
      expect(interception.response.statusCode).to.equal(200);
    });
  });
});
