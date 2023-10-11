
const funcao = (a, b) => {

    return (a + b)
}

it('Calcula Soma', () => {

    const a = 2
    const b = 3

    const soma = funcao(a, b)

    expect(soma).toBe(5)
})