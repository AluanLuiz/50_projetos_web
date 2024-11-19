async function buscarCores() {
    try {
        // Obtendo os dados do JSON
        const resposta = await fetch('colors.json')
        const data = await resposta.json()

        // Verificando o JSON
        const cores = data.colors
        if (!Array.isArray(cores)) {
            console.error("Erro: O JSON não contém um array chamado 'colors'.")
            return
        }

        // Valores dos inputs
        const color1 = document.getElementById('Color1').value
        const color2 = document.getElementById('Color2').value
        const color3 = document.getElementById('Color3').value

        // Lista dos inputs
        const coresSelecionadas = [color1, color2, color3]

        // Elemento onde os resultados serão exibidos
        const resultados = document.getElementById('resultados')
        resultados.innerHTML = '' // Limpa resultados anteriores

        // Busca e exibe as cores selecionadas
        coresSelecionadas.forEach(cor => {
            // Busca a cor no JSON pelo código
            const corEncontrada = cores.find(c => c.color_code.toLowerCase() === cor.toLowerCase())

            // Se a cor for encontrada
            if (corEncontrada) {
                // Cria o conteúdo para exibição
                const div = document.createElement('div')
                div.innerHTML = `
                    <div style="display: flex; align-items: center;">
                        <div style="width: 50px; height: 50px; background-color: ${corEncontrada.color_code}; margin-right: 10px;"></div>
                        <div>
                            <strong>Nome:</strong> ${corEncontrada.color_name}<br>
                            <strong>Código:</strong> ${corEncontrada.color_code}
                        </div>
                    </div>
                `
                resultados.appendChild(div)
            } else {
                // Se a cor não for encontrada
                const div = document.createElement('div')
                div.innerHTML = `
                <div style="display: flex; align-items: center;">    
                    <div style="width: 50px; height: 50px; background-color: ${cor}; margin-right: 10px;"></div>
                    <div>
                        <strong>Cor não encontrada:</strong> ${cor}
                    </div>
                </div>
                `
                resultados.appendChild(div)
            }
        })
    } catch (error) {
        console.error("Erro ao buscar o JSON:", error)
    }
}
