const url = '/api/openpix/v1/charge';

it('should not accept invalid payload', async () => {
    const application = await createApplication();
    const authorization = base64(
        `${application.clientId}:${application.clientSecret}`,
    );

    const payload = {
        correlationID: 'correlationID',
        value: 'value',
        comment: 'good',
    };

    const response = await request(app.callback())
        .post(url)
        .set({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authorization,
        })
        .send(JSON.stringify(payload));

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
        error:
            'value must be a `number` type, but the final value was: `NaN` (cast from the value `"value"`).',
    });
});