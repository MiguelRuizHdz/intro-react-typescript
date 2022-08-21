
export const TiposBasicos = () => {

    const nombre: string = 'Miguel';
    const edad: number = 20;
    const estaActivo: boolean = false;
    // eslint-disable-next-line
    const poderes: string[] = ['Velocidad', 'Volar', 'Respirar en el agua'];

    return (
        <>
            <h3>Tipos básicos</h3>   
            Mi nombre es { nombre } <br />
            Mi edad es { edad } <br />
            Usuario { (estaActivo) ? 'activo' : 'no-activo' } <br />
            Poderes: { poderes.join(', ') }
        </>
    )
}
