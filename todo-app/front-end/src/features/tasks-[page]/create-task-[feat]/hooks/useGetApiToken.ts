import createClientAndGetToken from "../api/getApiAccessToken";

export default function useGetApiToken() {
    const getApiToken = async () => {
        try {
            const token = await createClientAndGetToken();
            return token;
        } catch (error) {
            console.error("Error getting API token:", error);
            throw new Error("Failed to retrieve API token");
        }
    }

    return { getApiToken };
}