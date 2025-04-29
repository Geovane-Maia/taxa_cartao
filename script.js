  function calcular() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const parcelas = parseInt(document.getElementById('parcelas').value);

    if (isNaN(valorVenda) || isNaN(taxa) || isNaN(parcelas) || parcelas < 1) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    // Calcula o total da taxa para todas as parcelas
    const taxaTotalPercentual = taxa * parcelas;

    // Acrescenta a taxa total ao valor da venda
    const valorComAcrescimo = valorVenda * (1 + taxaTotalPercentual / 100);

    // Valor de cada parcela com acréscimo
    const valorParcela = valorComAcrescimo / parcelas;

    // Exibe o resultado formatado
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('resultado').innerHTML = `
      <strong>Resumo:</strong><br/>
      Valor Original da Venda: R$ ${valorVenda.toFixed(2)}<br/>
      Taxa por Parcela: ${taxa.toFixed(2)}%<br/>
      Parcelado em: ${parcelas}x<br/>
      Acréscimo Total: ${taxaTotalPercentual.toFixed(2)}%<br/>
      Valor Final com Acréscimo: R$ ${valorComAcrescimo.toFixed(2)}<br/>
      Valor de Cada Parcela: R$ ${valorParcela.toFixed(2)}
    `;
  }

