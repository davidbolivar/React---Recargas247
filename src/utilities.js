// ARCHIVO PARA AGREGAR UTILIDADES DE USO COMÚN EN EL PROYECTO

export const btnLoading = (btn_id, text) => {
	let btn = document.getElementById(btn_id);
	btn.disabled = true;
	btn.innerHTML = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${text}`;
};
