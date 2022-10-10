import React from "react";

// em props, poderia ser feita desestruturacao Header({ title, children })
function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
}

// header definido com default de exportacao
// caso algum outro modulo importe com outro nome, o que sera exportado eh
// o header -> ex: import 'exemplo' from 'Header' importa Header por default
export default Header;