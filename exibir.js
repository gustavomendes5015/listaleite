window.onload = function(){
	var jose = localStorage.getItem('jose');
	var primo = localStorage.getItem('primo');
	var lourenco = localStorage.getItem('lourenco');
	
	var qtdJose = jose.split(",").sort();
	var qtdPrimo = primo.split(",").sort();
	var qtdLourenco = lourenco.split(",").sort();
	
	var i;
	var htmlJose = '';
	var htmlPrimo = '';
	var htmlLourenco = '';
	
	meses = new Array("JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIOR","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO");
	hoje = new Date();
	mes = hoje.getMonth();
	ano = hoje.getYear();
	
	$('.data').html(meses[mes+1] + ' ' + hoje.getFullYear());
	
	for(i = 0; i<= ((qtdJose.length) -1); ++i) {
		htmlJose += '<tr><td class="nome" align="left">' + qtdJose[i] + '</td><td></td><td></td></tr>';
	}
	for(i = 0; i<= ((qtdPrimo.length) -1); ++i) {
		htmlPrimo += '<tr><td <td class="nome" align="left">' + qtdPrimo[i] + '</td><td></td><td></td></tr>';
	}
	for(i = 0; i<= ((qtdLourenco.length) -1); ++i) {
		htmlLourenco += '<tr><td <td class="nome" align="left">' + qtdLourenco[i] + '</td><td></td><td></td></tr>';
	}
	$('#tabelaJose tr:last').after(htmlJose);	
	$('#tabelaPrimo tr:last').after(htmlPrimo);
	$('#tabelaLourenco tr:last').after(htmlLourenco);
}  
