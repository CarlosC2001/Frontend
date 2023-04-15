import { axiosConfig } from "../configurations/axiosConfig";

const getTipoEquipos = (estado) => {
  return axiosConfig.get("tipoequipo?estado=" + estado, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const createTipoEquipo = (data={}) => {
    return axiosConfig.post("tipoequipo",data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
};

const borrarTipoEquipo = (id) => {
  return axiosConfig.delete(`tipoequipo/${id}`, {}, {
   headers: {
      'Content-type': 'application/json'
   }
  });
}


const editarTipoEquipo  = (id,data) => {
    return axiosConfig.put(`tipoequipo/${id}`,data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
};

export { getTipoEquipos, createTipoEquipo,borrarTipoEquipo, editarTipoEquipo  };
