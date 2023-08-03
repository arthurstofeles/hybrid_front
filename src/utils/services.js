import { ibgeInstance } from "@/utils/api-instance";
import { ENDPOINTS } from "@/utils/constants";

export const getEstados = async () => {
  const { data } = await ibgeInstance.get(ENDPOINTS.ESTADOS);
  return data;
};

export const getCidades = async (UF) => {
  const { data } = await ibgeInstance.get(
    ENDPOINTS.ESTADOS + UF + "/municipios"
  );
  return data;
};
