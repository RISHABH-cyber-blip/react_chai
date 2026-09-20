const env = import.meta.env

export const conf = {
     appWriteUrl:String(env.VITE_APPWRITE_URL ?? ""),
     appWriteProjectId:String(env.VITE_APPWRITE_PROJECT_ID ?? env.VITE_PROJECT_ID ?? ""),
     appWriteDatabaseId:String(env.VITE_APPWRITE_DATABASE_ID ?? env.VITE_DATABASE_ID ?? ""),
     appWriteCollectionId:String(env.VITE_APPWRITE_COLLECTION_ID ?? env.VITE_COLLECTION_ID ?? ""),
     appWriteBucketId:String(env.VITE_APPWRITE_BUCKET_ID ?? env.VITE_BUCKET_ID ?? "")
}

export default conf