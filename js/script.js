document.addEventListener('DOMContentLoaded', () => {
    // Access data from data.js
    const stepsDB = window.ForroDB || [];

    // Validation
    if (!stepsDB.length) {
        console.error("Database failed to load. Ensure data.js is included before script.js");
        alert("Erro: Banco de dados de passos não encontrado.");
        return;
    }

    // UI References
    const generateBtn = document.getElementById('generate-btn');
    const resultsArea = document.getElementById('results-area');
    const styleSelect = document.getElementById('style-select');
    const countInput = document.getElementById('step-count');
    const mustIncludeSelect = document.getElementById('must-include');

    // Initial populate
    populateMustInclude(stepsDB);

    // Populate "Must Include" select
    function populateMustInclude(steps) {
        mustIncludeSelect.innerHTML = '<option value="">Nenhum específico</option>';
        steps.sort((a, b) => a.name.localeCompare(b.name)).forEach(step => {
            const option = document.createElement('option');
            option.value = step.id;
            const typeLabel = Array.isArray(step.type) ? step.type.join(' / ') : step.type;
            option.textContent = `${step.name} (${typeLabel})`;
            mustIncludeSelect.appendChild(option);
        });
    }

    // Generator Logic
    generateBtn.addEventListener('click', () => {
        const style = styleSelect.value;
        const count = parseInt(countInput.value) || 8;
        const mustIncludeId = mustIncludeSelect.value;
        const avoidBases = document.getElementById('avoid-bases').checked;

        // Filter valid steps based on style
        const availableSteps = stepsDB.filter(step => {
            if (style === 'all') return true;
            if (Array.isArray(step.type)) return step.type.includes(style);
            return step.type === style;
        });

        if (availableSteps.length === 0) {
            alert("Nenhum passo encontrado para esse estilo!");
            return;
        }

        let sequence = [];
        let success = false;
        let attempts = 0;
        const MAX_ATTEMPTS = 50;

        // Simplistic retry logic to ensure "Must Include" is present if requested
        while (!success && attempts < MAX_ATTEMPTS) {
            attempts++;
            sequence = generateSequence(availableSteps, count, avoidBases);

            if (mustIncludeId) {
                const hasStep = sequence.some(s => s.id === mustIncludeId);
                if (hasStep) success = true;
            } else {
                success = true;
            }
        }

        if (mustIncludeId && !success) {
            // Fallback: If random generation failed to include it, force it (simplified)
            // Ideally we'd build Around it, but let's just show what we got and warn.
            console.warn("Could not naturally fit the mandatory step in random tries");
        }

        renderSequence(sequence);
    });

    function generateSequence(pool, length, avoidBases) {
        let seq = [];

        // Pick random start step
        let currentStep = pool[Math.floor(Math.random() * pool.length)];
        seq.push(currentStep);

        for (let i = 1; i < length; i++) {
            // Logic: Previous Final Weight dictates Next Initial Weight.
            // Rule: Match directly.

            const requiredWeight = currentStep.final_weight;

            let candidates = pool.filter(s => s.initial_weight === requiredWeight);

            // Filter out bases if requested and current step is also a base
            if (avoidBases && currentStep.is_basic) {
                const nonBasicCandidates = candidates.filter(s => !s.is_basic);
                // Only filter if we have other options. If we only have bases, we must use them to continue.
                if (nonBasicCandidates.length > 0) {
                    candidates = nonBasicCandidates;
                }
            }

            if (candidates.length === 0) break; // Dead end

            const nextStep = candidates[Math.floor(Math.random() * candidates.length)];
            seq.push(nextStep);
            currentStep = nextStep;
        }

        return seq;
    }

    function renderSequence(sequence) {
        resultsArea.innerHTML = '';

        // Animation delay index
        let delay = 0;

        const mapSide = (side) => side === 'L' ? 'Esq' : 'Dir';

        sequence.forEach((step, index) => {
            // Connector (except for first item)
            if (index > 0) {
                const connector = document.createElement('div');
                connector.className = 'connector';
                connector.style.animationDelay = `${delay * 0.1}s`;
                resultsArea.appendChild(connector);
            }

            const card = document.createElement('div');
            card.className = 'step-card';
            card.style.animationDelay = `${delay * 0.1}s`;

            // Handle multiple types for display
            let types = Array.isArray(step.type) ? step.type : [step.type];
            let tagsHtml = types.map(t => {
                const typeClass = t === 'Roots' ? 'tag-roots' : 'tag-univ';
                return `<span class="tag ${typeClass}">${t}</span>`;
            }).join(' ');

            card.innerHTML = `
                <div class="step-info">
                    <div class="step-header">
                        <h3>${step.name}</h3>
                        <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </div>
                    <div class="step-meta">
                        ${tagsHtml}
                        <span>⏱ ${step.beats}t</span>
                        <span>⚖️ Peso: ${mapSide(step.initial_weight)}</span>
                    </div>
                </div>
                <div class="step-actions">
                    <div class="step-indicator">
                        ${index + 1}
                    </div>
                    <button class="youtube-btn" title="Ver no YouTube">
                        <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                    </button>
                </div>
            `;

            const ytBtn = card.querySelector('.youtube-btn');
            ytBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                const query = encodeURIComponent(`${step.name} passo de forró`);
                window.open(`https://www.youtube.com/results?search_query=${query}`, '_blank');
            });

            resultsArea.appendChild(card);
            delay++;
        });
    }
});
