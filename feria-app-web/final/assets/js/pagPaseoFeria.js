function pagVerMas() {
    const btnVerMas = document.getElementById('btnVerMas');
    const pagina = document.getElementById('pagVerMas');
    $(btnVerMas).click(function() {
        $(pagina).slideToggle();
        if (btnVerMas.textContent == "Ver más") {
            btnVerMas.textContent="Ver menos";
        } else if (btnVerMas.textContent == "Ver menos") {
            btnVerMas.textContent="Ver más";
        }
    });
}

pagVerMas();