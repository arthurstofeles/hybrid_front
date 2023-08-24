import { ibgeInstance, apiInstance } from "@/utils/api-instance";
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

export const sendContato = async (payload) => {
  const { data } = await apiInstance.get(ENDPOINTS.LEAD, payload);
  return data;
};

export const sendSimulacao = async (payload) => {
  const { data } = await apiInstance.post(ENDPOINTS.SIMULADOR, payload);
  return data;
};

export const getParams = async (payload) => {
  const { data } = await apiInstance.get(ENDPOINTS.PARAMERS, payload);
  return data;
};
