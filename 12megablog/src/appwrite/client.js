import { Client } from "appwrite";
import conf from "../conf/conf";

export const client = new Client()
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);

let pingPromise;

export function pingAppwrite() {
    if (!pingPromise) {
        pingPromise = client.ping()
            .then(() => {
                console.info("Appwrite connection successful");
            })
            .catch((error) => {
                console.error("Appwrite connection failed:", error);
            });
    }

    return pingPromise;
}
