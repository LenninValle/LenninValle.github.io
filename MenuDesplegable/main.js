const btnDepartamentos = document.getElementById('btn-departamentos'), 
	  grid = document.getElementById('grid');
	  esDispositivoMovil = () => window.innerWidth <= 800;


btnDepartamentos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
	grid.classList.add('activo');		
	}

});

grid.addEventListener('mouseleave',()=>{
	if (!esDispositivoMovil()) {}
	grid.classList.remove('activo');
});

document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
	elemento.addEventListener('mouseenter',(e)=>{
		document.querySelectorAll('#menu .subcategoria').forEach((categoria)=>{
			categoria.classList.remove('activo');
			if(categoria.dataset.categoria == e.target.dataset.categoria){
				categoria.classList.add('activo');
			}
		});
	});
});



