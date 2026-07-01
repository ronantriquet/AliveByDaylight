console.log("✅ builds.js chargé !");

const builds = {
    'debutant-starter': {
        title: '🔰 Débutant — Starter',
        items: [
            {
                name: 'Build Starter Débutant',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Kindred' },
                    { src: "assets/Survivors/General Survivor/With Backgrounds/We_ll Make It/We_ll Make It III.png", alt: "We'll Make It" },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/Dark Sense/Dark Sense III.png', alt: 'Dark Sense' },
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
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Kindred' },
                    { src: 'assets/Survivors/Claudette Morel/With Backgrounds/Self Care III.png', alt: 'Self Care' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
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
    'debutant-nouveau': {
        title: '🛡 Débutant — Nouveau',
        items: [
            {
                name: 'Nom du build',
                perks: [
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Perk 1' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Perk 2' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Perk 3' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Perk 4' },
                ],
                tips: [
                    'Tip 1',
                    'Tip 2',
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
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Kindred' },
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
                    { src: "assets/Survivors/General Survivor/With Backgrounds/We_ll Make It/We_ll Make It III.png", alt: "We'll Make It" },
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
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Kindred' },
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
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/kindred/Kindred III.png', alt: 'Kindred' },
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
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/Deja Vu/Deja Vu III.png', alt: 'Deja Vu' },
                    { src: 'assets/Survivors/Felix Richter/With Backgrounds/Built to Last III.png', alt: 'Built to Last' },
                    { src: 'assets/Survivors/Rebecca Chambers/With Backgrounds/Hyperfocus III.png', alt: 'Hyperfocus' },
                    { src: 'assets/Survivors/General Survivor/With Backgrounds/spine chill/Spine Chill III.png', alt: 'Spine Chill' },
                ],
                tips: [
                    '<strong>Déjà Vu</strong> pour repérer les générateurs rapidement.',
                    '<strong>Built to Last</strong> pour garder des outils plus longtemps.',
                    '<strong>Hyperfocus</strong> pour une progression ultra-rapide des générateurs.',
                    '<strong>Spine Chill</strong> pour éviter les surprises du tueur.',
                ]
            }
        ]
    }
};

// ====== POPUP FUNCTIONS ======

function openPopup(buildId) {
    console.log("🔓 Ouverture popup :", buildId);

    const build = builds[buildId];
    if (!build) {
        console.error("Build non trouvé :", buildId);
        return;
    }

    const popupOverlay = document.getElementById('popupOverlay');
    const popupTitle = document.getElementById('popupTitle');
    const popupContent = document.getElementById('popupContent');

    popupTitle.textContent = build.title;
    popupContent.innerHTML = '';

    build.items.forEach(item => {
        let html = `<div class="popup-item">
            <h3>${item.name}</h3>
            <div class="popup-perks">`;

        item.perks.forEach(perk => {
            html += `<img src="${perk.src}" alt="${perk.alt}" title="${perk.alt}">`;
        });

        html += `</div>`;

        if (item.tips) {
            html += `<div class="popup-tips"><ul>`;
            item.tips.forEach(tip => {
                html += `<li>${tip}</li>`;
            });
            html += `</ul></div>`;
        }

        html += `</div>`;
        popupContent.innerHTML += html;
    });

    popupOverlay.classList.add('active');
}

function closePopup() {
    console.log("🔒 Fermeture popup");
    const popupOverlay = document.getElementById('popupOverlay');
    popupOverlay.classList.remove('active');
}

function closeOnOverlay(event) {
    if (event.target.id === 'popupOverlay') {
        closePopup();
    }
}
