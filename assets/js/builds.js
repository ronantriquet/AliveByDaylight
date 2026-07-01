const builds = {
    'debutant-starter': {
        title: '🔰 Débutant — Starter',
        items: [
            {
                name: 'Build Starter Débutant',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//kindred/Kindred III.png', alt: 'Kindred' },
                    { src: "assets/Survivors/General Survivor/With Backgrounds//We_ll Make It/We_ll Make It III.png", alt: "We'll Make It" },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//Dark Sense/Dark Sense III.png', alt: 'Dark Sense' },
                ],
                tips: [
                    'Uniquement des perks de base disponibles dès le début.',
                    '<strong>Kindred</strong> & <strong>WMI</strong> donnent des infos précieuses.',
                    '<strong>Déjà Vu</strong> pour repérer les gens rapidement.',
                    '<strong>Dark Sense</strong> pour garder un œil sur le tueur.',
                ]
            }
        ]
    },
    'debutant-safe': {
        title: '🔰 Débutant — Safe',
        items: [
            {
                name: 'Build Safe Débutant',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//kindred/Kindred III.png', alt: 'Kindred' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Self Care III.png', alt: 'Self Care' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/Bill Overbeck/With Backgrounds/Borrowed Time III.png', alt: 'Borrowed Time' },
                ],
                tips: [
                    '<strong>Self Care</strong> pour se soigner sans coequipier.',
                    '<strong>Kindred</strong> pour voir ce que font vos alliés.',
                    '<strong>Déjà Vu</strong> pour identifier les gens rapidement.',
                    '<strong>Borrowed Time</strong> pour sauver en sécurité.',
                ]
            }
        ]
    },
    'healer-meta': {
        title: '💚 Healer — Méta',
        items: [
            {
                name: 'Build Healer Méta',
                perks: [
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Self Care III.png', alt: 'Self Care' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Botany Knowledge III.png', alt: 'Botany Knowledge' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Empathy III.png', alt: 'Empathy' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//kindred/Kindred III.png', alt: 'Kindred' },
                ],
                tips: [
                    'Heal tes coequipiers rapidement grâce à <strong>We\'ll Make It</strong>.',
                    'Utilise <strong>Botany Knowledge</strong> pour réduire le temps de soin.',
                    '<strong>Empathy</strong> te permet de toujours localiser les blessés.',
                    '<strong>Kindred</strong> optimise les décrochages en équipe.',
                ]
            }
        ]
    },
    'healer-off': {
        title: '💚 Healer — Offensif',
        items: [
            {
                name: 'Build Healer Offensif',
                perks: [
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Empathy III.png', alt: 'Empathy' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Botany Knowledge III.png', alt: 'Botany Knowledge' },
                    { src: "assets/Survivors/General Survivor/With Backgrounds//We_ll Make It/We_ll Make It III.png", alt: "We'll Make It" },
                    { src: 'assets/Survivors/Bill Overbeck/With Backgrounds/Borrowed Time III.png', alt: 'Borrowed Time' },
                ],
                tips: [
                    '<strong>Empathy</strong> pour trouver instantanément les blessés.',
                    '<strong>Botany Knowledge</strong> pour soigner 33% plus vite.',
                    '<strong>We\'ll Make It</strong> bonus de vitesse après décrochage.',
                    '<strong>Borrowed Time</strong> pour des décrochages sécurisés sous crochet.',
                ]
            }
        ]
    },
    'loop-compet': {
        title: '🏃 Looper — Compétitif',
        items: [
            {
                name: 'Build Loop Compétitif',
                perks: [
                    { src: 'assets/Survivors/David King/With Backgrounds/Dead Hard III.png', alt: 'Dead Hard' },
                    { src: 'assets/Survivors/Feng Min/With Backgrounds/Lithe III.png', alt: 'Lithe' },
                    { src: 'assets/Survivors/Nea Karlsson/With Backgrounds/Urban Evasion III.png', alt: 'Urban Evasion' },
                    { src: 'assets/Survivors/Jonah Vasquez/With Backgrounds/Overcome III.png', alt: 'Overcome' },
                ],
                tips: [
                    '<strong>Dead Hard</strong> pour gagner de la distance en chase.',
                    '<strong>Lithe</strong> pour sprinter après un vault rapide.',
                    '<strong>Urban Evasion</strong> pour se repositionner discrètement.',
                    '<strong>Overcome</strong> pour fuir rapidement après une touche.',
                ]
            }
        ]
    },
    'loop-vault': {
        title: '🏃 Looper — Vault Speed',
        items: [
            {
                name: 'Build Vault Speed',
                perks: [
                    { src: 'assets/Survivors/Feng Min/With Backgrounds/Lithe III.png', alt: 'Lithe' },
                    { src: 'assets/Survivors/Kate Denson/With Backgrounds/Windows of Opportunity III.png', alt: 'Windows of Opportunity' },
                    { src: 'assets/Survivors/David King/With Backgrounds/Dead Hard III.png', alt: 'Dead Hard' },
                    { src: 'assets/Survivors/Jonah Vasquez/With Backgrounds/Overcome III.png', alt: 'Overcome' },
                ],
                tips: [
                    '<strong>Windows of Opportunity</strong> pour toujours trouver un loop.',
                    '<strong>Lithe</strong> pour sprinter après chaque vault.',
                    '<strong>Dead Hard</strong> pour éviter une touche décisive.',
                    '<strong>Overcome</strong> comme seconde chance de fuite.',
                ]
            }
        ]
    },
    'soloq-meta': {
        title: '🎯 SoloQ — Méta',
        items: [
            {
                name: 'Build SoloQ Méta',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//kindred/Kindred III.png', alt: 'Kindred' },
                    { src: 'assets/Survivors/Kate Denson/With Backgrounds/Windows of Opportunity III.png', alt: 'Windows of Opportunity' },
                    { src: 'assets/Survivors/Bill Overbeck/With Backgrounds/Borrowed Time III.png', alt: 'Borrowed Time' },
                    { src: 'assets/Survivors/Laurie Strode/With Backgrounds/Decisive Strike III.png', alt: 'Decisive Strike' },
                ],
                tips: [
                    '<strong>Kindred</strong> compense le manque de communication en SoloQ.',
                    '<strong>Windows of Opportunity</strong> pour toujours trouver un loop.',
                    '<strong>Borrowed Time</strong> protège les décrochages risqués.',
                    '<strong>Decisive Strike</strong> contre le tunnel agressif.',
                ]
            }
        ]
    },
    'soloq-safe': {
        title: '🎯 SoloQ — Safe',
        items: [
            {
                name: 'Build SoloQ Autonome',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//kindred/Kindred III.png', alt: 'Kindred' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Self Care III.png', alt: 'Self Care' },
                    { src: 'assets/Survivors/Laurie Strode/With Backgrounds/Decisive Strike III.png', alt: 'Decisive Strike' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Botany Knowledge III.png', alt: 'Botany Knowledge' },
                ],
                tips: [
                    '<strong>Self Care</strong> + <strong>Botany</strong> pour être totalement autonome.',
                    '<strong>Kindred</strong> pour ne jamais être surpris par la situation.',
                    '<strong>Decisive Strike</strong> pour punir le tunnel.',
                    'Idéal quand vos coequipiers ne soignent pas.',
                ]
            }
        ]
    },
    'genrush-meta': {
        title: '⚡ Genrush — Méta',
        items: [
            {
                name: 'Build Genrush Méta',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/Felix Richter/With Backgrounds/Built to Last III.png', alt: 'Built to Last' },
                    { src: 'assets/Survivors/Rebecca Chambers/With Backgrounds/Hyperfocus III.png', alt: 'Hyperfocus' },
                    { src: 'assets/Survivors/David Tapp/With Backgrounds/Stake Out III.png', alt: 'Stake Out' },
                ],
                tips: [
                    '<strong>Deja Vu</strong> pour identifier les 3 gens les plus proches.',
                    '<strong>Built to Last</strong> pour recharger sa boite à outils.',
                    '<strong>Hyperfocus</strong> pour des great skill checks en série.',
                    '<strong>Stake Out</strong> pour accumuler des tokens et progresser vite.',
                ]
            }
        ]
    },
    'genrush-toolbox': {
        title: '⚡ Genrush — Toolbox',
        items: [
            {
                name: 'Build Toolbox Rush',
                perks: [
                    { src: 'assets/Survivors/Rebecca Chambers/With Backgrounds/Hyperfocus III.png', alt: 'Hyperfocus' },
                    { src: 'assets/Survivors/Felix Richter/With Backgrounds/Built to Last III.png', alt: 'Built to Last' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds//Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/David Tapp/With Backgrounds/Stake Out III.png', alt: 'Stake Out' },
                ],
                tips: [
                    'Apporte toujours une boite à outils en jeu.',
                    '<strong>Built to Last</strong> la recharge à 99% après utilisation.',
                    '<strong>Hyperfocus</strong> maximise l\'efficacité de chaque skill check.',
                    '<strong>Stake Out</strong> génère des great checks en continu.',
                ]
            }
        ]
    },
};

function openPopup(id) {
    const data = builds[id];
    if (!data) return;

    document.getElementById('popupTitle').textContent = data.title;

    let html = '';
    data.items.forEach(build => {
        html += `<div class="popup-build">`;
        html += `<h3>${build.name}</h3>`;
        html += `<div class="perks-row">`;
        build.perks.forEach(p => {
            html += `<div class="perk-icon"><img src="${p.src}" alt="${p.alt}" onerror="this.style.opacity='0.3'"></div>`;
        });
        html += `</div>`;
        html += `<ol class="build-tips">`;
        build.tips.forEach(t => {
            html += `<li>${t}</li>`;
        });
        html += `</ol></div>`;
    });

    document.getElementById('popupContent').innerHTML = html;
    document.getElementById('popupOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popupOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

function closeOnOverlay(e) {
    if (e.target === document.getElementById('popupOverlay')) closePopup();
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePopup();
});
