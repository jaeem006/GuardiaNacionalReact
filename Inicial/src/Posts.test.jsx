import { render, screen } from '@testing-library/react';
import Posts from './Posts';

describe("Pruebas de Posts", ()=> {
    test("La lista no es vacía", async () => {
        render(<Posts/>)

        const lista = await screen.findAllByRole("listitem")
        expect(lista).not.toHaveLength(0);
    })
})