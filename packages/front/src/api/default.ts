import { api } from "./api-client"

export const ping = async () => await api.get('ping')