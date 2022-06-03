import axios from "axios";

const apiHost = process.env.NEXT_PUBLIC_HOST || "";
const headers = { "Content-Type": "application/json" };

export async function getAsync<TResult>(
  paths: string,
  params?: { [k: string]: string | number | Date | undefined }
) {
  return axios.get<TResult>(`${apiHost}${paths}`, { params, headers });
}

export async function postAsync<TResult>(
  paths: string,
  params?: { [k: string]: string | number | undefined }
) {
  return axios.post<TResult>(`${apiHost}${paths}`, { params, headers });
}

export async function putAsync<TResult>(
  paths: string,
  params?: { [k: string]: string | number | undefined }
) {
  return axios.put<TResult>(`${apiHost}${paths}`, { params, headers });
}

export async function deleteAsync<TResult>(paths: string) {
  return axios.delete<TResult>(`${apiHost}${paths}`, { headers });
}
