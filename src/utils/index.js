import Swal from 'sweetalert2';


export const getPokemon = async (name) => {
  let controller = new AbortController();
  let signal = controller.signal;
  let data;

  try {
    if (name === '') throw new Error({ type: 'vacio' });
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal });
    data = await response.json();

  }
  catch (error) {
    error.type === 'vacio' ? Swal.fire({ icon: 'warning', title: 'Recuerde...', text: 'Debe ingresar un Pokemon' }) :
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'El Pokemon solicitado no existe' });
  }
  finally {
    return {
      data,
      controller
    };
  }
};