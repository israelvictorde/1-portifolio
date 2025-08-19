const redesSociais = [
    { nome: 'GitHub', url: 'https://github.com/israelvictorde' },
    { nome: 'Instagram', url: 'https://www.instagram.com/israel.victor.9480111/' },
    { nome: 'LinkedIn', url: 'https://www.linkedin.com/in/israel-victor-58b585266/' }
];

const trabalhosAcademicos = [
    { nome: 'Projeto Volkswagen', url: 'https://docs.google.com/document/d/1bXPm_-ahdJ7F8_zjfqF-LxSXhikXShty/edit?usp=sharing&ouid=108871529342128973715&rtpof=true&sd=true' },
    { nome: 'Projeto Volvo', url: 'https://docs.google.com/document/d/10MsUQwvzoZiW9nv8OjIZOPU_xAdN4Gvr_W_Iv24h8tY/edit?usp=sharing' },
    { nome: 'Projeto Brose', url: 'https://docs.google.com/document/d/13GIsfwa9a3V2Q_Y_2NwWb63sulOoQUWh/edit?usp=sharing&rtpof=true&sd=true' }
];

function criarLinks(itens, containerId) {
    const container = document.getElementById(containerId);
    itens.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.textContent = item.nome;
        link.target = '_blank'; // Abre em uma nova aba
        link.style.display = 'block'; // Para que os links apareçam em coluna
        link.style.marginBottom = '5px'; // Adiciona um pouco de espaço entre os links
        container.appendChild(link);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    criarLinks(redesSociais, 'redes-sociais');
    criarLinks(trabalhosAcademicos, 'trabalhos-academicos');

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const button = item.querySelector('button');
        const submenu = item.querySelector('.submenu');

        button.addEventListener('click', function () {
            menuItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.querySelector('.submenu').style.display === 'block') {
                    otherItem.querySelector('.submenu').style.display = 'none';
                }
            });
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

    document.addEventListener('click', function (event) {
        menuItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (!item.contains(event.target) && submenu && submenu.style.display === 'block') {
                submenu.style.display = 'none';
            }
        });
    });

    const habilidadesButton = document.getElementById('Habilidades');
    const habilidadesDiv = document.getElementById('Habiliddes');

    habilidadesButton.addEventListener('click', () => {
        habilidadesDiv.style.display = habilidadesDiv.style.display === 'none' ? 'block' : 'none';
    });

    const sobreMimButton = document.getElementById('sobre-mim-button'); // Corrigido o ID para 'sobre-mim-button'
    const sobreMimDiv = document.getElementById('sobre-mim-info'); // Corrigido o ID para 'sobre-mim-info'

    sobreMimButton.addEventListener('click', () => {
        sobreMimDiv.style.display = sobreMimDiv.style.display === 'none' ? 'block' : 'none';
    });
});