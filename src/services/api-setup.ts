//apiRequest interface
interface ApiRequestOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  endpoint: string;
  param?: any;
}

//apiRequest function
export async function apiRequest<T>({
  method,
  endpoint,
  param,
}: ApiRequestOptions): Promise<T> {
  const path = "https://localhost:44364/api"; //IIS EXPRESS dotnet C#

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (param && method !== "GET") {
    config.body = JSON.stringify(param);
  }

  const response = await fetch(`${path}${endpoint}`, config);

  if (!response.ok) {
    const errorData = await response.json();
    const errorMessage = errorData.message || "Error";
    throw new Error(errorMessage);
  }

  return response.json() as Promise<T>;
}
